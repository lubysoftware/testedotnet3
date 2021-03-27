using FluentValidation;
using Golnich_Horas.AppServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Golnich_Horas.ViewModel
{
    public class Projetos_Validation : AbstractValidator<PROJETOS>
    {
        public Projetos_Validation()
        {
            Metodos_ProjetosAppService desenvolvedores = new Metodos_ProjetosAppService();
            RuleFor(r => r.NOME_PROJETO).Custom((v, context) =>
            {
                var isexiste = desenvolvedores.ListaProjeto()
                   .Where(r => r.NOME_PROJETO == v)
                   .FirstOrDefault();
                if (isexiste != null)
                {
                    context.AddFailure(context.PropertyName, "Projeto ja cadastrado!");
                }
            });
        }
    }
}