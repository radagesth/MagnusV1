import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiperIndexComponent } from './hiper-index.component';

describe('HiperIndexComponent', () => {
  let component: HiperIndexComponent;
  let fixture: ComponentFixture<HiperIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiperIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiperIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
