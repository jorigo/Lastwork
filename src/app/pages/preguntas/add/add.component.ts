import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EncuestasService } from '../../../services/encuestas.service';
import { PreguntasService } from '../../../services/preguntas.service';
import { EncuestaModel } from '../../../models/encuestaModel';
import { PreguntasModel } from '../../../models/preguntasModel';
import { CommonModule } from '@angular/common';                                                                                                                                                                                                                                                                                           
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-pregunta',
  standalone: true,
  imports: [FormsModule, 
    CommonModule, RouterModule],
  templateUrl: './add.component.html',            
  styleUrls: ['./add.component.sass'],
})
export class AddPreguntasComponent implements OnInit {                                                          
  encuesta: EncuestaModel = new EncuestaModel();
  preguntasList: PreguntasModel[] = [];
  selectedPregunta!: PreguntasModel;

  constructor(
    private route: ActivatedRoute,
    private encuestasService: EncuestasService,
    private preguntasService: PreguntasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const encuestaId = this.route.snapshot.params['id']; // para obtener el id de la encuesta
    this.cargarEncuesta(encuestaId);
    this.cargarPreguntas();
  }

  // Cargo la encuesta seleccionada
  cargarEncuesta(id: string): void {
    this.encuestasService.getEncuestaById(id).subscribe(
      (encuesta) => {
        this.encuesta = encuesta;
      },
      (error) => {
        console.error('Error al cargar la encuesta:', error);
      }
    );
  }

  // aqui carga todas las preguntas disponibles
  cargarPreguntas(): void {
    this.preguntasService.getPreguntas().subscribe(
      (preguntas) => {
        this.preguntasList = preguntas;
      },
      (error) => {
        console.error('Error al cargar preguntas:', error);
      }
    );
  }

  // aqui anido los id entre la encuesta y la pregunta seleccionada
  onGuardar(): void {
    if (!this.selectedPregunta) {
      confirm('Debe seleccionar una pregunta.');
      return;
    }

     // me toco convertir estos datos a string el id de la encuesta y pregunta
  const idEncuesta = String(this.encuesta.id);
  const idPregunta = String(this.selectedPregunta.id);

  // Actualizo la encuesta con el id de la pregunta
  this.encuesta.idpregunta = idPregunta;

  // invoco al servicio para actualizar la encuesta
  this.encuestasService.updateEncuesta(this.encuesta).subscribe(
    () => {
      // Actualizo la pregunta con el id de la encuesta
      this.selectedPregunta.idencuesta = idEncuesta;

      this.preguntasService.updatePregunta(this.selectedPregunta).subscribe(
        () => {
          confirm('Pregunta asociada exitosamente.');
          this.router.navigate(['/preguntas']); // Redirigir tras éxito
        },
        (error) => {
          console.error('Error al actualizar la pregunta:', error);
        }
      );
    },
    (error) => {
      console.error('Error al actualizar la encuesta:', error);
    }
  );
}
   // aqui redirige a la pagina de preguntas
    back(){
      this.router.navigate(['/preguntas']);
    }
  }