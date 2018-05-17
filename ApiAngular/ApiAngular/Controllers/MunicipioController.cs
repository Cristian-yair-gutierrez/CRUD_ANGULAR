using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiAngular.Controllers
{
    public class MunicipioController : ApiController
    {
        [ActionName("ListaMunicipioByEstados"), HttpGet]
        public DALAngular.spListaMunicipioByEstadosResult[] GetMunicipioByEstados(int idEstado)
        {
            return Connection.Ins.dbconnec.spListaMunicipioByEstados(idEstado);
        }  

        //[ActionName("EliminaMunicipio"), HttpDelete]
        [HttpDelete]
        public int EliminaMunicipio(int idMunicipio)
        {
            int x = 0;
            try
            {
                Connection.Ins.dbconnec.EliminaMunicipio(idMunicipio);
                x = 1;
            }
            catch
            {
                x = -1;
            }

            return x;
        }
        
        //[ActionName("InsertaMunicipio")]
        //[Route("api/Municipio/InsertaMunicipio")]
        [HttpPost]
        public int InsertaMunicipio(int idEstado, string Descripcion)
        {
            int x = 0;
            try
            {
                x = Connection.Ins.dbconnec.InsertaMunicipio(idEstado, Descripcion);
            }
            catch
            {
                x = -1;
            }

            return x;
        }

        //[ActionName("ModificaMunicipio")]
        [HttpPut]
        public int ModificaMunicipio(int idMunicipio, string Descripcion)
        {
            int x = 0;
            try
            {
                Connection.Ins.dbconnec.ModificaMunicipio(idMunicipio, Descripcion);
                x = 1;
            }
            catch
            {
                x = -1;
            }

            return x;
        }
    }
}
