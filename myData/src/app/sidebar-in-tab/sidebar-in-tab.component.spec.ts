import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInTabComponent } from './sidebar-in-tab.component';

describe('SidebarInTabComponent', () => {
  let component: SidebarInTabComponent;
  let fixture: ComponentFixture<SidebarInTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarInTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarInTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
