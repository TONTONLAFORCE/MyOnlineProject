import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestaurantModel} from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  url = 'http://localhost:3000/restos';
  userURL = 'http://localhost:3000/users'
  constructor( private http: HttpClient) {  }

  getRestoList() {
     return this.http.get<RestaurantModel[]>( this.url );
  }

  addResto( resto: RestaurantModel ){
    this.http.post( this.url , resto ).subscribe(response => console.log(response) );
  }

  getRestauId(){

    return this.http.get<RestaurantModel[]>( this.url + '?_sort=id&_order=desc&_limit=1');

  }

  updateResto( resto: RestaurantModel ){
    this.http.put<RestaurantModel>( this.url+'/'+resto.id , resto ).subscribe( response => console.log( response ) );
  }

  addRegister( user ){
    return this.http.post( this.userURL , user );
  }
}
