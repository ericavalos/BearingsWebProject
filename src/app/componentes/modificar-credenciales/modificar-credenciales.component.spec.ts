import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCredencialesComponent } from './modificar-credenciales.component';

describe('ModificarCredencialesComponent', () => {
  let component: ModificarCredencialesComponent;
  let fixture: ComponentFixture<ModificarCredencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCredencialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCredencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
