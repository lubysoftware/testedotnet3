using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApp.Luby.Interface;
using WebApp.Luby.Models;

namespace WebApp.Luby.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DotController : ControllerBase
    {
        private readonly IDot _IDot;
        public DotController(IDot IDot)
        {
            _IDot = IDot;
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> Get(int Id) 
        {
            var Model = await _IDot.Get(Id);
            if (Model == null) 
                return NotFound();
            return Ok(Model);
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAll() 
        {
            var Model = await _IDot.GetAll();
            if (Model == null) 
                return NotFound();
            return Ok(Model);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] ModelDot model) 
        {       
            var Id = await _IDot.Store(model);     
            if (Id <= 0) 
                return BadRequest();            
            return Ok(await _IDot.Get(Id).ConfigureAwait(false));
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> Put([FromForm] ModelDot model, int Id) 
        {                   
            if (await _IDot.Get(Id) == null)
                return NotFound();
            if (await _IDot.Save(model, Id) == false) 
                return BadRequest();            
            return Ok(await _IDot.Get(Id).ConfigureAwait(false));
        }

        [HttpGet("dev/{Id}")]
        public async Task<IActionResult> Devs(int Id) 
        {       
            var Model = await _IDot.GetAllByIdDev(Id).ConfigureAwait(false);            
            if (Model == null)
                return NotFound();            
            return Ok(Model);
        }
        
        [HttpGet("dev/ranking")]
        public async Task<IActionResult> Ranking() 
        {       
            var Model = await _IDot.GetAllRanking().ConfigureAwait(false);            
            if (Model == null)
                return NotFound();            
            return Ok(Model);
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(int Id) 
        {                   
            if (await _IDot.Get(Id) == null)
                return NotFound();
            if (await _IDot.Delete(Id) == false) 
                return BadRequest();         
            return Ok(true);
        }
    }
}