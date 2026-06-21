using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LubyTest.Data;
using LubyTest.Models;
using Microsoft.AspNetCore.Mvc;
using TesteLuby.Interfaces;

namespace LubyTest.Controllers
{
    public class DevelopersController : Controller
    {
        
        private readonly IDeveloperRepository _developerRepository;

        public DevelopersController(IDeveloperRepository developerRepository)
        {
           
            _developerRepository = developerRepository;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _developerRepository.GetAll());
        }
        public async Task<IActionResult> Details(Guid id)
        {
            var developer = await _developerRepository.GetById(id);
            if (developer == null)
            {
                return NotFound();
            }
           
            return View(developer);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Developer developer)
        {
            if (!ModelState.IsValid) return View(developer);

             await _developerRepository.Create(developer);

            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Edit(Guid id)
        {
            var developer = await _developerRepository.GetById(id);
            if (developer == null)
            {
                return NotFound();
            }
           
            return View(developer);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, Developer developer)
        {
            if (id != developer.Id) return NotFound();
 
            if (!ModelState.IsValid) return View(developer);

            await _developerRepository.Update(developer);

            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Delete(Guid id)
        {
            var developer = await _developerRepository.GetById(id);
            if (developer == null)
            {
                return NotFound();
            }

            return View(developer);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var developer = await _developerRepository.GetById(id);
            if (id != developer.Id) return NotFound();

            if (!ModelState.IsValid) return View(developer);

            await _developerRepository.Remove(developer);

            return RedirectToAction("Index");
        }
     
    }
}