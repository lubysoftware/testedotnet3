using Gerenciamento_de_Horas.Models.Desenvolvedores;
using Gerenciamento_de_Horas.Models.LancamentoHora;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gerenciamento_de_Horas.Repository
{
     public interface IRankingRepository :IRepository<Desenvolvedor>
    {
        string GetNameById(int id);
    }
}
