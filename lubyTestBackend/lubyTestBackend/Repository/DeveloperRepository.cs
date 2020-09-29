using Dapper;
using lubyTestBackend.Domain;
using lubyTestBackend.Repository.Interfaces;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace lubyTestBackend.Repository
{
    public class DeveloperRepository : IDeveloperRepository
    {
        private readonly string _connectionString;

        public DeveloperRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("lubyServer");
        }

        public int Delete(int id)
        {
            this.deleteWorkHours(id);

            using var connection = new SqlConnection(_connectionString);

            var query = $"delete from tbl_developer where id = {id}";

            var result =  connection.Execute(query);

            return result;
        }

        public IEnumerable<DeveloperDomain> GetAll()
        {
            using var connection = new SqlConnection(_connectionString);

            var developers = connection.Query<DeveloperDomain>("select id, full_name as fullName, email from tbl_developer");

            return developers;
        }

        public DeveloperDomain GetById(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            var developer = connection.Query<DeveloperDomain>($"select id, full_name as fullName, email from tbl_developer where id = {id}");

            return developer.FirstOrDefault();
        }

        public int Insert(DeveloperDomain developer)
        {
            using var connection = new SqlConnection(_connectionString);

            var query = $"insert into tbl_developer (full_name, email) values ('{developer.FullName}', '{developer.Email}')";

            var result = connection.Execute(query);

            return result;
        }

        public int Update(DeveloperDomain developer)
        {
            using var connection = new SqlConnection(_connectionString);

            var query = $"update tbl_developer set full_name = '{developer.FullName}', email = '{developer.Email}' where id = {developer.Id}";

            var result = connection.Execute(query);

            return result;
        }

        private void deleteWorkHours(int developerId)
        {
            using var connection = new SqlConnection(_connectionString);

            var query = $"delete from tbl_working_hours where id_developer = {developerId}";

            connection.Execute(query);

            connection.Close();
        }
    }
}
