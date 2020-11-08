using System;
using System.IO;
using System.Threading.Tasks;
using WebApp.Luby.Interface;

namespace WebApp.Luby.Data
{ 
    public class Log : ILog
    {
        public async Task Exception(Exception e)
        {
            try
            {
                String Name = $"{DateTime.Now:yyyyMMdd}.txt";
                String Local = Path.Combine($"wwwroot/Archives/Logs/{DateTime.Now.Day}/{Name}");
                String Folder = Path.Combine($"wwwroot/Archives/Logs/{DateTime.Now.Day}");

                if (!Directory.Exists(Folder))
                    Directory.CreateDirectory(Folder);

                if (!File.Exists(Local)) {
                    FileStream create = File.Create(Local);
                    create.Close();
                }
                await using StreamWriter x = File.AppendText(Local);
                await x.WriteLineAsync("Origin");
                await x.WriteLineAsync($"Exceptions: {DateTime.Now} - Log Exceptions\n");
                await x.WriteLineAsync(e.Source);
                await x.WriteLineAsync();
                if (e.HelpLink != null) {
                    await x.WriteLineAsync("HelpLink");
                    await x.WriteLineAsync(e.HelpLink);
                    await x.WriteLineAsync();
                }
                if (e.TargetSite != null) {
                    await x.WriteLineAsync("Target");
                    await x.WriteLineAsync(e.TargetSite.Name);
                    await x.WriteLineAsync();
                }
                if (e.GetType().FullName != null) {
                    await x.WriteLineAsync("Target");
                    await x.WriteLineAsync(e.GetType().FullName);
                    await x.WriteLineAsync();
                }
                if (e.Source != null) {
                    await x.WriteLineAsync("Source");
                    await x.WriteLineAsync(e.Source);
                    await x.WriteLineAsync();
                }
                await x.WriteLineAsync("Exception");
                await x.WriteLineAsync(e.InnerException?.Message);
                await x.WriteLineAsync();
                await x.WriteLineAsync("Error");
                await x.WriteLineAsync(e.Message);
                await x.WriteLineAsync("-------------------------------------------------------------");
                await x.WriteLineAsync();
            }
            catch {
                // ignored
            }
        }
    }
}