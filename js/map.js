ymaps.ready(function() {

    var myMap = new ymaps.Map("map", {
        center: [59.938801, 30.330947],
        zoom: 16,
        controls: []
    });
    
    myMap.behaviors.disable("scrollZoom");
    
    var MapPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
        balloonMaxWidth: 320,
        iconLayout: "default#image",
        iconImageHref: "./img/map-pin.png",
        iconImageSize: [218, 142],
        iconImageOffset: [-50, -140]
    });

    myMap.geoObjects.add(MapPlacemark);

}); 
        