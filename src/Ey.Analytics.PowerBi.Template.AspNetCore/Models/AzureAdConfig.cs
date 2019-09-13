using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace  Ey.Analytics.PowerBI.Templates.Models
{
    public class AzureAdConfig
    {
        public string Instance { get; set; }
        public string AuthorityUri { get; set; }
        public string LoggingRequestUrl { get; set; }
        public string CallbackPath { get; set; }
        public string Domain { get; set; }
        public string TenantId { get; set; }
        public string ClientId { get; set; }
        public string RedirectUrl { get; set; }
        public string WebViewerSecurityGroup { get; set; }
    }

}
