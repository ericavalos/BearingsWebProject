import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLicenciasComponent } from './agregar-licencias.component';

describe('AgregarLicenciasComponent', () => {
  let component: AgregarLicenciasComponent;
  let fixture: ComponentFixture<AgregarLicenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarLicenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
