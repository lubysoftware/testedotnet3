using LubyTest.Data;
using LubyTest.Interfaces;
using LubyTest.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LubyTest.Repository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : Entity, new()
    {
        protected readonly TesteDbContext Db;
        protected readonly DbSet<TEntity> dbSet;

        protected Repository(TesteDbContext db)
        {
            Db = db;
            dbSet = db.Set<TEntity>();
        }
        public virtual async Task Create(TEntity obj)
        {
            dbSet.Add(obj);
            await SaveChanges();
        }

        public virtual async Task<List<TEntity>> GetAll()
        {
            
            return await dbSet.ToListAsync();
        }

        public virtual async Task<TEntity> GetById(Guid id)
        {
            return await dbSet.FindAsync(id);
        }

        public virtual async Task Remove(TEntity obj)
        {

            dbSet.Remove(obj);
            await SaveChanges();
        }
        public virtual async Task Update(TEntity obj)
        {
            dbSet.Update(obj);
            await SaveChanges();
        }

        public async Task<int> SaveChanges()
        {
            return await Db.SaveChangesAsync();
        }

        public void Dispose()
        {
            Db?.Dispose();
        }

    }
}
