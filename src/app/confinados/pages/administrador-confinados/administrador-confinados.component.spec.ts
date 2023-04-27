import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorConfinadosComponent } from './administrador-confinados.component';

describe('AdministradorConfinadosComponent', () => {
  let component: AdministradorConfinadosComponent;
  let fixture: ComponentFixture<AdministradorConfinadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorConfinadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorConfinadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
