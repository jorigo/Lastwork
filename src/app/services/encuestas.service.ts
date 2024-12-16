import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncuestaModel } from '../models/encuestaModel';
import { PreguntasModel } from '../models/preguntasModel';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  private baseUrl = 'http://localhost:3000';
  postPreguntas: any;


  constructor(private http: HttpClient) {
    
   }
//Uso este metodo para traer el listado de encuestas a la pagina de preguntas
   getEncuestas(): Observable<EncuestaModel[]> {
    return this.http.get<EncuestaModel[]>(`${this.baseUrl}/encuesta`);
  }
  
    getencuesta() {
      return this.http.get('http://localhost:3000/encuesta');
} 
//Uso este metodo para mantener la coherencia con el nombre de la tabla en la base de datos
getById(id: any){
  return this.http.get(`http://localhost:3000/encuesta/${id}`);
}

postEncuestas(Encuestas: any){

  return this.http.post('http://localhost:3000/encuesta', Encuestas);
}
deleteEncuestas(id: any){
  return this.http.delete(`http://localhost:3000/encuesta/${id}`);

}

update(id: string, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, data);
}

putEncuesta(id: string, encuesta: EncuestaModel): Observable<EncuestaModel> {
  return this.http.put<EncuestaModel>(
    `${this.baseUrl}/encuesta/${id}`,
    encuesta
  );
}


getEncuestaById(id: string): Observable<EncuestaModel> {
  return this.http.get<EncuestaModel>(`${this.baseUrl}/encuesta/${id}`);
}

updateEncuesta(encuesta: EncuestaModel): Observable<void> {
  return this.http.put<void>(
    `${this.baseUrl}/encuesta/${encuesta.id}`,
    encuesta
  );
}

getPreguntaById(id: string): Observable<PreguntasModel> {
  return this.http.get<PreguntasModel>(`${this.baseUrl}/pregunta/${id}`);
}


}