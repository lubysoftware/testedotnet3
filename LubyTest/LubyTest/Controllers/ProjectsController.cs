using System;
using System.Threading.Tasks;
using LubyTest.Models;
using Microsoft.AspNetCore.Mvc;
using TesteLuby.Interfaces;

namespace LubyTest.Controllers
{
    public class ProjectsController : Controller
    {
        private readonly IProjectRepository _projectRepository;

        public ProjectsController(IProjectRepository projectRepository)
        {

            _projectRepository = projectRepository;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _projectRepository.GetAll());
        }
        public async Task<IActionResult> Details(Guid id)
        {
            var project = await _projectRepository.GetById(id);
            var lauch = project.Lauches;

            if (project == null)
            {
                return NotFound();
            }

            return View(project);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Project project)
        {
            if (!ModelState.IsValid) return View(project);

            await _projectRepository.Create(project);

            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Edit(Guid id)
        {
            var project = await _projectRepository.GetById(id);
            if (project == null)
            {
                return NotFound();
            }

            return View(project);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, Project project)
        {
            if (id != project.Id) return NotFound();

            if (!ModelState.IsValid) return View(project);

            await _projectRepository.Update(project);

            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Delete(Guid id)
        {
            var project = await _projectRepository.GetById(id);
            if (project == null)
            {
                return NotFound();
            }

            return View(project);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var project = await _projectRepository.GetById(id);
            if (id != project.Id) return NotFound();

            if (!ModelState.IsValid) return View(project);

            await _projectRepository.Remove(project);

            return RedirectToAction("Index");
        }
    }
}