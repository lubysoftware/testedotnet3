using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApp.Luby.Interface;
using WebApp.Luby.Models;

namespace WebApp.Luby.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DevController : ControllerBase
    {
        private readonly IDev _IDev;
        public DevController(IDev IDev)
        {
            _IDev = IDev;
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> Get(int Id) 
        {
            var Model = await _IDev.Get(Id);
            if (Model == null) 
                return NotFound();
            return Ok(Model);
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAll() 
        {
            var Model = await _IDev.GetAll();
            if (Model == null) 
                return NotFound();
            return Ok(Model);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] ModelDev model) 
        {       
            var Id = await _IDev.Store(model);     
            if (Id <= 0) 
                return BadRequest();            
            return Ok(await _IDev.Get(Id).ConfigureAwait(false));
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> Put([FromForm] ModelDev model, int Id) 
        {                   
            if (await _IDev.Get(Id) == null)
                return NotFound();
            if (await _IDev.Save(model, Id) == false) 
                return BadRequest();            
            return Ok(await _IDev.Get(Id).ConfigureAwait(false));
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(int Id) 
        {                   
            if (await _IDev.Get(Id) == null)
                return NotFound();
            if (await _IDev.Delete(Id) == false) 
                return BadRequest();         
            return Ok();
        }
    }
}