import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { InstructoresyEscuelasComponent } from './instructoresy-escuelas/instructoresy-escuelas.component';
import { MembresiaComponent } from './membresia/membresia.component';
import { EventosComponent } from './eventos/eventos.component';
import { CursosYSeminariosComponent } from './cursos-yseminarios/cursos-yseminarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NoticiasComponent,
    DirectorioComponent,
    InstructoresyEscuelasComponent,
    MembresiaComponent,
    EventosComponent,
    CursosYSeminariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
