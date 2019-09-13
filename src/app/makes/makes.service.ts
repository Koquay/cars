import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MakesService {
  private makesUrl = "/api/makes/";

  constructor(
    private httpClient:HttpClient
  ) { }

  public getMakes() {
    return this.httpClient.get(this.makesUrl).pipe(
      tap(makes => console.log('makes', makes))
    )
  }
}
