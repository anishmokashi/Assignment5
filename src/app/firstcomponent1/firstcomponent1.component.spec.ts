import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Firstcomponent1Component } from './firstcomponent1.component';

describe('Firstcomponent1Component', () => {
  let component: Firstcomponent1Component;
  let fixture: ComponentFixture<Firstcomponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Firstcomponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Firstcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
