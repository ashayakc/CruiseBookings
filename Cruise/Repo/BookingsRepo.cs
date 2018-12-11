using Cruise.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace Cruise.Repo
{
	public class BookingsRepo : IBookingRepo
    {
		private readonly CruiseContext _cruiseContext;
		public BookingsRepo(CruiseContext cruiseContext)
		{
			_cruiseContext = cruiseContext;
		}

		public IEnumerable<BookingDetailsDto> GetBookings(int salesUnitId, int pageNumber, int pageSize, string searchText)
		{
			var result = _cruiseContext.Bookings.Where(x => x.Ship.SalesUnitId == salesUnitId)
							.Select(z => new BookingDetailsDto
							{
								BookingId = z.Id,
								ShipName = z.Ship.Name,
								Price = $"{z.Price}{z.Ship.SalesUnit.Currency}"
							}).Skip(pageNumber).Take(pageSize)
							.Where(x => x.BookingId.ToString().Contains(searchText) ||
								x.ShipName.Contains(searchText));

			return result;
		}
	}
}
