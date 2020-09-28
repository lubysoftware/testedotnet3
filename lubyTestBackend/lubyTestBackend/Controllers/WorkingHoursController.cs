using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using lubyTestBackend.Domain;
using lubyTestBackend.Repository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS;

namespace lubyTestBackend.Controllers
{
    [ApiController]
    public class WorkingHoursController : ControllerBase
    {
        private readonly IWorkingHoursRepository _workingHoursRepository;

        public WorkingHoursController(IWorkingHoursRepository workingHoursRepository)
        {
            _workingHoursRepository = workingHoursRepository;
        }

        [HttpGet("api/[controller]")]
        public IActionResult GetAll()
        {
            try
            {
                var data = _workingHoursRepository.GetAll();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }

        [HttpGet("api/[controller]/getWeekRank")]
        public IActionResult GetWeekRank()
        {
            try
            {
                var data = _workingHoursRepository.GetRank();
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
        public IActionResult Insert([FromBody] WorkingHoursDomain workingHours)
        {
            try
            {
                var data = _workingHoursRepository.Insert(workingHours);
                return Ok();
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }

    }
}
