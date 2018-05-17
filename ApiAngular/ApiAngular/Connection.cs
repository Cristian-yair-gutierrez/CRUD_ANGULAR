using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace ApiAngular
{
    public class Connection
    {
        private static Connection instance;
        public Connection()
        {
            //
            // TODO: Agregar aquí la lógica del constructor
            //
        }
        public static Connection Ins
        {
            get
            {
                if (instance == null)
                {
                    instance = new Connection();
                }
                return instance;
            }
        }

        public BTLAngular.Objeto dbconnec
        {
            get
            {
                return new BTLAngular.Objeto(ConfigurationManager.ConnectionStrings["EConnectionString"].ConnectionString);
            }
        }
    }
}