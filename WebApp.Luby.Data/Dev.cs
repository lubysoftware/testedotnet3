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
    public class Dev : IDev
    {
        private readonly ILog _ILog; 
        private readonly IOptions<ReadSettings> _Settings;
        
        public Dev(IOptions<ReadSettings> Settings, ILog ILog)
        {
            _ILog = ILog;
            _Settings = Settings;
        }
        
        #region Lists

        public async Task<IEnumerable<ModelDev>> GetAll()
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                return await connection.GetAllAsync<ModelDev>();
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return null;
        }

        public async Task<ModelDev> Get(int Id)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                return await connection.GetAsync<ModelDev>(Id);
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return null;
        }

        #endregion

        #region Database Modifications

        public async Task<int> Store(ModelDev model)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                return await connection.InsertAsync(new ModelDev {
                    name = model.name,
                    email = model.email,
                    status = true,
                    created_at = DateTime.Now,
                    updated_at = DateTime.Now
                });
            }
            catch (Exception exception) {
                await _ILog.Exception(exception);
            } return 0;
        }

        public async Task<bool> Save(ModelDev model, int Id)
        {
            try
            {
                await using var connection = new MySqlConnection(_Settings.Value.BaseConnection);
                var items = await connection.GetAsync<ModelDev>(Id);
                if (items == null)
                    return false;
                {
                    items.name = model.name;
                    items.email = model.email;
                    items.status = model.status;
                    items.updated_at = DateTime.Now;
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
                var items = await connection.GetAsync<ModelDev>(Id);
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