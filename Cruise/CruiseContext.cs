using Cruise.Models;
using Microsoft.EntityFrameworkCore;

namespace Cruise
{
	public class CruiseContext : DbContext
	{
		public CruiseContext(DbContextOptions<CruiseContext> options) : base(options)
        {

		}

		public DbSet<Booking> Bookings { get; set; }
		public DbSet<Ship> Ships { get; set; }
		public DbSet<SalesUnit> SalesUnits { get; set; }		
	}
}
