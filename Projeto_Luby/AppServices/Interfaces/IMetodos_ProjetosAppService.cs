using Projeto_Luby.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Luby.AppServices.Interfaces
{
    public interface IMetodos_ProjetosAppService
    {
        void CadastrarProjeto(PROJETOS dadosTela);
        void AtualizaProjeto(PROJETOS dadosTela);
        void DeletarProjeto(PROJETOS dadosTela);
        IReadOnlyList<PROJETOS> ListaProjeto();
    }
}
