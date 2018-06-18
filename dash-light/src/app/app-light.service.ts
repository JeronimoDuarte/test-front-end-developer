import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppLightService {

  constructor(private http: HttpClient) { }


  getChar(){
    return this.http.get('https://lighthouse-test-front-end.firebaseio.com/amount.json');
  }

  getCard(){
    return this.http.get('https://lighthouse-test-front-end.firebaseio.com/estimatedExpenses.json');    
  }
}
