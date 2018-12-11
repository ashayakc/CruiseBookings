using Cruise.ViewModels;
using System.Collections.Generic;

namespace Cruise.Repo
{
	public interface IBookingRepo
    {
		IEnumerable<BookingDetailsDto> GetBookings(int salesUnitId, int pageNumber, int pageSize, string searchText);
    }
}
