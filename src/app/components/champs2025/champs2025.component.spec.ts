import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Champs2025Component } from './champs2025.component';

describe('Champs2025Component', () => {
  let component: Champs2025Component;
  let fixture: ComponentFixture<Champs2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Champs2025Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Champs2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
