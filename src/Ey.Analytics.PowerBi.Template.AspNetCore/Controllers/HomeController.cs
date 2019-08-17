using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Ey.Analytics.PowerBI.Templates.Models;
using Ey.Analytics.PowerBI.Templates.Services;

namespace Ey.Analytics.PowerBI.Templates.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly IEmbedService m_embedService;
        private readonly ProjectUXConfig uxConfig;

        public HomeController(PowerBiConfig powerBiConfig, ProjectUXConfig uxConfig)
        {
            m_embedService = new EmbedService(powerBiConfig);
            this.uxConfig = uxConfig;
        }

        public async Task<IActionResult> Index()
        {
            var embedResult = await m_embedService.EmbedReport(null, null);
            var vm = new HomeIndexViewModel()
            {
                ProjectDisplayName = uxConfig.ProjectDisplayName,
                AppTitle = uxConfig.AppTitle,
                ReportDisplayName = uxConfig.ReportDisplayName,
                UserInitials = GetUserInititials(GetUserName()),
                Username = GetUserName(),
                EmbedConfig = m_embedService.EmbedConfig
            };
            // workaround for the /AzureAD/SignOut page which has its own model which doesn't support 
            // the correct user name and initials properties so that he _Layouts.cshtml base layout crashes
            ViewBag.Username = vm.Username;
            ViewBag.UserInitials = vm.UserInitials;
            ViewBag.ProjectDisplayName = vm.ProjectDisplayName;
            ViewBag.AppTitle = vm.AppTitle;
            ViewBag.ReportDisplayName = vm.ReportDisplayName;

            return View(vm);

        }

        private string GetUserName()
        {
            return HttpContext.User.Claims.FirstOrDefault(c => c.Type == "name").Value;
        }

        private string GetUserInititials(string name)
        {
            var parts = name.Split(" ");
            if (parts.Length > 1)
            {
                var initials = $"{parts[0].Substring(0, 1)}{parts[1].Substring(0, 1)}";
                return initials;
            }
            return "U";
        }

        [AllowAnonymous]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }



        public async Task<ActionResult> EmbedReport(string username, string roles)
        {
            var embedResult = await m_embedService.EmbedReport(username, roles);
            if (embedResult)
            {
                return View(m_embedService.EmbedConfig);
            }
            else
            {
                return View(m_embedService.EmbedConfig);
            }
        }

        public async Task<ActionResult> EmbedDashboard()
        {
            var embedResult = await m_embedService.EmbedDashboard();
            if (embedResult)
            {
                return View(m_embedService.EmbedConfig);
            }
            else
            {
                return View(m_embedService.EmbedConfig);
            }
        }

        public async Task<ActionResult> EmbedTile()
        {
            var embedResult = await m_embedService.EmbedTile();
            if (embedResult)
            {
                return View(m_embedService.TileEmbedConfig);
            }
            else
            {
                return View(m_embedService.TileEmbedConfig);
            }
        }

    }
}
