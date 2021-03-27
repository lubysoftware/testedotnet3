using PagedList;
using Projeto_Luby.AppServices;
using Projeto_Luby;
using Projeto_Luby.ViewModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Projeto_Luby.Controllers
{
    public class HomeController : Controller
    {
        #region Metodos Entity
        Metodos_DesenvolvedoresAppService desenvolvedores = new Metodos_DesenvolvedoresAppService();
        Metodos_ProjetosAppService projetos = new Metodos_ProjetosAppService();
        Metodos_LancamentosAppService lancamentos = new Metodos_LancamentosAppService();
        #endregion

        #region Telas
        public ActionResult Contact()
        {
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Desenvolvedores()
        {
            return View();
        }

        public ActionResult Projetos()
        {
            var lst = BuscaDesenvolvedores();
            ViewBag.Responsaveis = lst;
            return View();
        }

        public ActionResult Lancamento_Horas()
        {
            var lst = BuscaDesenvolvedores();
            ViewBag.Desenvolvedor = lst;
            return View();
        }

        public ActionResult CadastroDesenvolvedores()
        {
            return View();
        }

        public ActionResult CadastroProjetos()
        {
            var lst = BuscaDesenvolvedores();
            ViewBag.ResponsavelCAD = lst;
            return View();
        }

        public ActionResult CadastroLancamento()
        {
            var lst = BuscaDesenvolvedores();
            ViewBag.DesenvolvedorCAD = lst;
            return View();
        }
        #endregion

        #region Metodos de Pesquisa
        public ActionResult PesquisaRanking()
        {
            //Pegar data de uma semana
            DateTime semana = DateTime.Now.AddDays(-7);
            var lstLancamento = lancamentos.ListaLancamentos().Where(l => l.PERIODO >= semana && l.PERIODO <= DateTime.Now).ToList();
            var NomeRepetidos = lstLancamento.Select(l => l.NOME).Distinct().ToList();
            var lstRetorno = new List<RANKING>();
            
            //Calcular horas total da semana por desenvolvedor
            for (var i = 0; NomeRepetidos.Count > i; i++)
            {
                var lstPorNome = lstLancamento.Where(l => l.NOME == NomeRepetidos[i]).OrderBy(l => l.PERIODO).ToList();
                var time = new TimeSpan();
                for (var l = 0; lstPorNome.Count > l; l++)
                {
                    time = time.Add(lstPorNome[l].HORAS);
                }
                //Montando objeto
                var objeto = new RANKING();
                objeto.Nome = NomeRepetidos[i];
                objeto.Tempo = time;
                objeto.DataInicio = Convert.ToString(lstPorNome.First().PERIODO).Substring(0, 10);
                objeto.DataFim = Convert.ToString(lstPorNome.Last().PERIODO).Substring(0, 10);
                lstRetorno.Add(objeto);
            }

            lstRetorno = lstRetorno.OrderByDescending(l => l.Tempo).Take(5).ToList();

            return PartialView("_PartialListRanking", lstRetorno);
        }

        public ActionResult PesquisaDesenvolvedores(DESENVOLVEDORES dadosTela)
        {

            var lstDesevolvedores = desenvolvedores.ListaDesenvolvedores().OrderBy(l => l.NOME).ToList();
            if (!string.IsNullOrWhiteSpace(dadosTela.NOME))
            {
                lstDesevolvedores = lstDesevolvedores.Where(l => l.NOME.Contains(dadosTela.NOME)).ToList();
            }
            if (!string.IsNullOrWhiteSpace(dadosTela.LINGUAGEM))
            {
                lstDesevolvedores = lstDesevolvedores.Where(l => l.LINGUAGEM.Contains(dadosTela.LINGUAGEM)).ToList();
            }
            lstDesevolvedores.ForEach(l =>
            {
                if (l.LINGUAGEM == "CC")
                {
                    l.LINGUAGEM = "C#";
                }
                if (l.LINGUAGEM == "JA")
                {
                    l.LINGUAGEM = "JAVA";
                }
                if (l.LINGUAGEM == "PH")
                {
                    l.LINGUAGEM = "PHP";
                }
                if (l.LINGUAGEM == "PY")
                {
                    l.LINGUAGEM = "PYTHON";
                }
                if (l.LINGUAGEM == "CO")
                {
                    l.LINGUAGEM = "COBOL";
                }
            });

            return PartialView("_PartialListDesenvolvedores", lstDesevolvedores);
        }

        public ActionResult PesquisaProjetos(PROJETOS dadosTela)
        {

            var lstProjetos = projetos.ListaProjeto().OrderBy(l => l.NOME_PROJETO).ToList();
            if (!string.IsNullOrWhiteSpace(dadosTela.NOME_PROJETO))
            {
                lstProjetos = lstProjetos.Where(l => l.NOME_PROJETO.Contains(dadosTela.NOME_PROJETO)).ToList();
            }
            if (!string.IsNullOrWhiteSpace(dadosTela.RESPONSAVEL))
            {
                lstProjetos = lstProjetos.Where(l => l.RESPONSAVEL.Contains(dadosTela.RESPONSAVEL)).ToList();
            }
            return PartialView("_PartialListProjetos", lstProjetos);
        }

        public ActionResult PesquisaLancamento(LANCAMENTO_HORAS dadosTela)
        {
            var lstLancamento = lancamentos.ListaLancamentos().OrderBy(l => l.NOME).ToList();

            if (!string.IsNullOrWhiteSpace(dadosTela.NOME))
            {
                lstLancamento = lstLancamento.Where(l => l.NOME.Contains(dadosTela.NOME)).ToList();
            }
            if (!string.IsNullOrWhiteSpace(dadosTela.DATA_INICIAL) && !string.IsNullOrWhiteSpace(dadosTela.DATA_FINAL))
            {
                lstLancamento = lstLancamento.Where(l => l.PERIODO >= Convert.ToDateTime(dadosTela.DATA_INICIAL) && l.PERIODO <= Convert.ToDateTime(dadosTela.DATA_FINAL)).ToList();
            }
            lstLancamento.ForEach(l =>
            {
                l.DS_PERIODO = Convert.ToString(l.PERIODO).Substring(0, 10);
            });
            return PartialView("_PartialListLancamento", lstLancamento);
        }
        #endregion

        #region Metodos de Cadastro
        public JsonResult InserirDesenvolvedor(DESENVOLVEDORES dadosTela)
        {
            try
            {
                var isvalid = new Desenvolvedores_Validation().Validate(dadosTela);
                if (isvalid.IsValid)
                {
                    dadosTela.HORARIO = DateTime.Now;
                    dadosTela.COMPUTADOR = Environment.MachineName;
                    desenvolvedores.CadastrarDesenvolvedor(dadosTela);
                    dadosTela.mensagemCallback = "Desenvolvedor cadastrado com sucesso !!";
                    dadosTela.isSuccess = true;
                }
                else
                {
                    dadosTela.isSuccess = false;
                    dadosTela.mensagemCallback = "Desenvolvedor ja cadastrado !!";
                }
                return Json(dadosTela, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                dadosTela.isSuccess = false;
                dadosTela.mensagemCallback = "Erro ao cadastrar desenvolvedor !";
                return Json(dadosTela, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult InserirProjeto(PROJETOS dadosTela)
        {
            try
            {
                var isvalid = new Projetos_Validation().Validate(dadosTela);
                if (isvalid.IsValid)
                {
                    dadosTela.HORARIO = DateTime.Now;
                    dadosTela.COMPUTADOR = Environment.MachineName;
                    projetos.CadastrarProjeto(dadosTela);
                    dadosTela.isSuccess = true;
                    dadosTela.mensagemCallback = "Projeto cadastrado com sucesso!!";
                }
                else
                {
                    dadosTela.isSuccess = false;
                    dadosTela.mensagemCallback = "Projeto ja cadastrado !!";
                }
                return Json(dadosTela, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                dadosTela.isSuccess = false;
                dadosTela.mensagemCallback = "Erro ao cadastrar projeto !";
                return Json(dadosTela, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult InserirLancamento(LANCAMENTO_HORAS dadosTela)
        {
            try
            {
                dadosTela.HORARIO = DateTime.Now;
                dadosTela.COMPUTADOR = Environment.MachineName;
                lancamentos.CadastrarLancamento(dadosTela);
                dadosTela.isSuccess = true;
                dadosTela.mensagemCallback = "Lançamento cadastrado com sucesso !!";
                return Json(dadosTela, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                dadosTela.isSuccess = false;
                dadosTela.mensagemCallback = "Erro ao cadastrar lançamento !";
                return Json(dadosTela, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Metodos Editar
        public JsonResult DadosEditarDesenvolvedores(string ID)
        {
            var entidade = desenvolvedores.ListaDesenvolvedores().FirstOrDefault(l => l.ID == Convert.ToInt32(ID));
            return Json(entidade, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DadosEditarProjetos(string ID)
        {
            var entidade = projetos.ListaProjeto().FirstOrDefault(l => l.ID == Convert.ToInt32(ID));
            return Json(entidade, JsonRequestBehavior.AllowGet);
        }

        public JsonResult EditarDesenvolvedor(DESENVOLVEDORES dadosTela)
        {
            try
            {
                dadosTela.HORARIO = DateTime.Now;
                dadosTela.COMPUTADOR = Environment.MachineName;
                desenvolvedores.AtualizaDesenvolvedor(dadosTela);
                dadosTela.mensagemCallback = "";
                dadosTela.isSuccess = true;

                return Json(dadosTela, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                dadosTela.isSuccess = false;
                dadosTela.mensagemCallback = "Erro ao alterar desenvolvedor !";
                return Json(dadosTela, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult EditarProjeto(PROJETOS dadosTela)
        {
            try
            {
                var isvalid = new Projetos_Validation().Validate(dadosTela);
                if (isvalid.IsValid)
                {
                    dadosTela.HORARIO = DateTime.Now;
                    dadosTela.COMPUTADOR = Environment.MachineName;
                    projetos.AtualizaProjeto(dadosTela);
                    dadosTela.mensagemCallback = "";
                    dadosTela.isSuccess = true;
                }
                else
                {
                    dadosTela.isSuccess = false;
                    dadosTela.mensagemCallback = "Projeto ja cadastrado !!";
                }
                return Json(dadosTela, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                dadosTela.isSuccess = false;
                dadosTela.mensagemCallback = "Erro ao alterar projeto !";
                return Json(dadosTela, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Metodos Deletar
        public JsonResult DeletarLancamento(LANCAMENTO_HORAS dadosTela)
        {
            lancamentos.DeletarLancamento(dadosTela);
            return Json(dadosTela, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeletarDesenvolvedor(DESENVOLVEDORES dadosTela)
        {
            desenvolvedores.DeletarDesenvolvedor(dadosTela);
            return Json(dadosTela, JsonRequestBehavior.AllowGet);

        }

        public JsonResult DeletarProjeto(PROJETOS dadosTela)
        {
            projetos.DeletarProjeto(dadosTela);
            return Json(dadosTela, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Metodos Comuns
        public List<SelectListItem> BuscaDesenvolvedores()
        {
            var lstResponsaveis = desenvolvedores.ListaDesenvolvedores().Distinct().ToList();
            var LstViewBag = lstResponsaveis.Select(l => new SelectListItem() { Text = l.NOME, Value = l.NOME }).ToList();
            return LstViewBag;
        }
        #endregion

    }
}