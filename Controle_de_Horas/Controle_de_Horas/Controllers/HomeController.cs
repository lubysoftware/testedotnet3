using System.Collections.Generic;
using Controle_de_Horas.Models;
using System.Web.Mvc;
using System.Data.SqlClient;
using System;
using Controle_de_Horas.Repository.AppService.LançamentoDeHora;
using System.Linq;

namespace Controle_de_Horas.Controllers
{
    public class HomeController : Controller
    {
        LançamentoDeHoraAppService _cadLançamento = new LançamentoDeHoraAppService();
        public ActionResult Index()
        {
            var lstDev = _cadLançamento.ListarLancamento().OrderBy(k => k.Horas_trabalhadas).ToList();
            
            return View(lstDev);
        }

        public ActionResult Contato()
        {
            return View();
        }
    }
}