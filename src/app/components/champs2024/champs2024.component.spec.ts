import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Champs2024Component } from './champs2024.component';

describe('Champs2024Component', () => {
  let component: Champs2024Component;
  let fixture: ComponentFixture<Champs2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Champs2024Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Champs2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
