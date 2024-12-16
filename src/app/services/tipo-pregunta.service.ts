import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TipoPreguntaService {
  private baseUrl = 'http://localhost:3000/Tipo-Preguntas';
  constructor(private http: HttpClient) {
    
   }
    gettipopregunta() {
      return this.http.get('http://localhost:3000/Tipo-Preguntas');
} 
//Uso este metodo para mantener la coherencia con el nombre de la tabla en la base de datos
getById(id: any){
  return this.http.get(`http://localhost:3000/Tipo-Preguntas/${id}`);
}

posttipopregunta(Encuestas: any){

  return this.http.post('http://localhost:3000/Tipo-Preguntas', Encuestas);
}
deletetipopregunta(id: any){
  return this.http.delete(`http://localhost:3000/Tipo-Preguntas/${id}`);

}

update(id: string, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, data);
}


}