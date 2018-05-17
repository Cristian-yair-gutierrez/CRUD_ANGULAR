using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiAngular.Controllers
{
    public class EstadoController : ApiController
    {
        [ActionName("ListaEstados"), HttpGet]
        public DALAngular.spListaEstadoResult[] GetEstados()
        {
            return Connection.Ins.dbconnec.spListaEstado();
        }        
    }
}
