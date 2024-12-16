import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestasService } from './../../../services/encuestas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  item: any = { id: '', nombre: '', totalrespondido: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private encuestaService: EncuestasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.encuestaService.getById(id).subscribe(data => {
      this.item = data;
    });
  }

  update(): void {
    this.encuestaService.update(this.item.id, this.item).subscribe(() => {
      alert('Registro actualizado exitosamente.');
      this.router.navigate(['/encuestas']);
    });
  }

  back(): void {
    this.router.navigate(['/encuestas']);
  }
}



