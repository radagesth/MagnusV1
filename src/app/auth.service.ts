// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  login(username: string, password: string): boolean {
    // Aquí debes realizar la lógica de validación de credenciales.
    // Comprueba si las credenciales son válidas en tu backend o servicio de autenticación.
    if (username === 'usuario' && password === 'contrasena') {
      this.loggedIn = true;
      return true;
    } else {
      this.loggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
