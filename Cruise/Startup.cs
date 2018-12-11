using Cruise.Repo;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Cruise
{
	public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
			services.AddTransient<IBookingRepo, BookingsRepo>();
			services.AddTransient<ISalesUnitRepo, SalesUnitRepo>();

			services.AddDbContext<CruiseContext>(options =>
			{
				options.UseSqlServer(@"Server=.\SQLEXPRESS;Database=CruiseBooking;Trusted_Connection=True;");
			});
			services.AddCors();
			services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

			app.UseCors(builders => builders.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());
            app.UseMvc();
        }
    }
}
