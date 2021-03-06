
$(function()
{
	
	/*
	define a new language named "custom"
	*/

	$.dateRangePickerLanguages['custom'] = 
	{
		'selected': 'Choosed:',
		'days': 'Days',
		'apply': 'Close',
		'week-1' : 'Mon',
		'week-2' : 'Tue',
		'week-3' : 'Wed',
		'week-4' : 'Thu',
		'week-5' : 'Fri',
		'week-6' : 'Sat',
		'week-7' : 'Sun',
		'month-name': ['January','February','March','April','May','June','July','August','September','October','November','December'],
		'shortcuts' : 'Shortcuts',
		'past': 'Past',
		'7days' : '7days',
		'14days' : '14days',
		'30days' : '30days',
		'previous' : 'Previous',
		'prev-week' : 'Week',
		'prev-month' : 'Month',
		'prev-quarter' : 'Quarter',
		'prev-year' : 'Year',
		'less-than' : 'Date range should longer than %d days',
		'more-than' : 'Date range should less than %d days',
		'default-more' : 'Please select a date range longer than %d days',
		'default-less' : 'Please select a date range less than %d days',
		'default-range' : 'Please select a date range between %d and %d days',
		'default-default': 'This is costom language'
	};
	
	
	
	
	
	
	$('#date-range1').dateRangePicker();
	$('#date-range2').dateRangePicker();

	$('#date-range3').dateRangePicker(
	{
		language:'cn'
	});

	$('#date-range4').dateRangePicker(
	{
		language:'en'
	});

	$('#date-range4-1').dateRangePicker(
	{
		language: 'custom'
	});

	$('#date-range5').dateRangePicker(
	{
		startDate: '2014-11-20'
	});

	$('#date-range6').dateRangePicker(
	{
		startDate: '2013-01-10',
		endDate: '2013-02-10'
	});

	$('#date-range7').dateRangePicker(
	{
		minDays: 3,
		maxDays: 7
	});

	$('#date-range8').dateRangePicker(
	{
		startOfWeek: 'monday'
	});

	$('#date-range9').dateRangePicker(
	{
		getValue: function()
		{
			return this.innerHTML;
		},
		setValue: function(s)
		{
			this.innerHTML = s;
		}
	});

	$('#date-range10').dateRangePicker(
	{
		format: 'dddd MMM Do, YYYY'  //more formats at http://momentjs.com/docs/#/displaying/format/
	});

	$('#date-range11').dateRangePicker(
	{
		seperator : ' ~ '
	}).bind('datepicker-change',function(e,r)
	{
		try
		{
			console.log(r);
		}catch(e){}
	});
});