import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarOfWorld1GraphicComponent } from './war-of-world1-graphic.component';

describe('WarOfWorld1GraphicComponent', () => {
  let component: WarOfWorld1GraphicComponent;
  let fixture: ComponentFixture<WarOfWorld1GraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarOfWorld1GraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarOfWorld1GraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
