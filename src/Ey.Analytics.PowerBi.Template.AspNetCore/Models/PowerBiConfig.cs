using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace  Ey.Analytics.PowerBI.Templates.Models
{
    public class PowerBiConfig
    {
        public AzureAdConfig AzureAd { get; set; }
        public string ResourceUrl { get; set; }
        public string ApplicationId { get; set; }
        public WorkspaceConfig Workspace { get; set; }
        public string ApiUrl { get; set; }
        public string EmbedUrlBase { get; set; }
        public string TenantId { get; set; }
    }

    public class WorkspaceConfig
    {
        public string WorkspaceId { get; set; }
        public string GroupId { get; set; }
        public string ReportId { get; set; }
        public string AuthenticationMode { get; set; }
        public bool FilterPaneEnabled { get; set; }
        public bool NavContentPaneEnabled { get; set; }
        public ServicePrincipalConfig ServicePrincipal { get; set; }
        public MasterUserConfig MasterUser { get; set; }
    }

    public class ServicePrincipalConfig
    {
        public string ApplicationSecret { get; set; }
        public string TenantId { get; set; }
    }

    public class MasterUserConfig
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}