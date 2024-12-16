import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntasService } from '../../services/preguntas.service';
import { PreguntasModel } from '../../models/preguntasModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preguntasasociadas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preguntasasociadas.component.html',
  styleUrls: ['./preguntasasociadas.component.sass'],
})
export class PreguntasasociadasComponent implements OnInit {
  preguntas: PreguntasModel[] = [];
  encuestaId!: string;

  constructor(
    private route: ActivatedRoute,
    private preguntasService: PreguntasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.encuestaId = this.route.snapshot.params['id'];
    this.cargarPreguntasAsociadas();
  }

  // Cargar preguntas asociadas a la encuesta
  cargarPreguntasAsociadas() {
    this.preguntasService.getPreguntas().subscribe(
      (preguntas) => {
        this.preguntas = preguntas.filter(
          (pregunta) => pregunta.idencuesta === this.encuestaId
        );
      },
      (error) => console.error('Error al cargar preguntas:', error)
    );
  }

  // Editar una pregunta
  editarPregunta(pregunta: PreguntasModel) {
    // Navegar al componente de edición pasando el ID de la pregunta
    this.router.navigate(['/editpregunta', pregunta.id]);
  }

  // Eliminar una pregunta
  eliminarPregunta(idPregunta: string) {
    if (confirm('¿Está seguro de que desea eliminar esta pregunta?')) {
      this.preguntasService.deletePreguntas(idPregunta).subscribe(
        () => {
          // Filtrar la lista de preguntas eliminando la pregunta con el ID especificado
          this.preguntas = this.preguntas.filter(
            (pregunta) => pregunta.id !== idPregunta
          );
        },
        (error) => console.error('Error al eliminar la pregunta:', error)
      );
    }
  }

  navigateHome(): void {
    this.router.navigate(['/encuestas']);
  }
}

