import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMantencionesComponente } from './agregar-mantenciones.component';

describe('AgregarMantencionesComponent', () => {
  let component: AgregarMantencionesComponente;
  let fixture: ComponentFixture<AgregarMantencionesComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMantencionesComponente ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMantencionesComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
