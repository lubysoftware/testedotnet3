using lubyTestBackend.Domain;
using lubyTestBackend.Repository.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using lubyTestBackend.Models;

namespace lubyTestBackend.Repository
{
    public class WorkingHoursRepository : IWorkingHoursRepository
    {
        private readonly string _connectionString;

        public WorkingHoursRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("lubyServer");
        }

        public IEnumerable<WorkingHoursDomain> GetAll()
        {
            using var connection = new SqlConnection(_connectionString);

            var workHours = connection.Query<WorkingHoursDomain>("select id, date_init as dateInit, " +
                                                                 "date_end as dateEnd, id_developer as idDeveloper " +
                                                                 "from tbl_working_hours");

            return workHours;
        }

        public WorkingHoursDomain GetById(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            var workHours = connection.QueryFirst<WorkingHoursDomain>("select id, date_init as dateInit, " +
                                                                      "date_end as dateEnd, id_developer as idDeveloper " +
                                                                      "from tbl_working_hours " +
                                                                      $"where id = {id}");

            return workHours;
        }

        public int Insert(WorkingHoursDomain workingHours)
        {
            using var connection = new SqlConnection(_connectionString);

            var query = "insert into tbl_working_hours (date_init, date_end, id_developer) " +
                        $"values ('{workingHours.DateInit}', '{workingHours.DateEnd}', {workingHours.IdDeveloper})";

            var result = connection.Execute(query);

            return result;
        }

        public int Update(WorkingHoursDomain workingHours)
        {
            using var connection = new SqlConnection(_connectionString);

            var query = "update tbl_working_hours " +
                        $"set date_init = '{workingHours.DateInit}', " +
                        $"date_end = '{workingHours.DateEnd}' " +
                        $"where id = {workingHours.Id}";

            var result = connection.Execute(query);

            return result;
        }

        public IEnumerable<WeekRankModel> GetRank()
        {
            using var connection = new SqlConnection(_connectionString);

            var weekRank = connection.Query<WeekRankModel>("SELECT SUM(DATEPART(HH, WH.DATE_END) - DATEPART(HH, WH.DATE_INIT)) as workedHours, DEV.FULL_NAME as fullName " +
                                                                "FROM TBL_WORKING_HOURS WH " +
                                                                "INNER JOIN TBL_DEVELOPER DEV ON WH.ID_DEVELOPER = DEV.ID " +
                                                                "WHERE(DATEPART(DAY, DATEDIFF(day, 0, DATE_END) / 7 * 7) / 7 + 1) = (DATEPART(DAY, DATEDIFF(day, 0, GETDATE()) / 7 * 7) / 7 + 1) " +
                                                                "GROUP BY ID_DEVELOPER, DEV.FULL_NAME " + 
                                                                "ORDER BY workedHours desc " +
                                                                "OFFSET 0 ROWS " +
                                                                "FETCH NEXT 5 ROWS ONLY");

            return weekRank;          

        }

    }
}
