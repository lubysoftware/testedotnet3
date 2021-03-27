using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Gerenciamento_de_Horas.Models.LancamentoHora;

namespace Gerenciamento_de_Horas.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        public Context _context;

        public Repository(Context context)
        {
            _context = context;
        }
       
        public IQueryable<T> Get()
        {
            return _context.Set<T>().AsNoTracking();
        }

        // retorna uma entidade
        public T GetById(Expression<Func<T, bool>> predicate)
        {
            return _context.Set<T>().SingleOrDefault(predicate);
        }

        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
            _context.SaveChanges();
        }

        public void Update(T entity)
        {
            //_context.Entry(entity).State = EntityState.Modified;
            _context.Set<T>().Update(entity);
            _context.SaveChanges();
        }

        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
            _context.SaveChanges();
        }

       
    }
}
