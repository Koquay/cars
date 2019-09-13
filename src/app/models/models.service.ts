import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  private modelsUrl ='/api/model/'
  constructor(
    private httpClient:HttpClient
  ) { }

  public getModels(modelName) {
    return this.httpClient.get(`${this.modelsUrl}${modelName}`).pipe(
      tap(models => console.log('models', models))
    )
  }
}
