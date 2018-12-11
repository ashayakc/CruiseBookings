using System.ComponentModel.DataAnnotations.Schema;

namespace Cruise.Models
{
	public class Ship
    {
		public int Id { get; set; }

		public string Name { get; set; }

		public int SalesUnitId { get; set; }

		[ForeignKey("SalesUnitId")]
		public SalesUnit SalesUnit { get; set; }
	}
}
