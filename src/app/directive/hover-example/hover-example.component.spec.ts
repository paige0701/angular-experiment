import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverExampleComponent } from './hover-example.component';

describe('HoverExampleComponent', () => {
  let component: HoverExampleComponent;
  let fixture: ComponentFixture<HoverExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
