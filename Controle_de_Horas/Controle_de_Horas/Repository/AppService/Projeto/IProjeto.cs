using Controle_de_Horas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Controle_de_Horas.Repository
{
    interface IProjeto
    {
        void Cadastrar(Projeto paramInsert);
        IReadOnlyList<Projeto> ListarProjeto();
        void ExcluirProjeto(Projeto CodigoId);
        void Editar(Projeto paramEdit);
    }
}
