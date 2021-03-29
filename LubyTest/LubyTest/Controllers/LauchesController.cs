using System;
using System.Threading.Tasks;
using LubyTest.Data;
using LubyTest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using TesteLuby.Interfaces;

namespace LubyTest.Controllers
{
    public class LauchesController : Controller
    {
        private readonly TesteDbContext _context;
        private readonly ILauchRepository _lauchRepository;
      

        public LauchesController(ILauchRepository lauchRepository, TesteDbContext context)
        {
            _lauchRepository = lauchRepository;
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var lauch = await _lauchRepository.GetAll();    
            return View(lauch);
        }
        public async Task<IActionResult> Ranking()
        {

            return View(await _lauchRepository.GetRankingOrderByHour());
        }
        public async Task<IActionResult> Details(Guid id)
        {

            var lauch = await _lauchRepository.GetById(id);
            await _lauchRepository.GetAll();

            if (lauch == null)

             {
                 return NotFound();
             }

             return View(lauch);
             
        }

        public IActionResult Create()
        {
            ViewData["ProjectId"] = new SelectList(_context.Projects, "Id", "Name");
            ViewData["DeveloperId"] = new SelectList(_context.Developers, "Id", "Name");
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Lauch lauch)
        {
            if (!ModelState.IsValid) return View(lauch);

            await _lauchRepository.Create(lauch);

            ViewData["ProjectId"] = new SelectList(_context.Projects, "Id", "Name", lauch.ProjectId);
            ViewData["DeveloperId"] = new SelectList(_context.Developers, "Id", "Name", lauch.DeveloperId);
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Edit(Guid id)
        {
            ViewData["ProjectId"] = new SelectList(_context.Projects, "Id", "Name");
            ViewData["DeveloperId"] = new SelectList(_context.Developers, "Id", "Name");
            var lauch = await _lauchRepository.GetById(id);
            if (lauch == null)
            {
                return NotFound();
            }

            return View(lauch);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, Lauch lauch)
        {
            if (id != lauch.Id) return NotFound();

            if (!ModelState.IsValid) return View(lauch);

            await _lauchRepository.Update(lauch);

            ViewData["ProjectId"] = new SelectList(_context.Projects, "Id", "Name",lauch.ProjectId);
            ViewData["DeveloperId"] = new SelectList(_context.Developers, "Id", "Name", lauch.DeveloperId);
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Delete(Guid id)
        {

            var lauch = await _lauchRepository.GetById(id);
            await _lauchRepository.GetAll();
            if (lauch == null)
            {
                return NotFound();
            }
            
            return View(lauch);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var lauch = await _lauchRepository.GetById(id);
            if (id != lauch.Id) return NotFound();

            if (!ModelState.IsValid) return View(lauch);

            await _lauchRepository.Remove(lauch);

            return RedirectToAction("Index");
        }
       
    }
}