using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts(int startDateIndex)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index + startDateIndex).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        [HttpGet("[action]")]
        public JsonResult getUsuario2()
        {
            var rng = new Random();
            var result = Enumerable.Range(1, 5).Select(index => new Usuario
            {
                id = rng.Next(1, 55),
                name = Summaries[rng.Next(Summaries.Length)]
            }).ToArray();
            return Json(result);
        }

        [HttpGet("[action]")]
        public JsonResult getUser()
        {
            string url = "https://jsonplaceholder.typicode.com";

            IEnumerable<Usuario> usuarios = null;

            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri(url);
                var responseTask = httpClient.GetAsync("users");
                responseTask.Wait();

                var result = responseTask.Result;
                if (result.IsSuccessStatusCode)
                {
                    var readJob = result.Content.ReadAsAsync<IList<Usuario>>();
                    readJob.Wait();
                    usuarios = readJob.Result;

                }
                else
                {
                    //return error here
                }

            }
            var papa = usuarios.ToArray();
            var pp =  Json(papa);
            return pp;
             
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }

        public class Usuario
        {
            public string name { get; set; }
            public int id { get; set; }
        }
    }
}
