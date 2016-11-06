var dataArray = [25, 26, 28, 33, 35, 45, 53, 70, 88, 91, 95, 111, 121, 144, 166, 171, 181];

var dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2007','2008','2009','2009','2010','2011','2012','2013','2014'];

var height = 200;
var width = 500;

var margin = {left:50, right:50, top:40, bottom:0};

var y = d3.scaleLinear()
          .domain([0, d3.max(dataArray)])  
          .range([height, 0]);


var yAxis = d3.axisLeft(y).ticks(3).tickPadding(10).tickSize(10);

var area = d3.area()
              .x( function (d,i){ return i*20; })
              .y(height)
              .y1( function(d){ return y(d); });

var svg = d3.select("body").append("svg").attr("height","100%").attr("width", "100%");

var chartGroup = svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")")

chartGroup.append("path").attr("d", area(dataArray));

chartGroup.append("g")
    .attr("class","axis y")
    .call(yAxis);

