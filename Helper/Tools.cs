//using Newtonsoft.Json;
//using System;
//using System.Collections.Generic;
//using System.Configuration;
//using System.Globalization;
//using System.IO;
//using System.Linq;
//using System.Reflection.Emit;
//using System.Runtime.Remoting.Contexts;
//using System.Security.Policy;
//using System.Threading;
//using System.Web;
//using System.Web.Configuration;
//using System.Web.Mvc;
//using System.Web.Mvc.Html;

using System.Threading.Tasks;
using Skill4IT.CommonTypes.GuestServicePortal;

using System.Net.Http;
using System.Text;
using Microsoft.AspNetCore.Html;
using System.Collections.Generic;
using System;
using FetchAppsettingsValue;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace Skill4IT.WebApps.GuestServicePortal.Helpers
{
    public class Tools
    {

        static IServiceProvider services = null;

        /// <summary>
        /// Provides static access to the framework's services provider
        /// </summary>
        public static IServiceProvider Services
        {
            get { return services; }
            set
            {
                if (services != null)
                {
                    throw new Exception("Can't set once a value has already been set.");
                }
                services = value;
            }
        }
        /// <summary>
        /// Provides static access to the current HttpContext
        /// </summary>
        public static HttpContext HttpContext_Current
        {
            get
            {
                IHttpContextAccessor httpContextAccessor = services.GetService(typeof(IHttpContextAccessor)) as IHttpContextAccessor;
                return httpContextAccessor?.HttpContext;
            }
        }

        public static IHostingEnvironment HostingEnvironment
        {
            get
            {
                return services.GetService(typeof(IHostingEnvironment)) as IHostingEnvironment;
            }
        }

        public static AppSettings Config
        {
            get
            {
                //This works to get file changes.
                var s = services.GetService(typeof(IOptionsMonitor<AppSettings>)) as IOptionsMonitor<AppSettings>;
                AppSettings config = s.CurrentValue;

                return config;
            }
        }

        public static List<KeyValuePair<string, string>> BuildHeaders()
        {
            var headers = new List<KeyValuePair<string, string>>();
            //leer del wbConfig
            if (!string.IsNullOrEmpty(Tools.UserName))
                headers.Add(new KeyValuePair<string, string>("username", Tools.UserName));

            if (!string.IsNullOrEmpty(Tools.Password))
                headers.Add(new KeyValuePair<string, string>("password", Tools.Password));

            if (!string.IsNullOrEmpty(Tools.CompanyAuthId))
                headers.Add(new KeyValuePair<string, string>("companyAuthId", Tools.CompanyAuthId));

            //if (!string.IsNullOrEmpty(parameters.webserviceIDCompany))
            //    headers.Add(new KeyValuePair<string, string>("companyId", parameters.webserviceIDCompany));

            return headers;
        }

        /// <summary>
        /// Configuration settings from appsetting.json.
        /// </summary>
        

        public static HtmlString Sanitize(string toSanitize)
        {
            return new HtmlString(toSanitize);
        }

       
        public static string UrlGSPService
        {
            get
            {
                var serviceUrl = Config.gspServiceUrl;
                return serviceUrl;
            }
        }

        public static string UserName
        {
            get
            {
                var user = Config.username;
                return user;
            }
        }

        public static string Password
        {
            get
            {
                var pass = Config.password;
                return pass;
            }
        }

        public static string CompanyAuthId
        {
            get
            {
                var authId = Config.companyAuthId;
                return authId;
            }
        }


    }

    
}
