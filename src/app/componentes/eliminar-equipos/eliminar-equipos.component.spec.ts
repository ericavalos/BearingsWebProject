import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEquiposComponent } from './eliminar-equipos.component';

describe('EliminarEquiposComponent', () => {
  let component: EliminarEquiposComponent;
  let fixture: ComponentFixture<EliminarEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
