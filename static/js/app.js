d3.csv("data /citibike_daily.csv").then(function(timeData){
    const rows = timeData;
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }
    
        let trace = {
            type: "scatter",
            mode: "lines",
            x: unpack(rows, 'Start Time'),
            y: unpack(rows, 'Number of Trips'),
            line: {color: '#214991'}
        }

  
    
        let layout = {
            showlegend: false,
            xaxis: {
              range: ['2014-01-01', '2021-12-31'],     
              type: 'date',
            },

            yaxis:{
                title: "Number of trips"
            },
            shapes: [           
                //Line Horizontal           
                {          
                  type: 'line',           
                  x0: '2019-08-27',           
                  y0: 97000,           
                  x1: '2020-09-10',           
                  y1: 100000,            
                  line: {
                      color: '#e4926d',
                      width: 4,
                      dash: 'dashdot' }
                },
                { 
                    type: 'line',             
                    x0: '2014-07-01',              
                    y0: 40000,              
                    x1: '2019-08-27',              
                    y1: 97000,              
                    line: {             
                      color: '#e4926d',
                      width: 4,            
                      dash:  'dashdot' 
                    }
                  },

                  { 
                    type: 'line',             
                    x0: '2020-09-10',              
                    y0: 100000,              
                    x1: '2021-09-10',              
                    y1: 130000,              
                    line: {             
                      color: '#e4926d',
                      width: 4,            
                      dash:  'dashdot' 
                    }
                  },

                  {
                    type: 'circle',             
                    xref: 'x',             
                    yref: 'y',             
                    x0: '2020-01-01',             
                    y0: 20000,             
                    x1: '2021-01-12',             
                    y1: 100000,             
                    line: {             
                      color: '#e17e8a'             
                    }
              
                  },
              ],
            annotations:[
                {
                    x:'2020-06-15',
                    y:100000,
                    xref:'x',
                    yref:'y',
                    text:'Pandemic Period',
                    showarrow:true,
                    arrowhead:3,
                    ax:-30,
                    ay:-40
                }
            ],
            height: 430,
            width:740    
          };
    
        let traceData = [trace];
        
        Plotly.newPlot('timeSeries', traceData, layout);
        
});

d3.csv("data /citibike user/gender.csv").then(function(genderData){
    const rows = genderData;
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }
    
        let trace1 = {
            type: "bar",
            name: 'Male',
            x: unpack(rows, 'Year'),
            y: unpack(rows, 'Male'),
            marker:{color: '#214991'}
            
        }

        let trace2 = {
            type: "bar",
            name: 'Female',
            x: unpack(rows, 'Year'),
            y: unpack(rows, 'Female'),
            marker:{color: '#e17e8a'}
        }

        let trace3 = {
            type: "bar",
            name: 'Unknown',
            x: unpack(rows, 'Year'),
            y: unpack(rows, 'unknown'),
            marker:{color: '#e4926d'}
        }
    
        let layout = {
            barmode: 'group',
            width: 500,

            xaxis:{title:"Year"},
            yaxis:{title:" Gender Count"},
            legend:{orientation: 'h', x: 0, y: 1}
          };
    
        let traceData = [trace1, trace2, trace3];
        
         Plotly.newPlot('genderBar', traceData, layout);
        
});

d3.csv("data /age distribute.csv").then(function(ageData){
    const rows = ageData;
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }
    
        let trace1 = {
            type: "bar",
            name: 'Male',
            x: unpack(rows, 'Male'),
            y: unpack(rows, 'Age'),
            marker:{color: '#214991'},
            orientation: 'h'
            
        }

        let trace2 = {
            type: "bar",
            name: 'Female',
            x: unpack(rows, 'Female'),
            y: unpack(rows, 'Age'),
            marker:{color: '#e17e8a'},
            orientation: 'h',
        }

    
        let layout = {
            barmode: 'stack',
            width: 500,
            xaxis:{title:"Customer Count"},
            yaxis:{title:"Age Range"},
            legend:{orientation: 'h', x: 0, y: 1}
          };
    
        let traceData = [trace1, trace2];
        
         Plotly.newPlot('ageBar', traceData, layout);
        
});

