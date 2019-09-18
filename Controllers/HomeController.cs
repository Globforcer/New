using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AdvanceAnalytics_WebTemplate.Controllers
{

    [Authorize]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {


        public ActionResult LogOut()
        {
            this.SignOut();
            return RedirectToAction("Index");
        }

        [HttpGet("[action]")]
        public JsonResult UserDetail()
        {
            return this.Json((new { email = HttpContext.User.Identity.Name, name= HttpContext.User.Claims.Where(o => o.Type == "name").FirstOrDefault().Value }));
        }

    }
}