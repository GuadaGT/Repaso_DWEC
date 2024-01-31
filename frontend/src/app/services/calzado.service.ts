import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Calzado} from "../common/calzado";

@Injectable({
  providedIn: 'root'
})
export class CalzadoService
{
  baseURL = 'http://localhost:3000/api/v1/calzados';

  constructor(private http: HttpClient) { }

  getCalzadoList(): Observable<Calzado[]> {
    return this.http.get<Calzado[]>(this.baseURL + '/todos/');
  }

  updateCalzado(id: string, calzado: Calzado): Observable<ApiResponseUp> {
    return this.http.patch<ApiResponseUp>(this.baseURL + '/actualizar/' + id, calzado);
  }

  deleteCalzado(id: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseURL + '/borrar/' + id);
  }

  addCalzado(calzado: Calzado): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseURL + '/insertar/', calzado);
  }

  getCalzado(id: string): Observable<Calzado> {
    return this.http.get<Calzado>(this.baseURL + '/calzado/' + id);
  }

  getCalzadoByName(nombre: string): Observable<Calzado[]> {
    return this.http.get<Calzado[]>(this.baseURL + '/nombre/' + nombre);
  }
}

interface ApiResponse {
  status: string;
}

interface ApiResponseUp {
  status: string,
  calzado: Calzado;
}
