import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }
  
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUserAlbum(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/albums?userId='+userId);
  }

  getPhotosByAlbumId(albumId){
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId='+albumId);
  }


}
