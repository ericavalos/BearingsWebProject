import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMantencionesComponente } from './modificar-mantenciones.component';

describe('ModificarMantencionesComponent', () => {
  let component: ModificarMantencionesComponente;
  let fixture: ComponentFixture<ModificarMantencionesComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarMantencionesComponente ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMantencionesComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
