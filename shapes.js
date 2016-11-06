var dataArray = [5, 11, 18];
var dataDays = ["Mon","Wed","Fri"];

var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, 10]);

var rainbow2 = d3.scaleSequential(d3.interpolateRainbow).domain([0, 3]);




var x = d3.scalePoint()
          .domain(dataDays)
          .range([0,170]); // scale Point take min and max pixel values; good for point charts, not bar graphs 


var x = d3.scaleBand()
          .domain(dataDays) 
          .range([0,170]) // scale Band better for bar chart; takes min and max 
          .paddingInner(0.1176); // takes 3rd argument padding - determines the percentage of chart dedicated to white space 

  // API FOR SCALE BAND: https://goo.gl/186ghj  

  var x = d3.scaleOrdinal()
          .domain(dataDays)
          .range([35, 95, 155]); //scale ordinal takes specific points



var xAxis = d3.axisBottom(x);

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

var cat20 = d3.schemeCategory20;
console.log(cat20);

// ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]

svg.append("g")
    .attr("class", "x axis hidden")
    .attr("transform", "translate(0,300)")
    .call(xAxis);


svg.selectAll("rect")
  .data(dataArray)
  .enter().append("rect")
          .attr("height", function(d,i){return d*15;})
          .attr("width","50")
          // .attr("fill", "pink")
          .attr("fill", function(d,i){return rainbow(i)}) 
          .attr("x",function(d, i){ return 60*i +10; })
          .attr("y",function(d,i){ return 300-(d*15); });


var newX = 300; 
svg.selectAll("circle.first")
  .data(dataArray)
  .enter().append("circle")
          .attr("class","first")
          .attr("cx",function(d,i){newX+=(d*3)+(i*20); return newX})
          .attr("cy", "100")
          .attr("fill", function(d,i){return rainbow2(i)}) 
          .attr("r", function(d){ return d*3});


var newX = 600; 
svg.selectAll("ellipse.second")
  .data(dataArray)
  .enter().append("ellipse")
          .attr("class","second")
          .attr("cx",function(d,i){newX+=(d*3)+(i*20);return newX})
          .attr("fill", function(d,i){ return cat20[i] })
          .attr("cy", "100")
          .attr("rx", function(d){ return d*3})
          .attr("ry", "30");

var newX = 900; 
svg.selectAll("line")
  .data(dataArray)
  .enter().append("line")
          .attr("x1",newX)
          .style("stroke","green")
          .attr("stroke","blue") //can use style or attr, but style will take precedence where there is conflict, best to use css when possible, then attribute, then style attribute  
          .attr("stroke-width","2")
          .attr("y1", function(d,i){ return 80+(i*20); }) //i*20 provides the 20px gap between lines
          .attr("x2", function(d){ return newX+(d*15); })
          .attr("y2", function(d,i){ return 80+(i*20); });

var textArray = ['start', 'middle', 'end', 'beyound'];

svg.append("text").selectAll("tspan")
          .data(textArray)
          .enter().append("tspan")
          .text("start")
          .attr("x",newX)
          .attr("y",function (d,i) {
            return 150+(i*30);
          })
          .attr("font-size", 30)
          .attr("stroke","blue")
          .attr("stroke-width","2")
          .attr("fill","none")
          .attr("dominant-baseline","middle")
          .attr("text-anchor","start")
          .text(function (d) {
            return d;
          });


// svg.append("text")
//           .text("middle")
//           .attr("x",newX)
//           .attr("y",180)
//           .attr("font-size", 30)
//           .attr("stroke","none")
//           .attr("stroke-width","2")
//           .attr("fill","blue")
//           .attr("dominant-baseline","middle")
//           .attr("text-anchor","middle");

// svg.append("text")
//           .text("end")
//           .attr("x",newX)
//           .attr("y",210)
//           .attr("font-size", 30)
//           .attr("stroke","blue")
//           .attr("fill","none")
//           .attr("dominant-baseline","middle")
//           .attr("text-anchor","end");    

svg.append("line")
          .attr("x1", newX) 
          .attr("y1", 150) 
          .attr("x2", newX) 
          .attr("y2", 210); 



