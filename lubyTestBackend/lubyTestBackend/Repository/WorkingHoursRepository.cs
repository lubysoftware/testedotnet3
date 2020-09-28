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

        public IEnumerable<WorkingHoursResponse> GetAll()
        {
            using var connection = new SqlConnection(_connectionString);

            var workHours = connection.Query<WorkingHoursResponse>("SELECT WH.ID, WH.DATE_INIT AS dateInit, " +
                                                                   "WH.DATE_END AS dateEnd, D.FULL_NAME as devName " +
                                                                   "FROM TBL_WORKING_HOURS WH " +
                                                                   "INNER JOIN TBL_DEVELOPER D ON WH.ID_DEVELOPER = D.ID");

            return workHours;
        }

        public int Insert(WorkingHoursDomain workingHours)
        {
            bool found = searchForWorkHour(workingHours);

            if (found)
                throw new Exception("Work hour already registered in data base.");

            using var connection = new SqlConnection(_connectionString);

            var query = "insert into tbl_working_hours (date_init, date_end, id_developer) " +
                        $"values ('{workingHours.DateInit}', '{workingHours.DateEnd}', {workingHours.IdDeveloper})";

            var result = connection.Execute(query);

            connection.Close();

            return result;
        }

        public IEnumerable<WeekRankModel> GetRank()
        {
            using var connection = new SqlConnection(_connectionString);

            var weekRank = connection.Query<WeekRankModel>("SELECT SUM(DATEPART(HH, WH.DATE_END) - DATEPART(HH, WH.DATE_INIT)) as workedHours, DEV.FULL_NAME as devName " +
                                                                "FROM TBL_WORKING_HOURS WH " +
                                                                "INNER JOIN TBL_DEVELOPER DEV ON WH.ID_DEVELOPER = DEV.ID " +
                                                                "WHERE(DATEPART(DAY, DATEDIFF(day, 0, DATE_END) / 7 * 7) / 7 + 1) = (DATEPART(DAY, DATEDIFF(day, 0, GETDATE()) / 7 * 7) / 7 + 1) " +
                                                                "GROUP BY ID_DEVELOPER, DEV.FULL_NAME " + 
                                                                "ORDER BY workedHours desc " +
                                                                "OFFSET 0 ROWS " +
                                                                "FETCH NEXT 5 ROWS ONLY");

            return weekRank;          

        }

        private bool searchForWorkHour(WorkingHoursDomain workingHours)
        {
            using var connection = new SqlConnection(_connectionString);

            var workingHoursResult = connection.Query<WorkingHoursDomain>("SELECT * " +
                                                                    "FROM TBL_WORKING_HOURS " +
                                                                    $"WHERE DATE_END >= '{workingHours.DateInit}' AND ID_DEVELOPER = {workingHours.IdDeveloper}");

            connection.Close();

            if (workingHoursResult.Any())
                return true;

            return false;
        }

    }
}
