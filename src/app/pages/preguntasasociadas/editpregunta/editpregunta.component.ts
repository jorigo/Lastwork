import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PreguntasService } from '../../../services/preguntas.service';
import { PreguntasModel } from '../../../models/preguntasModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreguntasasociadasComponent } from '../preguntasasociadas.component';

@Component({
  selector: 'app-edit',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editpregunta.component.html',
  styleUrls: ['./editpregunta.component.sass'],
})
export class EditPreguntaComponent implements OnInit {
  pregunta: PreguntasModel = new PreguntasModel();
  idpregunta: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private preguntasService: PreguntasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idpregunta = this.route.snapshot.params['id'];
    if (this.idpregunta) {
      this.cargarPregunta(this.idpregunta);
    } else {
      console.error('ID de pregunta no encontrado en la URL');
      this.router.navigate(['/preguntasasociadas']);
    }
  }

 // Cargar datos de la pregunta
 cargarPregunta(id: string) {
    this.preguntasService.getPreguntaById(id).subscribe(
     (pregunta: PreguntasModel) => {
       if (pregunta) {
         this.pregunta = pregunta;
       } else {
         console.error('Pregunta no encontrada en la base de datos');
         this.router.navigate(['/preguntasasociadas']);
       }
     },
     (error: any) => {
       console.error('Error al cargar la pregunta:', error);
       this.router.navigate(['/preguntasasociadas']);
     }
   );
 }

 // Guardar cambios en la pregunta
 guardarCambios() {
   // Verificar que el ID esté definido antes de enviar la solicitud
   if (!this.pregunta.id) {
     console.error('El ID de la pregunta es undefined');
     return;
   }

   this.preguntasService.updatePregunta(this.pregunta).subscribe(
     () => {
      
       this.router.navigate(['/preguntasasociadas', this.pregunta.idencuesta]);
     },
     (error) => {
       console.error('Error al actualizar la pregunta:', error);
     }
   );
 }
}