import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAccesoComponent } from './mostrar-acceso.component';

describe('MostrarAccesoComponent', () => {
  let component: MostrarAccesoComponent;
  let fixture: ComponentFixture<MostrarAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarAccesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
