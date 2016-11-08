
function graphe() {

   var tmin_janv = document.getElementById("temp_min_janv").value;
   var tmin_fev = document.getElementById("temp_min_fev").value;
   var tmin_mrs = document.getElementById("temp_min_mrs").value;
   var tmin_avr = document.getElementById("temp_min_avr").value;
   var tmin_mai = document.getElementById("temp_min_mai").value;
   var tmin_juin = document.getElementById("temp_min_juin").value;
   var tmin_juil = document.getElementById("temp_min_juil").value;
   var tmin_aout = document.getElementById("temp_min_aout").value;
   var tmin_sept = document.getElementById("temp_min_sept").value;
   var tmin_oct = document.getElementById("temp_min_oct").value;
   var tmin_nov = document.getElementById("temp_min_nov").value;
   var tmin_dec = document.getElementById("temp_min_dec").value;

   var num_tmin_janv = parseInt(tmin_janv);
   var num_tmin_fev = parseInt(tmin_fev);
   var num_tmin_mars = parseInt(tmin_mrs);
   var num_tmin_avril = parseInt(tmin_janv);
   var num_tmin_mai = parseInt(tmin_janv);
   var num_tmin_juin = parseInt(tmin_janv);
   var num_tmin_juillet = parseInt(tmin_janv);
   var num_tmin_aout = parseInt(tmin_janv);
   var num_tmin_sept = parseInt(tmin_janv);
   var num_tmin_oct = parseInt(tmin_janv);
   var num_tmin_nov = parseInt(tmin_janv);
   var num_tmin_dec = parseInt(tmin_janv);
   //console.log(typeof(parseInt(tmin_janv)));
    var chart = new CanvasJS.Chart("graphique",
    {
      title:{
        text: "Climat Nom du pays "    
      },
      axisY2: {
        title:"Précipitation (mm)"
      },
      axisY: {
        title: "Temperature (°C)"
      },
      legend: {
        verticalAlign: "bottom"
      },
      data: [

      {        
        type: "column",  
        showInLegend: true, 
        legendText: "Temperature min",
        dataPoints: [      
        { x: 10, y:num_tmin_janv, label: "Janvier" },
        { x: 20, y:45, label: "Fevrier"},
        { x: 30, y:25 , label: "Mars"},
        { x: 40, y:20 , label: "Avril"},
        { x: 50, y:40 , label: "Mai"},
        { x: 60, y:10, label: "Juin"},
        { x: 70, y:15, label:"Juillet"},
        { x: 80, y:20 , label: "Aout"},
        { x: 90, y:40 , label: "Septembre"},
        { x: 100, y:10, label: "Octobre"},
        { x: 110, y:15, label:"Novemre"},
        { x: 120, y:25, label:"Decembre"}


        ]
      },
      {        
        type: "column",  
        showInLegend: true, 
        legendText: "Reserves  in MMbbl",
        dataPoints: [      
        { x: 10, y: 40,  label: "Janvier" },
        { x: 20, y: 10,  label: "Fevrier"},
        { x: 30, y: 25,  label: "Mars"},
        { x: 40, y: 5,  label: "Iran"},
        { x: 50, y: 7,  label: "China"},
        { x: 60, y: 45,  label: "Canda"},
        { x: 70, y: 27, label:"UAE"},
        { x: 80, y: 45, label:"Venezuela"}


        ]
      },
      {        
        type: "line",  
        axisYType: "secondary",
        showInLegend: true,
        legendText: "production in bbl/day",
        dataPoints: [      
        { x: 10, y:5, label: "Janvier" },
        { x: 20, y:45, label: "Fevrier"},
        { x: 30, y:25 , label: "Mars"},
        { x: 40, y:20 , label: "Avril"},
        { x: 50, y:40 , label: "Mai"},
        { x: 60, y:10, label: "Juin"},
        { x: 70, y:15, label:"Juillet"},
        { x: 80, y:20 , label: "Aout"},
        { x: 90, y:40 , label: "Septembre"},
        { x: 100, y:10, label: "Octobre"},
        { x: 110, y:15, label:"Novemre"},
        { x: 120, y:25, label:"Decembre"}


        ]
      }

      ]
    });

chart.render();
}