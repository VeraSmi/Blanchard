ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // center: [55.76290644196685,37.60469196238498],
        center: [55.75846806898367,37.60108849999989],
        zoom: 15,
        controls: [],
    }); 


    myMap.controls.add('zoomControl', {
      size: 'small',
      float: 'none',
      position: {
          top: '262px',
          right: '12px'
      }
    }); 

    myMap.controls.add('geolocationControl', {
      size: 'small',
      float: 'none',
      position: {
          bottom: '307px',
          right: '12px'
      }
    }); 
  
    var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/placemark.svg',
      iconImageSize: [20, 20],
      // iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
}



