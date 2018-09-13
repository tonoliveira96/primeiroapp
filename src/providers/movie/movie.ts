import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

	private baseApiPath ="https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies() {
  	return this.http.get(this.baseApiPath + "/movie/popular?api_key=f8b86e841453ba225512a005e53be8ac&language=pt-BR");
  }

}
