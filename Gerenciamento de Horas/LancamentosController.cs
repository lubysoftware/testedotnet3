using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Gerenciamento_de_Horas.Models.LancamentoHora;
using Gerenciamento_de_Horas.Repository;

namespace Gerenciamento_de_Horas
{
    public class LancamentosController : Controller
    {
        private readonly IRepository<Lancamentos> _repository;
        private readonly IRepository<Models.Desenvolvedores.Desenvolvedor> _repositoryDev;

        public LancamentosController(IRepository<Lancamentos> respository, IRepository<Models.Desenvolvedores.Desenvolvedor> repositoryDev)
        {
            _repository = respository;
            _repositoryDev = repositoryDev;
        }


        // GET: Lancamentos
        public async Task<IActionResult> Index()
        {
            return View(await _repository.Get().Include(x=> x.Desenvolvedor).ToListAsync());
        }

        // GET: Lancamentos/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var lancamentos = _repository.GetById(m => m.Id == id);
            if (lancamentos == null)
            {
                return NotFound();
            }

            return View(lancamentos);
        }
    

        
        public IActionResult Create()
        {
            carregarViewBag();
            return View();
        }

        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create( Lancamentos lancamentos)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _repository.Add(lancamentos);
                }
                catch (Exception)
                {

                    throw;
                }


                return RedirectToAction(nameof(Index));
            }
            carregarViewBag();
            return View(lancamentos);
        }

     
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var lancamentos = _repository.GetById(x => x.Id == id);
            if (lancamentos == null)
            {
                return NotFound();
            }
            carregarViewBag();
            return View(lancamentos);
            
            
            
        }

       
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, Lancamentos lancamentos)
        {
            if (id != lancamentos.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _repository.Update(lancamentos);

                }
                catch (Exception)
                {
                    throw;
                }
                return RedirectToAction(nameof(Index));
            }
            carregarViewBag();
            return View(lancamentos);
        }

      
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var lancamentos = _repository.GetById(x => x.Id == id);

            if (lancamentos == null)
            {
                return NotFound();
            }

            return View(lancamentos);
        }

       
        
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Delete(int id)
        {
            var lancamentos = _repository.GetById(x => x.Id == id);
            _repository.Delete(lancamentos);

            return RedirectToAction(nameof(Index));
        }

       private void carregarViewBag()
        {
            var desenvolvedor = _repositoryDev.Get().ToList().Select( x=> new SelectListItem() { 
             Value = x.Id.ToString(),
             Text = x.Nome
            });
           
            ViewBag.Desenvolvedor = desenvolvedor;
        }
    }
}
