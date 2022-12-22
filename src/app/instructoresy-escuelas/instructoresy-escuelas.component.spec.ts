import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructoresyEscuelasComponent } from './instructoresy-escuelas.component';

describe('InstructoresyEscuelasComponent', () => {
  let component: InstructoresyEscuelasComponent;
  let fixture: ComponentFixture<InstructoresyEscuelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructoresyEscuelasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructoresyEscuelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
