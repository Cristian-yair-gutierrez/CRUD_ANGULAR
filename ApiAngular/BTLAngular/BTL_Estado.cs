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
        public spListaEstadoResult[] spListaEstado()
        {
            return dbAngular.spListaEstado().ToArray();
        }
    }
}
