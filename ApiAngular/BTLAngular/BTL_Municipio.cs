using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DALAngular;
namespace BTLAngular
{
    public partial class Objeto
    {
        public spListaMunicipioByEstadosResult[] spListaMunicipioByEstados(int idEstado)
        {
            return dbAngular.spListaMunicipioByEstados(idEstado).ToArray();
        }
        public int InsertaMunicipio(int idEstado, string Descripcion)
        {
            int? result = 0;
            dbAngular.spInsertaMunicipio(idEstado, Descripcion, ref result);
            return result.Value;
        }
        public void ModificaMunicipio(int idMunicipio, string Descripcion)
        {
            dbAngular.spModificaMunicipio(idMunicipio, Descripcion);
        }
        public void EliminaMunicipio(int idMunicipio)
        {
            dbAngular.spEliminaMunicipio(idMunicipio);
        }
    }
}
