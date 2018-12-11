using Cruise.ViewModels;
using System;
using System.Collections.Generic;

namespace Cruise.Repo
{
	public interface ISalesUnitRepo
    {
		IEnumerable<SalesUnitSummaryDto> GetSalesUnits(DateTime fromDate, DateTime toDate);
    }
}
