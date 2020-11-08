using System;
using System.Threading.Tasks;

namespace WebApp.Luby.Interface
{
    public interface ILog
    {
        Task Exception(Exception e);
    }
}