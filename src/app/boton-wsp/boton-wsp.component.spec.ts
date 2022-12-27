import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonWSPComponent } from './boton-wsp.component';

describe('BotonWSPComponent', () => {
  let component: BotonWSPComponent;
  let fixture: ComponentFixture<BotonWSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonWSPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonWSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
