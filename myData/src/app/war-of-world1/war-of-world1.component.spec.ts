import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarOfWorld1Component } from './war-of-world1.component';

describe('WarOfWorld1Component', () => {
  let component: WarOfWorld1Component;
  let fixture: ComponentFixture<WarOfWorld1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarOfWorld1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarOfWorld1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
