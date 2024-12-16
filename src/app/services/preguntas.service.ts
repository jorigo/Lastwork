import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PreguntasModel } from '../models/preguntasModel';
import { EncuestaModel } from '../models/encuestaModel';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {
    
   }
    getpreguntas(id: string) {
      return this.http.get('http://localhost:3000/pregunta');
} 




postPreguntas(Preguntas: any){

  return this.http.post('http://localhost:3000/pregunta', Preguntas);
}
deletePreguntas(id: any){
  return this.http.delete(`http://localhost:3000/pregunta/${id}`);

}

update(id: string, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, data);
}



getPreguntas(): Observable<PreguntasModel[]> {
  return this.http.get<PreguntasModel[]>(`${this.baseUrl}/pregunta`);
}

updatePregunta(pregunta: PreguntasModel): Observable<void> {
  return this.http.put<void>(`${this.baseUrl}/pregunta/${pregunta.id}`, pregunta);
}

  getEncuestas(): Observable<EncuestaModel[]> {
    return this.http.get<EncuestaModel[]>(`${this.baseUrl}/encuesta`);
  }

  deletePregunta(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/pregunta/${id}`);
  }

  
  getPreguntaById(id: string): Observable<PreguntasModel> {
    return this.http.get<PreguntasModel>(`${this.baseUrl}/pregunta/${id}`);
  }

}