Promise.all([
    d3.csv("data /hourly usage/Hourly usage(2014).csv"),
    d3.csv("data /hourly usage/Hourly usage(2015).csv"),
    d3.csv("data /hourly usage/Hourly usage(2016).csv"),
    d3.csv("data /hourly usage/Hourly usage(2017).csv"),
    d3.csv("data /hourly usage/Hourly usage(2018).csv"),
    d3.csv("data /hourly usage/Hourly usage(2019).csv"),
]).then(function(files){
    const rows = files;
    function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
    }


    let trace1 = {
        type: "scatter",
        mode: "lines",
        name:'2014',
        x: unpack(rows[0], 'Start Time'),
        y: unpack(rows[0], 'Average Hourly Bike Usage'),
        line: {color: '#91ccf1'}
    }

    let trace2 = {
        type: "scatter",
        mode: "lines",
        name:'2015',
        x: unpack(rows[1], 'Start Time'),
        y: unpack(rows[1], 'Average Hourly Bike Usage'),
        line: {color: '#5fb6ec'}
    }

    let trace3 = {
        type: "scatter",
        mode: "lines",
        name:'2016',
        x: unpack(rows[2], 'Start Time'),
        y: unpack(rows[2], 'Average Hourly Bike Usage'),
        line: {color: '#6577a3'}
    }

    let trace4 = {
        type: "scatter",
        mode: "lines",
        name:'2017',
        x: unpack(rows[3], 'Start Time'),
        y: unpack(rows[3], 'Average Hourly Bike Usage'),
        line: {color: '#6352a1'}
    }

    let trace5 = {
        type: "scatter",
        mode: "lines",
        name:'2018',
        x: unpack(rows[4], 'Start Time'),
        y: unpack(rows[4], 'Average Hourly Bike Usage'),
        line: {color:  '#5b3275'}
    }

    let trace6 = {
        type: "scatter",
        mode: "lines",
        name:'2019',
        x: unpack(rows[5], 'Start Time'),
        y: unpack(rows[5], 'Average Hourly Bike Usage'),
        line: {color:  '#213272'}
    }

    let layout = {

        yaxis:{title:"Hourly Trip Count"},
        shapes:[
            {
                type: 'line',             
                x0: 8,              
                y0: 30000,              
                x1: 8,              
                y1: 150000,              
                line: {             
                  color: '#9c0c11',
                  width: 4,            
                  dash:  'dashdot' 
                }
            },
            {
                type: 'line',             
                x0: 17,              
                y0: 50000,              
                x1: 17,              
                y1: 180000,              
                line: {             
                  color: '#9c0c11',
                  width: 4,            
                  dash:  'dashdot' 
                }
            }
        ],

        annotations: [
            {       
              x: 8.5,       
              y: 10000,       
              xref: 'x',       
              yref: 'y',        
              text: 'Morning peak hour at 8 am',       
              showarrow: false,        
              align: 'center',
              bordercolor: 'black',       
              borderwidth: 2,       
              borderpad: 4,       
            },

            {       
                x: 17.5,       
                y: 10000,       
                xref: 'x',       
                yref: 'y',        
                text: 'Afternoon peak hour at 5 pm',       
                showarrow: false,        
                align: 'center',
                bordercolor: 'black',       
                borderwidth: 2,       
                borderpad: 4,       
              }
        ],
        
        height: 430,
        width:740,
        legend:{orientation: 'v', x: 0, y: 1}
    
    }

    let traceData = [trace1,trace2, trace3,trace4,trace5, trace6];
        
    Plotly.newPlot('hourlySeries', traceData, layout);
})

d3.csv("data /top100.csv").then(function(stationData){
    const rows = stationData.slice(0,10);
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }

        const yaxis = unpack(rows,' Name').reverse()
        const trip = unpack(rows, 'trips').reverse()
    
        let trace1 = {
            type: "bar",
            x: trip,
            y: [1,2,3,4,5,6,7,8,9,10],
            textposition: 'auto',
            hoverinfo: 'none',
            marker:{color: '#213272'},
            orientation: 'h',
            text:yaxis.map(String)
            
        }

        let layout = {
            title:'Top10 Busiest Start Station',
            xaxis:{title:"Total Trips Count"},
            showlegend:false,
            height:550,
            width:750
          };
    
        let traceData = [trace1 ];
        
         Plotly.newPlot('stationBar', traceData, layout);
        
});

d3.csv("data /userType.csv").then(function(userData){
    const rows = userData
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }

    let userCount = unpack(rows, 'count')
    let pieTrace = [{
        type:"pie",
        values:userCount,
        labels:['Not member', 'Member'],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true,
        marker:{colors:['#e17e8a','#214991']}

    }]

    let layout ={
        width:350,
        showlegend:false,
        margin: {"t": 0, "b": 0, "l": 0, "r": 0}
    }

    

    Plotly.newPlot('pie', pieTrace, layout)
    console.log(userCount)
})
