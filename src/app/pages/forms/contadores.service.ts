import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IContadores } from './contadores';

@Injectable({
  providedIn: 'root'
})
export class ContadoresService {

  private _url :string = "http://biinyugames.com/acontis/acontis-backend/public/api/contadores";
  

  constructor(private http: HttpClient) { }
  
  getContadores(): Observable<IContadores[]>{
    return this.http.get<IContadores[]>(this._url);
  }
}
