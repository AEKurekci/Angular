import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSampleComponent } from './animation-sample.component';

describe('AnimationSampleComponent', () => {
  let component: AnimationSampleComponent;
  let fixture: ComponentFixture<AnimationSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
