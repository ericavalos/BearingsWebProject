import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CModificarMantencionesComponente } from './cmodificar-mantenciones.component';

describe('CModificarMantencionesComponent', () => {
  let component: CModificarMantencionesComponente;
  let fixture: ComponentFixture<CModificarMantencionesComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CModificarMantencionesComponente ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CModificarMantencionesComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
