import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Calzado} from "../common/calzado";

@Injectable({
  providedIn: 'root'
})
export class CalzadoService
{
  private baseURL = 'http://localhost:3000/api/v1/calzados';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Calzado[]> {
    return this.http.get<Calzado[]>(this.baseURL + '/todos/');
  }

  getOne(id:string): Observable<Calzado> {
    return this.http.get<Calzado>(this.baseURL + '/calzado/' + id);
  }

  getByName(nombre: string): Observable<Calzado[]> {
    return this.http.get<Calzado[]>(this.baseURL + '/nombre/' + nombre);
  }
  addCalzado(calzado: Calzado): Observable<Calzado>
  {
    return this.http.post<Calzado>(this.baseURL + '/insertar/',calzado);
  }

  updateCalzado(calzado: Calzado): Observable<Calzado>
  {
    return this.http.patch<Calzado>(this.baseURL + '/actualizar/' + calzado._id, calzado);
  }

  borrarCalzado(id: string): Observable<ApiResultDelete>
  {
    return this.http.delete<ApiResultDelete>(this.baseURL + '/borrar/' + id);
  }

}

interface ApiResultDelete
{
  status: string;
}

