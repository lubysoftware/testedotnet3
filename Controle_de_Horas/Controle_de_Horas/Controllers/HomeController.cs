using System.Collections.Generic;
using Controle_de_Horas.Models;
using System.Web.Mvc;
using System.Data.SqlClient;
using System;

namespace Controle_de_Horas.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var lstDev = new List<LancamentoDeHoras>();
            
            return View(lstDev);
        }

        public ActionResult Contato()
        {
            return View();
        }
    }
}