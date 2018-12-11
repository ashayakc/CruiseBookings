using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cruise.Models
{
	public class Booking
    {
		public int Id { get; set; }

		public DateTime BookingDate { get; set; }

		public int ShipId { get; set; }

		[ForeignKey("ShipId")]
		public Ship Ship { get; set; }

		public double Price { get; set; }
	}
}
