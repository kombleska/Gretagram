import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStatComponent } from './all-stat.component';

describe('AllStatComponent', () => {
  let component: AllStatComponent;
  let fixture: ComponentFixture<AllStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
