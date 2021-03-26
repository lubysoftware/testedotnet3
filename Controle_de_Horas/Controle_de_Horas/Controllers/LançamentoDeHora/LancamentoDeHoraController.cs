using Controle_de_Horas.Models;
using Controle_de_Horas.Repository;
using Controle_de_Horas.Repository.AppService.Desenvolvedor;
using Controle_de_Horas.Repository.AppService.LançamentoDeHora;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Controle_de_Horas.Controllers.LançamentoDeHora
{
    public class LancamentoDeHoraController : Controller
    {
        ProjetoAppService _cadProjeto = new ProjetoAppService();
        Cadastro_DesenvolvedorAppService _cadDesenv = new Cadastro_DesenvolvedorAppService();
        LançamentoDeHoraAppService _cadLançamento = new LançamentoDeHoraAppService();

        // GET: LancamentoDeHora
        public ActionResult Index()
        {
            ViewBag.Projeto = _cadProjeto.ListarProjeto().Select(k => new SelectListItem() { Text = k.Descricao, Value = Convert.ToString(k.Descricao)}).ToList();
            ViewBag.Desenvolvedor = _cadDesenv.ListarDev().Select(k => new SelectListItem() { Text = k.Nome, Value = Convert.ToString(k.Nome) }).ToList();
            return View();
        }
        public ActionResult Listar(Lancamento_De_Horas paramPesquisa)
        {
            var lstRetorno = _cadLançamento.ListarLancamento().ToList();

            return PartialView("_PartialResult", lstRetorno);
        }
        public ActionResult LançarHoras(Lancamento_De_Horas paramInsert)
        {
            _cadLançamento.Cadastrar(paramInsert);

            return JsonResult(mensagem: "Lançamento realizado com Sucesso!");
        }
        private ActionResult JsonResult(string mensagem)
        {
            var jsonRetorno = Json(mensagem, JsonRequestBehavior.AllowGet);

            return jsonRetorno;
        }
    }
}