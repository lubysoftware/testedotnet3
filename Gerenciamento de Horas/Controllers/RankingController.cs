using Gerenciamento_de_Horas.Models;
using Gerenciamento_de_Horas.Models.LancamentoHora;
using Gerenciamento_de_Horas.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gerenciamento_de_Horas.Controllers
{
    public class RankingController : Controller
    {
        private readonly IRepository<Lancamentos> _repository;
        public RankingController(IRepository<Lancamentos> respository)
        {
            _repository = respository;
          
        }
        public async Task<IActionResult> IndexAsync()
        {
            var lancamentos = await _repository.Get().Include(x => x.Desenvolvedor).ToListAsync();

            Dictionary<int, double> dev = new Dictionary<int, double>();
            foreach (var item in lancamentos)
            {
                if (dev.ContainsKey(item.DesenvolvedorId))
                {
                    dev[item.DesenvolvedorId] += item.TotalHoras;
                }
                else
                {
                    dev.Add(item.DesenvolvedorId,item.TotalHoras);
                }
            }

            var list = dev.Select(x => new Ranking()
            {
                Desenvolvedor = x.Key,
                Horas = x.Value
            }).OrderByDescending(x=> x.Horas).Take(5).ToList();
            return View(list);
        }
    }
}
