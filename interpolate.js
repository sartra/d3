var dataArray = [{x:5, y:5}, {x:10, y:15}, {x:20, y:7}, {x:30, y:18}, {x:40, y:10}];

var interpolateTypes = [d3.curveLinear, d3.curveNatural, d3.curveStep, d3.curveBasis, d3.curveBundle, d3.curveCardinal]


var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

//Path Generator (although called line, it is not like svg line, it is rather a path with many points and can be straight or curved, etc. M is start point of line (look at DOM), and then a series of L or C followed by x y coordinates - L is straight, C is curved 

for (var i=0; i<6; i++){

        var shiftX = i*250;
        var shiftY = 0; 


        var line = d3.line()
                      .x(function(d,i){ return d.x*6; })
                      .y(function(d,i){ return d.y*4; })
                      // .curve(d3.curveStep);
                      .curve(interpolateTypes[i]);

        var chartGroup = svg.append("g")
            .attr("class","group"+i)
            .attr("transform","translate("+shiftX+",0)");

        chartGroup.append("path")
                  .attr("fill", "none")
                  .attr("stroke", "blue")
                  .attr("d", line(dataArray)); 

        chartGroup.selectAll("circle.grp"+i)
          .data(dataArray)
          .enter().append("circle")
                    .attr("class", function(d,i){ return "grp"+i})
                    .attr("cx",function(d,i){ return d.x*6; })
                    .attr("cy", function(d,i){ return d.y*4; })
                    .attr("r", "3");

}