var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       // app.receivedEvent('deviceready');
       navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
    },
 
    onSuccess: function(position){
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);
 
        var mapOptions = {
            center: latLong,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };           
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        /* var endereco = '';
        var geocoder = new google.maps.Geocoder();        
        geocoder.geocode({
            "latLng": latLong
        }, function (results, status) {
             if (status == google.maps.GeocoderStatus.OK) {
                endereco = results[0].formatted_address;
                $("#enderecos").html(endereco);
             }
         });*/
	        
        var marker = new google.maps.Marker({
              position: latLong,
              map: map,
              draggable:true,
              animation: google.maps.Animation.DROP,    
              title: 'Meu local'
          });
        alert(longitude+" "+latitude);
    },
    
    onError: function(error){
        alert("the code is " + error.code + ". \n" + "message: " + error.message);
    },
};
 
app.initialize();