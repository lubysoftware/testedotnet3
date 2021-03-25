﻿using Controle_de_Horas.Models;
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

        //private readonly ICadastro_Desenvolvedor _cadDesenv;
        //public DesenvolvedorController(ICadastro_Desenvolvedor cadDesenv)
        //{
        //    _cadDesenv = cadDesenv;
        //}
        // GET: Desenvolvedor
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Listar(Cadastro_Desenvolvedor paramPesquisa)
        {
            var lstRetorno = _cadDesenv.ListarDev().ToList();

            return PartialView("_PartialResult", lstRetorno);
        }
        public ActionResult Cadastrar()
        {
            return PartialView("_PartialFormulárioCadastro");
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

        private ActionResult JsonResult(string mensagem)
        {
            var jsonRetorno = Json(mensagem, JsonRequestBehavior.AllowGet);

            return jsonRetorno;
        }
    }
}