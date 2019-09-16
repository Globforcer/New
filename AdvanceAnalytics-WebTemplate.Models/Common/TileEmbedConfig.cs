using AdvanceAnalytics_WebTemplate.Models.PowerBI;
using Microsoft.PowerBI.Api.V2.Models;
using System;

namespace  AdvanceAnalytics_WebTemplate.Models
{
    public class TileEmbedConfig : EmbedConfig
    {
        public string dashboardId { get; set; }
    }
}