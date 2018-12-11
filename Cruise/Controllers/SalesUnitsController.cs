using Cruise.Repo;
using Cruise.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;

namespace Cruise.Controllers
{
	[Route("api/salesUnits")]
    public class SalesUnitsController : Controller
    {
		private readonly IBookingRepo _bookingRepo;
		private readonly ISalesUnitRepo _salesUnitRepo;
		public SalesUnitsController(IBookingRepo bookingRepo, ISalesUnitRepo salesUnitRepo)
		{
			_bookingRepo = bookingRepo;
			_salesUnitRepo = salesUnitRepo;
		}

        [HttpGet, Route("{id:int}/bookings/{pageNumber:int?}/{pageSize:int?}/{searchText?}")]
        public IEnumerable<BookingDetailsDto> GetBookings(int id, int pageNumber = 0, int pageSize = 10, string searchText = "")
        {
			return _bookingRepo.GetBookings(id, pageNumber, pageSize, searchText);
		}

		[HttpPost]
		public IEnumerable<SalesUnitSummaryDto> GetSalesUnits([FromBody] SearchDetailsDto searchDetails)
		{
			var fromDate = DateTime.ParseExact(searchDetails.FromDate, "dd-MM-yyyy", CultureInfo.InvariantCulture);
			var toDate = DateTime.ParseExact(searchDetails.ToDate, "dd-MM-yyyy", CultureInfo.InvariantCulture);
			return _salesUnitRepo.GetSalesUnits(fromDate, toDate);
		}
    }
}
