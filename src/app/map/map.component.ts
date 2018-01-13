import { MarkerService } from './../service/marker.service';
import { Marker } from './../bean/marker';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  ngOnInit() {
  }

  //Start Position
  lat: number = 12.971599;
  lng: number = 77.594563;
  zoom: number = 12;

  markers: Marker[];

  constructor(private _markerService: MarkerService){
      this.markers = this._markerService.getMarkers();
  }

  markerClicked(marker: Marker, index: number){
    console.log("Clicked marker : " + marker.name + " at index : " + index);
  }

  mapClicked($event: any){
    var newMarker = {
      name: "new Device",
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
    
  }

  markerDragEnd(marker: Marker, $event: any){
    var updMarker = {
      name: marker.name,
      lat: marker.lat,
      lng: marker.lng,
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

  }

}
