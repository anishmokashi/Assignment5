import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondcomponent1Component } from './secondcomponent1.component';

describe('Secondcomponent1Component', () => {
  let component: Secondcomponent1Component;
  let fixture: ComponentFixture<Secondcomponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondcomponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
