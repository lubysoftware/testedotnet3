using Gerenciamento_de_Horas.Models.LancamentoHora;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gerenciamento_de_Horas.Repository
{
    public class RankingRepository : Repository<Lancamentos>, IRankingRepository
    {
        public Context _context;

        public RankingRepository(Context context): base(context)
        {
            
        }
        public IQueryable<Lancamentos> GetRanking()
        {
            throw new NotImplementedException();
        }
    }
}
