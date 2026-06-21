using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using lubyTestBackend.Domain;
using lubyTestBackend.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace lubyTestBackend.Controllers
{
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectRepository _projectRepository;

        public ProjectController(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        [HttpGet("api/[controller]")]
        public IActionResult GetAll()
        {
            try
            {
                var data = _projectRepository.GetAll();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }

        [HttpGet("api/[controller]/{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var data = _projectRepository.GetById(id);
                if (data == null)
                    return NotFound();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }

        [HttpPost("api/[controller]/insert")]
        public IActionResult Insert([FromBody] ProjectDomain project)
        {
            try
            {
                var data = _projectRepository.Insert(project);
                return Ok();
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }

        [HttpPost("api/[controller]/delete/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var data = _projectRepository.Delete(id);
                if (data == 0)
                    return NotFound();
                return Ok();
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }


        [HttpPut("api/[controller]")]
        public IActionResult Update([FromBody] ProjectDomain project)
        {
            try
            {
                var data = _projectRepository.Update(project);
                if (data == 0)
                    return NotFound();

                return Ok();
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }
    }
}
