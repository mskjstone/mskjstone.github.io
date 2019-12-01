var marksData = {
  labels: ["reality", "define", "facilitate", "novelty", "iterate"],
  datasets: [{
  backgroundColor: "rgba(218, 165, 32, 0.7)",
  pointRadius: 1,
  data: [50, 50, 50, 50, 50]
  }, {
  backgroundColor: "rgba(255, 255, 255, 0)",
  // pointBackgroundColor: "rgba(128, 128, 128, 0)",
  data: [100, 100, 100, 100, 100],
  pointHoverRadius: 15,
  pointRadius: 6,
  notes: ["w","x","y","z","aa"]
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
//   enabled: true,
//   callbacks: {
//     label: function(tooltipItem) {
//       return tooltipItem.yLabel;
//        }
//    }
// },
}

var radarChart;

var marksCanvas = document.getElementById("radarcanvas");

window.onload = function() {

  radarChart = new Chart(marksCanvas, {
    type: 'radar',
    data: marksData,
    options: chartOptions
  })

};

function myFunction() {
  var x = document.getElementById("rightnav");
  if (x.className === "rightnav") {
    x.className += " responsive";
  } else {
    x.className = "rightnav";
  }
}

function project(id) {
  console.log(id);
  let skills;
  if (id === "t1") {
    skills = [40,80,60,100,60];
    // debugger;
  } else if (id === "t2") {
    skills = [70,60,60,100,60];
  } else {
    skills = [100,60,100,30,80];
  }
  marksData.datasets[0].data = skills;
  
  radarChart = new Chart(marksCanvas, {
    type: 'radar',
    data: marksData,
    options: chartOptions  
  })
}
/* run function() and pass skills as datasets data */