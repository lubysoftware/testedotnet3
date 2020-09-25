using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using lubyTestBackend.Domain;
using lubyTestBackend.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace lubyTestBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeveloperController : ControllerBase
    {
        private readonly IDeveloperRepository _developerRepository;

        public DeveloperController(IDeveloperRepository developerRepository)
        {
            _developerRepository = developerRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var data = _developerRepository.GetAll();
                return Ok(data);
            } 
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }

        [HttpPost]
        public IActionResult Insert([FromBody]DeveloperDomain developer)
        {
            try
            {
                var data = _developerRepository.Insert(developer);
                return Ok();
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }

        [HttpPost]
        public IActionResult Delete([FromBody] int id)
        {
            try
            {
                var data = _developerRepository.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }


        [HttpPut]
        public IActionResult Update([FromBody] DeveloperDomain developer)
        {
            try
            {
                var data = _developerRepository.Update(developer);
                return Ok();
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }
    }
}
