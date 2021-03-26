using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Controle_de_Horas.Models;
using System.Web.Mvc;
using Controle_de_Horas.Repository;

namespace Controle_de_Horas.Controllers
{
    public class ProjetoController : Controller
    {
        ProjetoAppService _cadProjeto = new ProjetoAppService();

        // GET: Projeto
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListarProjetos(Projeto paramPesquisa)
        {
            var lstRetorno = _cadProjeto.ListarProjeto().ToList();

            return PartialView("_PartialResultProjeto", lstRetorno);
        }
        public ActionResult CadastrarProjeto(Projeto paramInsert)
        {
            if (paramInsert.Descricao != null)
            {
                _cadProjeto.Cadastrar(paramInsert);
            }

            return JsonResult(mensagem: "Projeto cadastrado com Sucesso!");
        }
        public ActionResult DeletarProjeto(Projeto item)
        {
            if (item != null)
            {
                _cadProjeto.ExcluirProjeto(item);
            }
            return JsonResult(mensagem: "Projeto Deletado com Sucesso!");
        }
        public JsonResult Editar(string id)
        {
            var obj = _cadProjeto.ListarProjeto().FirstOrDefault(k => k.IdProjeto == Convert.ToInt32(id));

            return Json(obj, JsonRequestBehavior.AllowGet);
        }
        public ActionResult EditarProjeto(Projeto paramEdit)
        {
            if (paramEdit != null)
            {
                _cadProjeto.Editar(paramEdit);
            }
            return JsonResult(mensagem: "Projeto Editado com Sucesso!");
        }
        private ActionResult JsonResult(string mensagem)
        {
            var jsonRetorno = Json(mensagem, JsonRequestBehavior.AllowGet);

            return jsonRetorno;
        }
    }
}