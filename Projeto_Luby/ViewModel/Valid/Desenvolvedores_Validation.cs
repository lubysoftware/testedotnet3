using FluentValidation;
using Golnich_Horas.AppServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Golnich_Horas.ViewModel
{
    public class Desenvolvedores_Validation : AbstractValidator<DESENVOLVEDORES>
    {

       public Desenvolvedores_Validation()
        {
            Metodos_DesenvolvedoresAppService desenvolvedores = new Metodos_DesenvolvedoresAppService();
            RuleFor(r => r.NOME).Custom((v, context) =>
            {
                var isexiste = desenvolvedores.ListaDesenvolvedores()
                   .Where(r => r.NOME == v)                 
                   .FirstOrDefault();
                if (isexiste != null)
                {
                    context.AddFailure(context.PropertyName, "Desenvolvedor ja cadastrado!");
                }
            });
        }
    }
}