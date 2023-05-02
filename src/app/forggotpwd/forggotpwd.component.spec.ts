import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForggotpwdComponent } from './forggotpwd.component';

describe('ForggotpwdComponent', () => {
  let component: ForggotpwdComponent;
  let fixture: ComponentFixture<ForggotpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForggotpwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForggotpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
