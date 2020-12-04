import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAccesoComponent } from './modificar-acceso.component';

describe('ModificarAccesoComponent', () => {
  let component: ModificarAccesoComponent;
  let fixture: ComponentFixture<ModificarAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAccesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
