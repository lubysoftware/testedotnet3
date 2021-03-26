using Projeto_Luby.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Luby.AppServices
{
    public interface IMetodos_DesenvolvedoresAppService
    {
        void CadastrarDesenvolvedor(DESENVOLVEDORES dadosTela);
        void AtualizaDesenvolvedor(DESENVOLVEDORES dadosTela);
        void DeletarDesenvolvedor(DESENVOLVEDORES dadosTela);
        IReadOnlyList<DESENVOLVEDORES> ListaDesenvolvedores();
    }
}
