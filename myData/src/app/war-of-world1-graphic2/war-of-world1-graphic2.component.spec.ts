import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarOfWorld1Graphic2Component } from './war-of-world1-graphic2.component';

describe('WarOfWorld1Graphic2Component', () => {
  let component: WarOfWorld1Graphic2Component;
  let fixture: ComponentFixture<WarOfWorld1Graphic2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarOfWorld1Graphic2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarOfWorld1Graphic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
