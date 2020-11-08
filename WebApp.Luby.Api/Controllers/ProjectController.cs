using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApp.Luby.Interface;
using WebApp.Luby.Models;

namespace WebApp.Luby.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly IProject _IProject;        
        public ProjectController(IProject IProject)
        {
            _IProject = IProject;
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> Get(int Id) 
        {
            var Model = await _IProject.Get(Id);
            if (Model == null) 
                return NotFound();
            return Ok(Model);
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAll() 
        {
            var Model = await _IProject.GetAll();
            if (Model == null) 
                return NotFound();
            return Ok(Model);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] ModelProject model) 
        {       
            var Id = await _IProject.Store(model);     
            if (Id <= 0) 
                return BadRequest();            
            return Ok(await _IProject.Get(Id).ConfigureAwait(false));
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> Put([FromForm] ModelProject model, int Id) 
        {                   
            if (await _IProject.Get(Id) == null)
                return NotFound();
            if (await _IProject.Save(model, Id) == false) 
                return BadRequest();            
            return Ok(await _IProject.Get(Id).ConfigureAwait(false));
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(int Id) 
        {                   
            if (await _IProject.Get(Id) == null)
                return NotFound();
            if (await _IProject.Delete(Id) == false) 
                return BadRequest();         
            return Ok();
        }
    }
}