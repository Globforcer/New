using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdvanceAnalytics_WebTemplate.Models
{
    public class ViewModelBase
    {
        public string Username { get; set; }
        public string UserInitials { get; set; }
        public string ProjectDisplayName { get; set; }
        public string AppTitle { get; set; }
        public string ReportDisplayName { get; set; }
    }
}
