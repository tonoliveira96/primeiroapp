
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  } 

	

  constructor() {

  }

  //recupera 
  getConfigData(): any {
    return localStorage.getItem("config");
  }


  //grava
   setConfigData(showslide?: boolean, name?: string, username?: string): any {
     let config={
       showSlide: false,
    user: "",
    username: ""
  };

  if (showslide){
     config.showSlide=showslide;
  }

   if (name){
     config.name=name;
  }

 if (username){
     config.username=username;
  }

  localStorage.setItem("config", JSON.stringify(config))


  }



}
