import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación, como verificar las credenciales en un servicio o backend.
  }
}
