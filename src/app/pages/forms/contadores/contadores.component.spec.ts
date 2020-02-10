import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoresComponent } from './contadores.component';

describe('ContadoresComponent', () => {
  let component: ContadoresComponent;
  let fixture: ComponentFixture<ContadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
