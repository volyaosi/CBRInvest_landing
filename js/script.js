// Map initialisation 
function initMap() {
  const markerImage = 'img/marker1.png';
  const map = new google.maps.Map(document.getElementById('map'), {
       zoom: 15,
       center: {
         lat: 41.890334,
         lng: -87.628237,
       },
       disableDefaultUI: true,
       mapTypeId: google.maps.MapTypeId.ROADMAP
 });

 const marker = new google.maps.Marker({
      position: map.center,
      map: map,
      icon: markerImage
  });

  $.getJSON("../json/map-style.json", function(data) {
      map.setOptions({styles: data});
  });
} 

  
  // // Smooth Scrolling
  $('.menu a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top + 2
        },
        700
      );
    }
  });