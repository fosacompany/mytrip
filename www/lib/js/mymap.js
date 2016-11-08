
  
var initialLocation;
var siberia = new google.maps.LatLng(60, 105);
var newyork = new google.maps.LatLng(-18.92218, 47.53882);

function initialize() {
  var myOptions = {
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("carte"), myOptions);

 

      initialLocation = new google.maps.LatLng(44.916672138497226, 6.250009713694453);
      map.setCenter(initialLocation);
    
  // popup
  /*var maLatlng = new google.maps.LatLng(44.916672138497226, 6.250009713694453);
   var image = 'marker_icon.png';
  var marker = new google.maps.Marker ({
       position: maLatlng,
       map: map,
       icon: image,
       raggable:true,
       animation: google.maps.Animation.DROP,
       title: "Voir le données climatiques de cette zone !"
    });

  var message = "<center>Nom de la zone: <br/> Température: <br/> Précipitation:</center>";
   var infowindow = new google.maps.InfoWindow({
       content: message,
       size: new google.maps.Size(100,100)
   });

    google.maps.event.addListener(marker, 'click', function() {
       infowindow.open(map,marker);
   });

   function toggleBounce() {
   if (marker.getAnimation() != null) {
       marker.setAnimation(null);
   } else {
       marker.setAnimation(google.maps.Animation.BOUNCE);
   }
  } */
 

var marker;
var infoWindow;
 var circle;
 circle = new google.maps.Circle({
                            map: map,
                            radius: 40 * 1000 ,
//                              radius: document.getElementById('distance').value * 1000 ,    // 10 miles in metres
                            
                            fillColor: "rgba(220,20,220,0.2)"
                            });
// un seul markeur sur le map
function placeMarker(location) {
  if ( marker ) {
    marker.setPosition(location);

  } else {
    marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
}
//placer le markeur sur le map
google.maps.event.addListener(map, 'click', function(event) {
  var location = event.latLng;
  placeMarker(event.latLng);
  infoWindow = new google.maps.InfoWindow({
                content: 'Appuer sur voir climat pour visualiser les données climatiques' });
//afficher popupinfoWindow
  google.maps.event.addListener(marker, "click", function(event) {
            
            infoWindow.open(map, marker);
        });
  console.log(event);
  //latitude = location.lat();
   var z = location.lat();
   var w = z.toString();
   var y = location.lng();
   var u = y.toString();
   console.log(typeof(w));
   document.getElementById("latitude").value=w.replace('.',',');
   document.getElementById("longitude").value=u.replace('.',',');


 // Add circle overlay and bind to marker
                            
                            circle.bindTo('center', marker, 'position');
});

}
