import { Marker } from './../bean/marker';
import { init } from './../init-markers';
import { Injectable } from '@angular/core';

 
@Injectable()
export class MarkerService extends init{

    constructor(){
        super();
        console.log("Marker Serivce Initialized");
        this.load();
    }

    getMarkers(){
        let markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    }

    addMarker(marker: Marker){
        let markers = JSON.parse(localStorage.getItem('markers'));
        markers.push(marker);
        localStorage.setItem('markers', JSON.stringify(markers));
    }

}