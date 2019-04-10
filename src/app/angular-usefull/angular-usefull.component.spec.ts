import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUsefullComponent } from './angular-usefull.component';

describe('AngularUsefullComponent', () => {
  let component: AngularUsefullComponent;
  let fixture: ComponentFixture<AngularUsefullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularUsefullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularUsefullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
