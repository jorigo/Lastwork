import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EncuestaModel } from '../../models/encuestaModel';
import { EncuestasService } from '../../services/encuestas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encuestas',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.sass'],
})
export class EncuestaslistComponent implements OnInit {
  encuestasList: EncuestaModel[] = [];

  constructor(
    @Inject(EncuestasService) private encuestasService: EncuestasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarEncuestas();
  }

  // Método para cargar encuestas desde la base de datos
  cargarEncuestas(): void {
    this.encuestasService.getEncuestas().subscribe(
      (encuestas) => {
        this.encuestasList = encuestas;
        this.encuestasService.getencuesta().subscribe((res: any) => {
          console.log(res);
          this.encuestasList = res;
        });
      },
      (error) => {
        console.error('Error al cargar encuestas:', error);
      }
    );
  }

  // Redirigir al componente de agregar nueva encuesta
  onAgregar(): void {
    this.router.navigate(['/encuestas/add']);
  }

  // Redirigir al componente de edición de encuestas
  onEditar(id: string): void {
    this.router.navigate([`/encuestas/edit/${id}`]);
  }

  // Método para borrar una encuesta
  onBorrar(id: string): void {
    if (confirm('¿Está seguro de que desea eliminar esta encuesta?')) {
      this.encuestasService.deleteEncuestas(id).subscribe(
        () => { confirm('Encuesta eliminada exitosamente');
          this.cargarEncuestas();
        },
        (error) => {
          console.error('Error al eliminar la encuesta:', error);
        }
      );
    }
  }

  // Redirigir a la gestión de preguntas asociadas a la encuesta
  onVerPreguntas(id: string): void {
    this.router.navigate([`/preguntas${id}`]);
  }


  deleteEncuestas(id: string) {
    this.encuestasList = this.encuestasList.filter((Encuestas:  EncuestaModel ) => Encuestas.id !== id);
    this.encuestasService.deleteEncuestas(id).subscribe();
      }

      back(){
        this.router.navigate(['/home']);
      }

  } 

