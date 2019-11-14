import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcatsComponent } from './showcats.component';

describe('ShowcatsComponent', () => {
  let component: ShowcatsComponent;
  let fixture: ComponentFixture<ShowcatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
