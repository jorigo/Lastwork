import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    // Simulación de autenticación
    if (this.username && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Por favor ingrese sus credenciales.');
    }
  }
}
