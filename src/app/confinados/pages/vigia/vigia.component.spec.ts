import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigiaComponent } from './vigia.component';

describe('VigiaComponent', () => {
  let component: VigiaComponent;
  let fixture: ComponentFixture<VigiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VigiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VigiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
