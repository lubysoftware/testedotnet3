using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.Extensions.Options;
using MySql.Data.MySqlClient;
using WebApp.Luby.Interface;
using WebApp.Luby.Models;

namespace WebApp.Luby.Data
{
    public class Dot : IDot
    {
        private readonly ILog _ILog; 
        private readonly IOptions<ReadSettings> _Settings;
        
        public Dot(IOptions<ReadSettings> Settings, ILog ILog)
        {
            _ILog = ILog;
            _Settings = Settings;
        }

        #region Lists
        
        public async Task<IEnumerable<ModelDot>> GetAll()
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                return await connection.GetAllAsync<ModelDot>();
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return null;
        }
        
        public async Task<IEnumerable<ModelDot>> GetAllByIdDev(int Id)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                var parameters = new DynamicParameters();
                parameters.Add("@Id", Id);
                const string Sql = "Select d.* From user_dots As d Inner Join devs As u On u.id = d.id Where u.id = @Id";
                return  await connection.QueryAsync<ModelDot>(Sql, parameters);
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return null;
        }
        
        public async Task<IEnumerable<ModelVwRanking>> GetAllRanking()
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                const string Sql = "Select * From vw_ranking";
                return await connection.QueryAsync<ModelVwRanking>(Sql);
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return null;
        }

        public async Task<ModelDot> Get(int Id)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                return await connection.GetAsync<ModelDot>(Id);
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return null;
        }
        
        #endregion
        
        #region Database Modifications

        public async Task<int> Store(ModelDot model)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                var Id = await connection.InsertAsync(new ModelDot {
                    user_dot_created_at = DateTime.Now,
                    user_dot_date_entry = model.user_dot_date_entry,
                    user_dot_date_break_start = model.user_dot_date_break_start,
                    user_dot_date_break_end = model.user_dot_date_break_end,
                    user_dot_date_exit = model.user_dot_date_exit,
                    id = model.id
                });
                if (Id <= 0)
                    return 0;
                await Log(Id, model);
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return 0;
        }

        public async Task<bool> Save(ModelDot model, int Id)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                var items = await connection.GetAsync<ModelDot>(Id);
                if (items == null)
                    return false;
                {
                    items.user_dot_date_entry = model.user_dot_date_entry;
                    items.user_dot_date_break_start = model.user_dot_date_break_start;
                    items.user_dot_date_break_end = model.user_dot_date_break_end;
                    items.user_dot_date_exit = model.user_dot_date_exit;
                    items.id = model.id;
                }
                await Log(Id, model);
                return await connection.UpdateAsync(items);
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return false;
        }
        
        public async Task<bool> Delete(int Id)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                var items = await connection.GetAsync<ModelDot>(Id);
                if (items == null)
                    return false;
                return await connection.DeleteAsync(items);
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return false;
        }
        
        #endregion

        #region Helpers

        private async Task Log(int Id, ModelDot model)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                await connection.InsertAsync(new ModelDotLog
                {
                    user_dot_log_created_at = DateTime.Now,
                    user_dot_log_description = String.Empty,
                    user_dot_id = Id,
                    id = model.id
                });
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            }
        }

        #endregion
    }
}