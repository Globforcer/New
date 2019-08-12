using  Ey.Analytics.PowerBI.Templates.Models;
using System.Threading.Tasks;

namespace  Ey.Analytics.PowerBI.Templates.Services
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
