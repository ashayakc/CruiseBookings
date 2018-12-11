using Cruise.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Cruise.Repo
{
	public class SalesUnitRepo : ISalesUnitRepo
    {
		private readonly CruiseContext _cruiseContext;
		public SalesUnitRepo(CruiseContext cruiseContext)
		{
			_cruiseContext = cruiseContext;
		}

		public IEnumerable<SalesUnitSummaryDto> GetSalesUnits(DateTime fromDate, DateTime toDate)
		{
			var result = _cruiseContext.Bookings
				.Where(x => x.BookingDate >= fromDate && x.BookingDate <= toDate)
				.GroupBy(x => new {x.Ship.SalesUnit.Id, x.Ship.SalesUnit.Name, x.Ship.SalesUnit.Currency} )
				.Select(x => new SalesUnitSummaryDto
				{
					Id = x.Key.Id,
					Name = x.Key.Name,
					Price = $"{x.Sum(z => z.Price)}{x.Key.Currency}"
				});
			return result;
		}
	}
}
