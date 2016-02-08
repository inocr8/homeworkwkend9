var pieChartCurrency = function(currencyTotalPop, chartCountry, title){
  var container = document.getElementById("pie-chart-currency");
  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container,
    },
    title: {
      text: title
    },
    legend: {
      layout: 'vertical',
      align: 'middle',
      verticalAlign: 'bottom'
    },
    series: [{
      showInLegend: true,
      name: "Population",
      data: [
            {
              name: "Rest Of Nations ("+chartCountry.currencies[0]+")",
              y: currencyTotalPop,
                 color: "#1a8cff"
                },
            {
              name: chartCountry.name,
              y: chartCountry.population,
                 color: "#ff9900",
              sliced: true
            }
            ]
           }]
  });
}
