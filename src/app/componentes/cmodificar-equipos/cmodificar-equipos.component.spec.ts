import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmodificarEquiposComponent } from './cmodificar-equipos.component';

describe('CmodificarEquiposComponent', () => {
  let component: CmodificarEquiposComponent;
  let fixture: ComponentFixture<CmodificarEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmodificarEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmodificarEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
