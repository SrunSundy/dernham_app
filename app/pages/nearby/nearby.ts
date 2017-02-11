import {Component, Directive, ElementRef, Input} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import {Http, Headers, RequestOptions} from '@angular/http';

import { Lazyload } from '../../components/lazyload/lazyload';

declare var google: any;


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/nearby/nearby.html',
  directives: [Lazyload]

})
export class NearbyPage {
  private map: any;
  private directionsService: any;
  private directionsDisplay: any;
  public currentLocation: any;

  request_data = {
        "current_lat" : 11.565723328439192,
        "current_lng" :104.88913536071777,
        "nearby_value" : 3
  }

  ionViewLoaded(){ 
    
    //get current location
    Geolocation.getCurrentPosition().then((position) => {
          this.getCurrentLocation(position);
      }).catch((error) => {
      console.log('Error getting location', error);
    
    });
    
  }
  constructor(private nav: NavController, private platform: Platform,private http: Http,private el:ElementRef) {
  }

  getCurrentLocation(position){
      //load list shop
      var headers = new Headers();
          headers.append('X-API-KEY', '123456');
          headers.append('Content-Type', 'application/json');
      var body = JSON.stringify({
          "request_data" : this.request_data
      });
      this.http.post('http://dernham.com/dernham_API/API/ShopRestController/listnearbyshop',body,{headers : headers})
      .map(res => res.json())
      .subscribe(data => {
         console.log(data);
        // current location marker
        var minZoomLevel = 14;
        var mylocationmarker = {lat: position.coords.latitude, lng:  position.coords.longitude};
        
        this.currentLocation = mylocationmarker;
        this.map = new google.maps.Map(document.getElementById('map_canvas'), {
          zoom: minZoomLevel,
          zoomControl: false,
          streetViewControl: false,
          center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          mapTypeId: google.maps.MapTypeId.ROADMAP

        }); 

         //drive variable
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer({
          polylineOptions: {
            strokeColor: "#cb202d",
            strokeOpacity: 0.6,
            strokeWeight: 5
          }
        });
        this.directionsDisplay.setMap(this.map);
        this.directionsDisplay.setOptions( { suppressMarkers: true } );
        
         //customize current marker icon
        var icon = {
          url: "https://raw.github.com/phatblat/BlueDot/0.1.1/bluedot.gif", // url
          size: new google.maps.Size(40, 40),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(8, 25),
          scaledSize: new google.maps.Size(40, 40)
        }
        var marker = new google.maps.Marker({
          position: mylocationmarker,
          map: this.map,
          icon : icon,
          optimized:false
        });

        //shop location marker
        data = data.response_data;
        var shopmarker, i;
        for (i = 0; i < data.length; i++) {  
            shopmarker = new google.maps.Marker({
              position: new google.maps.LatLng(data[i].shop_lat_point, data[i].shop_lng_point),
              map: this.map,
              shopid : data[i].shop_id,
              shoplogo : data[i].shop_logo,
              shopnameen : data[i].shop_name_en,
              shopaddress : data[i].shop_address,
              shopdistance : data[i].distance,
              shopopentime : data[i].shop_opening_time,
              shopclosetime : data[i].shop_close_time,
              shopservecate : data[i].serve_category,
              isopen : data[i].is_shop_open
          });

          google.maps.event.addListener(shopmarker, 'click', (function(shopmarker, i) {
          return function() {

            var loadRandomBackground = ["#D8DAD3","#A4C2A5","#967D69","#92B9BD","#A8D4AD","#E58C8A","#87A878","#B0BC98","#C7CCB9","#CAE2BC"];
            
           


            (<HTMLInputElement>document.getElementById("shop-direction")).value = this.position.lat()+","+this.position.lng();;
            document.getElementById("shop-detail-modal").setAttribute("class", "animated slideInUp");
            document.getElementById("shop-detail-modal").style.display = "block";

            document.getElementById("map-shadow").style.display = "block";
            setTimeout(function(){
              document.getElementById("map-shadow").style.opacity = "0.2";
            }, 100);
             
            document.getElementById("shop-logo-location").setAttribute("src","http://dernham.com/admin/uploadimages/logo/medium/"+this.shoplogo);            
            document.getElementById("shop-location-name-en").innerHTML = this.shopnameen;
            document.getElementById("shop-location-address").innerHTML = this.shopaddress;
            document.getElementById("shop-location-serve-cate").innerHTML = this.shopservecate;
            document.getElementById("shop-location-distance").innerHTML = this.shopdistance;

            let textopen = "closed";
            if(this.isopen == 1){
               textopen = "opening";
            }
            document.getElementById("shop-location-time-status").innerHTML = textopen;
            document.getElementById("shop-location-time").innerHTML = " ("+ this.shopopentime +" - "+this.shopclosetime+")";
          
          }
          })(shopmarker, i));
        }

        var onCloseLocationModalHandler = function() {

            document.getElementById("map-shadow").style.opacity = "0"; 
            document.getElementById("shop-detail-modal").setAttribute("class", "animated slideOutDown");
            setTimeout(function(){
              document.getElementById("shop-detail-modal").style.display = "none";
              document.getElementById("map-shadow").style.display = "none";
            }, 300);
        };
        document.getElementById('map-shadow').addEventListener('click', onCloseLocationModalHandler);
      },err => {
          alert(JSON.stringify(err));
      });

  }

  driveToDirection(){
    this.calculateAndDisplayRoute();
  }

   //direction drive function
  calculateAndDisplayRoute() {

    let classobj = this;
    classobj.directionsService.route({
      origin: this.currentLocation,
      destination: (<HTMLInputElement>document.getElementById("shop-direction")).value,
      travelMode: 'DRIVING'
    }, function(response, status) {
      console.log(response);
      if (status === 'OK') {
        classobj.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }





}
