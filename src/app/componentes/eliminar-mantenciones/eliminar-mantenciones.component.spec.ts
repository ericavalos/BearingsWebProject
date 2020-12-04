import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMantencionesComponente } from './eliminar-mantenciones.component';

describe('EliminarMantencionesComponent', () => {
  let component: EliminarMantencionesComponente;
  let fixture: ComponentFixture<EliminarMantencionesComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMantencionesComponente ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMantencionesComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
