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
            var lstRetorno = _cadLançamento.ListarLancamento().Where(k => 
                k.DataInicio >= DateTime.Now.AddDays(-7).Date && k.DataFim <= DateTime.Now).Select(k => k.NomeDev).Distinct().ToList();

            var lstDev = new List<Lancamento_De_Horas>();
            for (var k = 0; k < lstRetorno.Count; k++)
            {
                var obj = new Lancamento_De_Horas();
                obj.NomeDev = lstRetorno[k];
                //obj.Horas_trabalhadas = "";
                obj.DataInicio = DateTime.Now.AddDays(-3).Date;
                obj.DataFim = DateTime.Now;
                lstDev.Add(obj);
            }
            lstDev.Select(k => k.NomeDev).ToList();

            return View(lstDev);
        }

        public ActionResult Contato()
        {
            return View();
        }
    }
}