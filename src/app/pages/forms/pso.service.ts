import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPso } from './pso';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PsoService {

  private _url :string = "http://biinyugames.com/acontis/acontis-backend/public/api/companies";

  constructor(private http: HttpClient) { }
  
  getleagues(): Observable<IPso[]>{
    return this.http.get<IPso[]>(this._url);
  }

}