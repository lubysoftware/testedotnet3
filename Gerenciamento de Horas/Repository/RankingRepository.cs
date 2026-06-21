using Gerenciamento_de_Horas.Models.Desenvolvedores;
using Gerenciamento_de_Horas.Models.LancamentoHora;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gerenciamento_de_Horas.Repository
{
    public class RankingRepository : Repository<Desenvolvedor>, IRankingRepository
    {
        

        public RankingRepository(Context context): base(context)
        {
           
        }

        public string GetNameById(int id)
        {
            return _context.Desenvolvedores.Where(x => x.Id == id).Select(x=> x.Nome).FirstOrDefault();
        }
    }
}
