
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


var marksData = {
  labels: ["Fearless Facing Reality", "Construct Clarity", "Facilitate Action", "Novel & Resourceful", "Iterate Optimistically"],
  datasets: [{
  backgroundColor: "rgba(218, 165, 32, 0.7)",
  pointRadius: 1,
  pointHitRadius: 0,
  data: [30, 30, 30, 30, 30]
  }, {
  backgroundColor: "rgba(255, 255, 255, 0)",
  // pointBackgroundColor: "rgba(128, 128, 128, 0)",
  data: [100, 100, 100, 100, 100],
  borderWidth: 0.5,
  pointHoverRadius: 20,
  pointRadius: 8,
}]
};

var tooltipsLabel = ["My weapons are insatiable curiosity and data analysis."
,"I make what's ambiguous, tactile - I can actionize any problem."
,"I bring together diverse perspectives under a shared vision."
,"Creativity = unconventional inspiration and the resources around me."
,"I am always learning and always improving."];

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
  // pointLabelFontFamily : "'Helvetica'",
  pointLabels: {
    fontSize: 14,
    // fontStyle: bold,
    // fontFamily: 'Helvetica',
    fontColor: '#DE9302',
    }
  },
    legend: {
      display: false
  },
  responsive:true,
  maintainAspectRatio: false
,tooltips: {
  enabled: true,
  intersect: true,
  displayColors: false,
  mode: 'index',
//   filter: function (tooltipItem) {
//     return tooltipItem.datasetIndex === 1;
// },
bodyFontSize: 0,  
callbacks: {
    title: function(tooltipItems,data) {
      return tooltipsLabel[tooltipItems[1].index];
       }
   }
}
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

//display
var y = screen.height;
console.log(y);
var chartHeight = 0.28*y;
var carouselHeight = 0.3*y;

marksCanvas.height = chartHeight;
document.getElementById('lowerHalf').height = carouselHeight;

/* responsive menu */
// function myFunction() {
//   var x = document.getElementById("rightnav");
//   if (x.className === "rightnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "rightnav";
//   }
// }

function myFunction() {
  document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

/* pass skills as datasets data */
function project(id) {
  // console.log(id);
  let skills;
  if (id === "t1") {
    skills = [40,80,60,90,60];
    // debugger;
  } else if (id === "t2") {
    skills = [70,60,60,90,30];
  } else if (id === "t3") {
    skills = [90,60,100,30,80];
  }   else {
    skills = [30,30,30,30,30];
  }
  marksData.datasets[0].data = skills;

  //draw chart
  radarChart = new Chart(marksCanvas, {
    type: 'radar',
    data: marksData,
    options: chartOptions  
  })
}
// https://stackoverflow.com/questions/48542537/adding-custom-title-in-tooltips-of-chart-js

//carousel js

$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});