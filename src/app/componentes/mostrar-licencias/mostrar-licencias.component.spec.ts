import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLicenciasComponent } from './mostrar-licencias.component';

describe('MostrarLicenciasComponent', () => {
  let component: MostrarLicenciasComponent;
  let fixture: ComponentFixture<MostrarLicenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarLicenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
