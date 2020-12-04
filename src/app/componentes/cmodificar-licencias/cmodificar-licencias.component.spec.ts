import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CModificarLicenciasComponent } from './cmodificar-licencias.component';

describe('CModificarLicenciasComponent', () => {
  let component: CModificarLicenciasComponent;
  let fixture: ComponentFixture<CModificarLicenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CModificarLicenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CModificarLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
