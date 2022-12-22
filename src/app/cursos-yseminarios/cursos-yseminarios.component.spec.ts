import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosYSeminariosComponent } from './cursos-yseminarios.component';

describe('CursosYSeminariosComponent', () => {
  let component: CursosYSeminariosComponent;
  let fixture: ComponentFixture<CursosYSeminariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosYSeminariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosYSeminariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
