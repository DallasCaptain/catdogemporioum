import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggomanagerComponent } from './doggomanager.component';

describe('DoggomanagerComponent', () => {
  let component: DoggomanagerComponent;
  let fixture: ComponentFixture<DoggomanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggomanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggomanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
