using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
//using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Threading.Tasks;
using System.Threading;
using System.Web.Http.Cors;
using Newtonsoft.Json;

namespace ApiAngular
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //config.MessageHandlers.Add(new MethodOverrideHandler());
            // Web API configuration and services
            //Habilitando Microsoft Web Api CORS
            var corsAttribute = 
                new EnableCorsAttribute(origins: "http://localhost:4200", headers: "Origin, Content-Type, Accept", methods: "GET, PUT, POST, DELETE, OPTIONS");
            config.EnableCors(corsAttribute);
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Formatters.JsonFormatter.SerializerSettings.NullValueHandling = NullValueHandling.Include;
            config.MessageHandlers.Add(new MethodOverrideHandler());
        }
        //public class PreflightRequestsHandler : DelegatingHandler
        //{
        //    protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        //    {
        //        if (request.Headers.Contains("Origin") && request.Method.Method.Equals("OPTIONS"))
        //        {
        //            var response = new HttpResponseMessage { StatusCode = System.Net.HttpStatusCode.OK };
        //            // Define and add values to variables: origins, headers, methods (can be global)               
        //            response.Headers.Add("Access-Control-Allow-Headers", "accept, content-type");

        //            var tsc = new TaskCompletionSource<HttpResponseMessage>();
        //            tsc.SetResult(response);
        //            return tsc.Task;
        //        }
        //        return base.SendAsync(request, cancellationToken);
        //    }

        //}
        public class MethodOverrideHandler : DelegatingHandler
        {
            readonly string[] _methods = { "DELETE", "HEAD", "PUT", "POST" };
            const string _header = "X-HTTP-Method-Override";

            protected override Task<HttpResponseMessage> SendAsync(
                HttpRequestMessage request, CancellationToken cancellationToken)
            {
                // Check for HTTP POST with the X-HTTP-Method-Override header.
                if (request.Method == HttpMethod.Post && request.Headers.Contains(_header))
                {
                    // Check if the header value is in our methods list.
                    var method = request.Headers.GetValues(_header).FirstOrDefault();
                    if (_methods.Contains(method, StringComparer.InvariantCultureIgnoreCase))
                    {
                        // Change the request method.
                        request.Method = new HttpMethod(method);
                    }
                }
                return base.SendAsync(request, cancellationToken);
            }
        }
    }
}
