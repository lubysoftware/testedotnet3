using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using Microsoft.Extensions.Options;
using MySql.Data.MySqlClient;
using WebApp.Luby.Interface;
using WebApp.Luby.Models;

namespace WebApp.Luby.Data
{
    public class Project : IProject
    {
        private readonly ILog _ILog; 
        private readonly IOptions<ReadSettings> _Settings;
        
        public Project(IOptions<ReadSettings> Settings, ILog ILog)
        {
            _ILog = ILog;
            _Settings = Settings;
        }
        
        #region Lists
        
        public async Task<IEnumerable<ModelProject>> GetAll()
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                return await connection.GetAllAsync<ModelProject>();
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return null;
        }

        public async Task<ModelProject> Get(int Id)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                return await connection.GetAsync<ModelProject>(Id);
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return null;
        }
        
        #endregion
        
        #region Database Modifications

        public async Task<int> Store(ModelProject model)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                return await connection.InsertAsync( new ModelProject {
                    project_description = model.project_description, 
                    project_created_at = DateTime.Now, 
                    project_updated_at = DateTime.Now, 
                    project_name = model.project_name
                });
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return 0;
        }

        public async Task<bool> Save(ModelProject model, int Id)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                var items = await connection.GetAsync<ModelProject>(Id);
                if (items == null)
                    return false;
                {
                    items.project_updated_at = DateTime.Now;
                    items.project_description = model.project_description;
                    items.project_name = model.project_name;
                }
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
                var items = await connection.GetAsync<ModelProject>(Id);
                if (items == null)
                    return false;
                return await connection.DeleteAsync(items);
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return false;
        }
        
        #endregion
    }
}