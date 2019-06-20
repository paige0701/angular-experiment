import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleContentComponent } from './multiple-content.component';

describe('MultipleContentComponent', () => {
  let component: MultipleContentComponent;
  let fixture: ComponentFixture<MultipleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
