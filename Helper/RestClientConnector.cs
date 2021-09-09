using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Configuration;

namespace Skill4IT.WebApps.GuestServicePortal.Helpers
{
    public class RestClientConnector
    {
        public static async Task<T> RequestRestMethod<T>(string ulrWebServices, string methodName, List<KeyValuePair<string, string>> headers, HttpContent content = null, bool usePOST = false, bool logJsonResponse = true)
        {
            
            //if (bool.TryParse(System.Configuration.ConfigurationManager["usesTls"], out useTls) && useTls)
            //    System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;

            string result = null;
            try
            {
                using (var client = new HttpClient())
                {
                    //if (headers == null)
                    //    headers = new List<KeyValuePair<string, string>>();

                    //if (headers.Exists(p => p.Key == Tools.TokenName))
                    //{
                    //    var tokenHeader = headers.Find(p => p.Key == Tools.TokenName);
                    //    headers.Remove(tokenHeader);
                    //}

                    //headers.Add(new KeyValuePair<string, string>(Tools.TokenName, Tools.TokenValue));

                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.Timeout = TimeSpan.FromMinutes(10);

                    if (headers != null)
                    {
                        foreach (var header in headers)
                        {
                            var added = client.DefaultRequestHeaders.TryAddWithoutValidation(header.Key, header.Value);
                            
                        }
                    }

                    var requestUri = (!methodName.StartsWith(ulrWebServices)) ? string.Format("{0}{2}{1}", ulrWebServices, methodName, (!ulrWebServices.EndsWith("/") ? "/" : "")) : methodName;

                    
                    LogHeader(client);

                    if (!usePOST)
                    {
                        var responseMessage = await client.GetAsync(requestUri);
                        result = await responseMessage.Content.ReadAsStringAsync();

                        
                        var res2 = DeserializeTokenJson<T>(result);
                        //parche para cuando hay error en los servicios pero viene como Json por lo que deserializa con éxito y devuelve un objeto con valores por defecto.
                        if (responseMessage.ToString().Contains("StatusCode: 500") || responseMessage.ToString().Contains("StatusCode: 404"))
                            throw new Exception(responseMessage.ToString());
                        return res2;
                    }
                    else
                    {
                        var responseMessage = await client.PostAsync(requestUri, content);
                        result = await responseMessage.Content.ReadAsStringAsync();

                        var res2 = DeserializeTokenJson<T>(result);
                        //parche para cuando hay error en los servicios pero viene como Json por lo que deserializa con éxito y devuelve un objeto con valores por defecto.
                        if (responseMessage.ToString().Contains("StatusCode: 500") || responseMessage.ToString().Contains("StatusCode: 404"))
                            throw new Exception(responseMessage.ToString());
                        return res2;
                    }

                }
            }
            catch (Exception excp)
            {
                string messageToLog = excp + " SERVICE RESULT: " + result ?? "null";
                //LogWriter.LogError(messageToLog);
                throw new RestClientException("Error while requesting service using RestClientConnector." + "<br />" + "SERVICE RESULT: " + result + "<br />", excp);
            }

        }

        protected static T DeserializeTokenJson<T>(string strJSON)
        {
            var response = JsonConvert.DeserializeObject<T>(strJSON);
            return response;
        }

        protected static void LogHeader(HttpClient client)
        {
            string headers = "";
            IEnumerable<string> userNameValues;
            IEnumerable<string> userPasswordValues;
            IEnumerable<string> webServiceIDCompanyValues;
            IEnumerable<string> idExternalCompanyAuthValues;

            string userName = "";
            if (client.DefaultRequestHeaders.TryGetValues("username", out userNameValues))
                userName = userNameValues.FirstOrDefault();

            string userPassword = "";
            if (client.DefaultRequestHeaders.TryGetValues("password", out userPasswordValues))
                userPassword = userPasswordValues.FirstOrDefault();

            string webServiceIDCompany = "";
            if (client.DefaultRequestHeaders.TryGetValues("companyId", out webServiceIDCompanyValues))
                webServiceIDCompany = webServiceIDCompanyValues.FirstOrDefault();
            string idExternalCompanyAuth = "";
            if (client.DefaultRequestHeaders.TryGetValues("companyAuthId", out idExternalCompanyAuthValues))
                idExternalCompanyAuth = idExternalCompanyAuthValues.FirstOrDefault();

            headers = $"username: {userName} - password: {userPassword} - companyId: {webServiceIDCompany} - companyAuthId: {idExternalCompanyAuth}";
            
        }

    }

    public class RestClientException : Exception
    {
        public RestClientException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}

