
function getJSON() {
    var req = new XMLHttpRequest();
    var json;
    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200){	
            model_names=[];
            num_parameters=[];			
            var data = JSON.parse(req.responseText);	
            var len = data.length;					
            json=data;
        }
    };
    req.open("GET", "model_parameters.json", false);			
    req.send(null);
    return json;
}

function initializeChart(model_names,num_parameters){
    var ctx = document.getElementById("myChart").getContext('2d');
    // var randomColors=Array.from({length:5},(k,v)=>getRandomColor());
    // var borderColors=randomColors.map(c=>c.a)

    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:model_names,
        datasets: [{
          label: 'num parameters',
          data: num_parameters,
          // backgroundColor:randomColors
        }] 
    },
    options:{
      title:{
        display:true,
        text:"torchvision model num parameters"
      },
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:true
          },
          scaleLabel:{
            display:true,
            labelString:"パラメータ数",
            fontSize:20,
          }
        }],
        xAxes:[{
          scaleLabel:{
            display:true,
            labelString:"モデル名",
            fontSize:20,
          }
        }]
      }
    }
    });
    return myChart;
}
