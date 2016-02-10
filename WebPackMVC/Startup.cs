using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebPackMVC.Startup))]
namespace WebPackMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
