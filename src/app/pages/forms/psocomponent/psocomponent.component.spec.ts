import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsocomponentComponent } from './psocomponent.component';

describe('PsocomponentComponent', () => {
  let component: PsocomponentComponent;
  let fixture: ComponentFixture<PsocomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
