import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCredencialesComponent } from './mostrar-credenciales.component';

describe('MostrarCredencialesComponent', () => {
  let component: MostrarCredencialesComponent;
  let fixture: ComponentFixture<MostrarCredencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCredencialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCredencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
