import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliComponent } from './publi.component';

describe('PubliComponent', () => {
  let component: PubliComponent;
  let fixture: ComponentFixture<PubliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
