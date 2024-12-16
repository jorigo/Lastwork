import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PreguntasModel } from '../models/preguntasModel';
import { EncuestaModel } from '../models/encuestaModel';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  getPreguntaById(id: string) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {
    
   }
    getpreguntas(id: string) {
      return this.http.get('http://localhost:3000/pregunta');
} 


//Uso este metodo para mantener la coherencia con el nombre de la tabla en la base de datos
getById(id: any){
  return this.http.get(`http://localhost:3000/pregunta/${id}`);
}

postPreguntas(Preguntas: any){

  return this.http.post('http://localhost:3000/pregunta', Preguntas);
}
deletePreguntas(id: any){
  return this.http.delete(`http://localhost:3000/pregunta/${id}`);

}


getPreguntas(): Observable<PreguntasModel[]> {
  return this.http.get<PreguntasModel[]>(`${this.baseUrl}/pregunta`);
}

updatePregunta(pregunta: PreguntasModel): Observable<void> {
  return this.http.put<void>(
    `${this.baseUrl}/pregunta/${pregunta.id}`,
    pregunta
  );
}

  getEncuestas(): Observable<EncuestaModel[]> {
    return this.http.get<EncuestaModel[]>(`${this.baseUrl}/encuesta`);
  }

  deletePregunta(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/pregunta/${id}`);
  }


    


}