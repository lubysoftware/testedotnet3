using Projeto_Luby.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Luby.AppServices.Interfaces
{
    public interface IMetodos_LancamentosAppService
    {
        void CadastrarLancamento(LANCAMENTO_HORAS dadosTela);
        void AtualizaLancamento(LANCAMENTO_HORAS dadosTela);
        void DeletarLancamento(LANCAMENTO_HORAS dadosTela);
        IReadOnlyList<LANCAMENTO_HORAS> ListaLancamentos();
    }
}
