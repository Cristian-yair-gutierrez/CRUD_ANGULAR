using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DALAngular;
using System.ComponentModel;
namespace BTLAngular
{
    public partial class Objeto : IDisposable
    {
        #region Propiedades

        private dbAngularDataContext dbAngular = null;

        // Recursos manejados
        private Component componentes = new Component();

        #endregion

        #region Conexion
        public Objeto(string connectionString)
        {
            this.dbAngular = new dbAngularDataContext(connectionString);
        }

        #endregion

        // Indica si ya se llamo al método Dispose. (default = false)
        private Boolean disposed;

        /// <summary>
        /// Implementación de IDisposable. No se sobreescribe.
        /// </summary>
        public void Dispose()
        {
            this.Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    this.componentes.Dispose();
                    this.dbAngular.Dispose();
                }
            }
            this.disposed = true;
        }
    }
}
