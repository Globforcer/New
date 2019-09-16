using AdvanceAnalytics_WebTemplate.Models;
using AdvanceAnalytics_WebTemplate.Models.PowerBI;
using System.Threading.Tasks;

namespace AdvanceAnalytics_WebTemplate.Logic.Services
{
    public interface IEmbedService
    {
        EmbedConfig EmbedConfig { get; }
        TileEmbedConfig TileEmbedConfig { get; }

        Task<bool> EmbedReport(string userName, string roles);
        Task<bool> EmbedDashboard();
        Task<bool> EmbedTile();
    }
}
