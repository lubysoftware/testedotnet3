using Controle_de_Horas.Models;
using Controle_de_Horas.Repository.AppService.Desenvolvedor;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Controle_de_Horas.Controllers.Desenvolvedor
{
    public class DesenvolvedorController : Controller
    {
        Cadastro_DesenvolvedorAppService _cadDesenv = new Cadastro_DesenvolvedorAppService();

        // GET: Desenvolvedor
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Listar(Cadastro_Desenvolvedor paramPesquisa)
        {
            var lstRetorno = _cadDesenv.ListarDev().ToList();

            if (paramPesquisa.Id > 0)
            {
                lstRetorno = lstRetorno.Where(K => K.Id == paramPesquisa.Id).ToList();
            }
            if (!string.IsNullOrWhiteSpace(paramPesquisa.Nome))
            {
                lstRetorno = lstRetorno.Where(K => K.Nome.Contains(paramPesquisa.Nome)).ToList();
            }
            if (!string.IsNullOrWhiteSpace(paramPesquisa.Cargo))
            {
                lstRetorno = lstRetorno.Where(K => K.Cargo.Contains(paramPesquisa.Cargo)).ToList();
            }

            return PartialView("_PartialResult", lstRetorno);
        }

        public ActionResult SalvarCadastro(Cadastro_Desenvolvedor paramInsert)
        {
            if (paramInsert.Nome != null & paramInsert.Cargo != null)
            {
                _cadDesenv.Cadastrar(paramInsert);
            }            

            return JsonResult(mensagem: "Desenvolvedor cadastrado com Sucesso!");
        }

        public ActionResult DeletarItem(Cadastro_Desenvolvedor item)
        {
            if (item != null)
            {
                _cadDesenv.ExcluirItem(item);
            }
            return JsonResult(mensagem: "Desenvolvedor Deletado com Sucesso!");
        }
        public JsonResult Editar(string id)
        {
            var obj = _cadDesenv.ListarDev().FirstOrDefault(k => k.Id == Convert.ToInt32(id));

            return Json(obj, JsonRequestBehavior.AllowGet);
        }
        public ActionResult EditarItem(Cadastro_Desenvolvedor paramEdit)
        {
            if (paramEdit.Nome != null & paramEdit.Cargo != null)
            {
                _cadDesenv.Editar(paramEdit);
            }

            return JsonResult(mensagem: "Desenvolvedor Editado com Sucesso!");
        }
        private ActionResult JsonResult(string mensagem)
        {
            var jsonRetorno = Json(mensagem, JsonRequestBehavior.AllowGet);

            return jsonRetorno;
        }
    }
}