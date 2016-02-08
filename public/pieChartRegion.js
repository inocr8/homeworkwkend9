var pieChartRegion = function(regionTotalPop, chartCountry, title){
  var container = document.getElementById("pie-chart-region");
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
              name: chartCountry.region,
              y: regionTotalPop,
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
