import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) {

  }

  newsapiurl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=703a463f0c13425f93da26a6d0330513"

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=703a463f0c13425f93da26a6d0330513"

  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=703a463f0c13425f93da26a6d0330513"


  //topheading()
  topHeading(): Observable<any> {
    return this._http.get(this.newsapiurl);
  }

  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  sportsNews(): Observable<any> {
    return this._http.get(this.sportsApiUrl);
  }

}

