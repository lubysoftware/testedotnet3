using System.Collections.Generic;
using Controle_de_Horas.Models;
using System.Web.Mvc;
using System.Data.SqlClient;
using System;
using Controle_de_Horas.Repository.AppService.LançamentoDeHora;
using System.Linq;
using System.Data;

namespace Controle_de_Horas.Controllers
{
    public class HomeController : Controller
    {
        LançamentoDeHoraAppService _cadLançamento = new LançamentoDeHoraAppService();
        public ActionResult Index()
        {
            var lstRetorno = _cadLançamento.ListarLancamento().Where(k => k.DataInicio >= DateTime.Now.AddDays(-7) && k.DataFim <= DateTime.Now).ToList();
            var lstTela = new List<Lancamento_De_Horas>();

            var lstDesenvolvedores = lstRetorno.Select(k => k.NomeDev).Distinct().ToList();
            for (var i=0; i < lstDesenvolvedores.Count; i++)
            {
                var newLst = lstRetorno.Where(k => k.NomeDev == lstDesenvolvedores[i]).ToList();
                if (newLst.Count != 0)
                {
                    var toltaHR_Dev = new TimeSpan();
                    List<TimeSpan> timeSpans = new List<TimeSpan>();

                    for (var tempo = 0; tempo < newLst.Count; tempo++)
                    {
                        timeSpans.Add(newLst[tempo].Horas_trabalhadas);
                    }

                    TimeSpan sumTillNowTimeSpan = TimeSpan.Zero;
                    foreach (TimeSpan timeSpan in timeSpans)
                    {
                        toltaHR_Dev = sumTillNowTimeSpan += timeSpan;
                    }

                    var itemtela = new Lancamento_De_Horas();
                    itemtela.NomeDev = lstDesenvolvedores[i];
                    itemtela.Horas_trabalhadas = toltaHR_Dev;
                    itemtela.DataInicio = DateTime.Now.AddDays(-7);
                    itemtela.DataFim = DateTime.Now;
                    lstTela.Add(itemtela);
                }
            }

            lstTela = lstTela.OrderByDescending(k => k.Horas_trabalhadas).Take(5).ToList();

            return View(lstTela);
        }
        public ActionResult Contato()
        {
            return View();
        }
    }
}