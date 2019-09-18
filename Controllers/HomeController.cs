using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AdvanceAnalytics_WebTemplate.Controllers
{
    
    public class HomeController : Controller
    {
        [Authorize]
        public ActionResult Index()
        {
            return Redirect("~/ClientApp/public/index.html");
        }

        public ActionResult LogOut()
        {
            this.SignOut();
            return RedirectToAction("Index");
        }
    }
}