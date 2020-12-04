import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLicenciasComponent } from './eliminar-licencias.component';

describe('EliminarLicenciasComponent', () => {
  let component: EliminarLicenciasComponent;
  let fixture: ComponentFixture<EliminarLicenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarLicenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
