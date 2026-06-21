using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Gerenciamento_de_Horas.Models.Desenvolvedores;
using Gerenciamento_de_Horas.Models.LancamentoHora;
using Gerenciamento_de_Horas.Repository;

namespace Gerenciamento_de_Horas
{
    public class DesenvolvedorsController : Controller
    {
        private readonly IRepository<Desenvolvedor> _repository;

        public DesenvolvedorsController(IRepository<Desenvolvedor> respository)
        {
            _repository = respository;
        }

     
        public async Task<IActionResult> Index()
        {
            return View(await _repository.Get().ToListAsync());
        }

     
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var desenvolvedor =  _repository.GetById(m => m.Id == id);
            if (desenvolvedor == null)
            {
                return NotFound();
            }

            return View(desenvolvedor);
        }

   
        public IActionResult Create()
        {
            return View();
        }

    
        [HttpPost]
       // [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create( Desenvolvedor desenvolvedor)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _repository.Add(desenvolvedor);
                }
                catch (Exception)
                {

                    throw;
                }
                
                
                return RedirectToAction(nameof(Index));
            }
            return View(desenvolvedor);
        }

       
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var desenvolvedor = _repository.GetById(x=> x.Id ==id);
            if (desenvolvedor == null)
            {
                return NotFound();
            }
            return View(desenvolvedor);
        }

      
        [HttpPost]
       // [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, Desenvolvedor desenvolvedor)
        {
            if (id != desenvolvedor.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _repository.Update(desenvolvedor);
                   
                }
                catch (Exception)
                {
                    throw;
                }
                return RedirectToAction(nameof(Index));
            }
            return View(desenvolvedor);
        }

      
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var desenvolvedor = _repository.GetById(x => x.Id == id);
                
            if (desenvolvedor == null)
            {
                return NotFound();
            }

            return View(desenvolvedor);
        }

       
     
      //  [ValidateAntiForgeryToken]
        public async Task<IActionResult> Delete(int id)
        {
            var desenvolvedor = _repository.GetById(x=> x.Id ==id);
            _repository.Delete(desenvolvedor);
           
            return RedirectToAction(nameof(Index));
        }

        
    }
}
