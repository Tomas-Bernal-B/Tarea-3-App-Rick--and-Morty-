import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public url ='https://rickandmortyapi.com/api/';
constructor(private http: HttpClient ) {}

characters (page : number = 1, name : string = "") {
  return this.http.get<any>(this.url+`character?page=${page}&name=${name}` , {})
  
}
}





