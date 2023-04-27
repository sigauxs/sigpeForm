import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorEntranteComponent } from './trabajador-entrante.component';

describe('TrabajadorEntranteComponent', () => {
  let component: TrabajadorEntranteComponent;
  let fixture: ComponentFixture<TrabajadorEntranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorEntranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadorEntranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
