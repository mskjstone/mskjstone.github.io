window.onload = function() {
  var marksCanvas = document.getElementById("radarcanvas");

  var marksData = {
      labels: ["a", "b", "c", "d", "e"],
      datasets: [{
      backgroundColor: "rgba(0,0,200,0.2)",
      data: [50, 50, 50, 50, 50]
      }]
  };
  
  var chartOptions = {
      scale: {
      ticks: {
        maxTicksLimit: 3,
        display: false,
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 20
      },
      pointLabels: {
        fontSize: 18
      }
    },
      legend: {
          display: false
  },
  responsive:true,
  maintainAspectRatio: false
      // tooltips: {
      //         callbacks: {
      //             label: function(tooltipItem, data) {
      //                 var label = data.datasets[tooltipItem.datasetIndex].label || '';
  
      //                 if (label) {
      //                     label += ': ';
      //                 }
      //                 label += Math.round(tooltipItem.yLabel * 100) / 100;
      //                 return label;
      //             }
  }
  
  var radarChart = new Chart(marksCanvas, {
      type: 'radar',
      data: marksData,
      options: chartOptions
  });

}


function myFunction() {
  var x = document.getElementById("rightnav");
  if (x.className === "rightnav") {
    x.className += " responsive";
  } else {
    x.className = "rightnav";
  }
}

//fade??
// $(".img").each(function(i) {
//   $(this).delay(i * 1000).fadeIn(1000);
// });

function project() {
  document.getElementById
}
