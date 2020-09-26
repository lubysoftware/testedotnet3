using lubyTestBackend.Domain;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;


namespace lubyTestBackend.Repository
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly string _connectionString;

        public ProjectRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("lubyServer");
        }

        public int Delete(int id)
        {
            using var connection = new SqlConnection(_connectionString);

            var query = $"delete from tbl_project where id = {id}";

            var result = connection.Execute(query);

            return result;
        }

        public IEnumerable<ProjectDomain> GetAll()
        {
            using var connection = new SqlConnection(_connectionString);

            var projects = connection.Query<ProjectDomain>("select id, project_name as projectName, " +
                                                            "project_description as projectDescription " +
                                                            "from tbl_project");

            return projects;
        }

        public ProjectDomain GetById(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            var developer = connection.Query<ProjectDomain>("select id, project_name as projectName, " +
                                                            "project_description as projectDescription " +
                                                            $"from tbl_project where id = {id}");

            return developer.FirstOrDefault();
        }

        public int Insert(ProjectDomain project)
        {
            using var connection = new SqlConnection(_connectionString);

            var query = $"insert into tbl_project (project_name, project_description) values ('{project.ProjectName}', '{project.ProjectDescription}')";

            var result = connection.Execute(query);

            return result;
        }

        public int Update(ProjectDomain project)
        {
            using var connection = new SqlConnection(_connectionString);

            var query = "update tbl_project " +
                        $"set project_name = '{project.ProjectName}', " +
                        $"project_description = '{project.ProjectDescription}' " +
                        $"where id = {project.Id}";

            var result = connection.Execute(query);

            return result;
        }
    }
}
