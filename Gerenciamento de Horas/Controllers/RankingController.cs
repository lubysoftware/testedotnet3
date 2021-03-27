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
        private readonly IRankingRepository _rankingRepository ;

        public RankingController(IRepository<Lancamentos> respository, IRankingRepository rankingRepository)
        {
            _repository = respository;
            _rankingRepository = rankingRepository;
         
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
                Desenvolvedor = _rankingRepository.GetNameById(x.Key).ToString(),
                Horas = x.Value
            }).OrderByDescending(x=> x.Horas).Take(5).ToList();
            return View(list);
        }
    }
}
