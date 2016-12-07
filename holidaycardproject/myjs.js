var imageArray = [
    "http://i.telegraph.co.uk/multimedia/archive/01564/godiva_-from-_6_50_1564545i.jpg",
    "http://www.cakedecorpins.com/wp-content/uploads/2014/09/deliciously-romantic-valentines-day-cakes-and-cookies-5420ec2a3b413.jpg",
    "https://i.ytimg.com/vi/4NO8LR7r5nI/maxresdefault.jpg",
    "http://holicoffee.com/wp-content/uploads/2015/01/red-velvet-valentine-cupcake-great-cheap-easy-baked-dessert-to-do-on-party.jpg",
    "http://del.h-cdn.co/assets/16/01/980x980/valentines_heart_macarons-9-2.jpg",
    
];
var currentIndex = 0;

function renderImage() {
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}

renderImage();

var HomePhoto = [
    "http://www.pixelstalk.net/wp-content/uploads/2015/12/Valentines-day-2016.jpg"
    ];

function showhome(){
    $('#homePhoto').attr('src', HomePhoto);
}

showhome();
var flower =[
    "http://tokobungaadelia.com/wp-content/uploads/2015/01/bunga-mawar-buat-valentine.jpg"
    ];

function Flowerheart(){
    $('#flowerPhoto').attr('src', flower);
}
Flowerheart();



$('#forwardBtn').on('click', function(){
	//this is what happens when it's clicked!
	currentIndex++;
	renderImage();
});
$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});

var name = prompt("What's your name?");
var outputString = "Happy Valentines Day, " + name + 
"!";
$("h1").html(outputString);

// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
          // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Person');
        data.addColumn('number', 'people');
        data.addRows([
          ['Chocolate', 86],
          ['Cakes/Pies', 50],
          ['Cookies',35],
          ['Cupcakes', 24],
          ['Others', 10],
          ['Everything!!', 100]
        ]);
          var chartWidth = $(window).width()*0.6
          var chartheight = $(window).width()*0.5;

        // Set chart options
        var options = {'title':'On Valentines Day I wanna eat ...',
                       'width':chartWidth,
                       'height':300,
                       'backgroundColor':'#F2D6D5',
                       'colors': ['#F06264'],
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
