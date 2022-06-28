

const width = 600,
      height = 600;
const svg = d3.select("svg")
            .attr("width",width)
            .attr("height",height);

// Map and projection
const projection = d3.geoMercator()
    .center([-74.25,40.69])                // GPS of location to zoom on
    .scale(47000)                       // This is like the zoom
    .translate([ width/4, height/2 ])

const path = d3.geoPath().projection(projection);

// Load external data and boot
Promise.all([
    d3.json("data /NYC_Boroughs.geojson"),
    d3.csv("data /Station.csv")
])
.then(function(geodata){
    const data = geodata[0]
    const station = geodata[1]
    
    let boroName = []
    for (let i =0; i < data.features.length; i++){
        boroName.push(data.features[i].properties.BoroName)
    }
    console.log(data.features)
  

    // Add a scale for bubble size
    const valueExtent = d3.extent(station, d => +d.trips)
    const size = d3.scaleSqrt()
        .domain(valueExtent)  // What's in the data
        .range([ 1, 5])

    // Draw the map
    const g = svg.append("g")
                    .selectAll("path")
                    .data(data.features)
                    .join("path")
                        .attr("fill", '#213272')
                        .attr("d", d3.geoPath()
                            .projection(projection)
                        )
                    .style("stroke", "#fff")
                    .style("opacity", 1);  

         
    // add bubbles 
    svg.selectAll("myCircles")
        .data(station.sort((a,b) => +b.trips - +a.trips).filter((d,i) => i<50000))
        .join("circle")
        .attr("cx", d => projection([+d.Longitude, +d.Latitude])[0])
        .attr("cy", d => projection([+d.Longitude, +d.Latitude])[1])
        .attr("r", d => size(+d.trips))
        .style("fill", '#9c0c11')
        .attr("stroke-width", 1)
        .attr("fill-opacity", .7)

    // add boroughs name
    svg
        .append("text")
          .attr("text-anchor", "end")
          .style("fill", "white")
          .attr("x", width-310 )
          .attr("y", height -200)
          .attr("width", 90)
          .html("Staten Island")
          .style("font-size", 15);

    svg
        .append("text")
        .attr("text-anchor", "end")
        .style("fill", "white")
        .attr("x", width-180)
        .attr("y", height -240)
        .attr("width", 90)
        .html("Brooklyn")
        .style("font-size", 15);
    
    svg
        .append("text")
            .attr("text-anchor", "end")
            .style("fill", "white")
            .attr("x", width-70)
            .attr("y", height -340)
            .attr("width", 90)
            .html("Queens")
            .style("font-size", 15);
    
    svg
        .append("text")
            .attr("text-anchor", "end")
            .style("fill", "white")
            .attr("x", width-110)
            .attr("y", height -480)
            .attr("width", 90)
            .html("Bronx")
            .style("font-size", 15);

    svg
        .append("text")
            .attr("text-anchor", "start")
            .style("fill", "white")
            .attr("x", width)
            .attr("y", height -480)
            .attr("transform", "rotate(300 570 360)")
            .attr("width", 90)
            .html("Manhattan")
            .style("font-size", 15)
    
    
})