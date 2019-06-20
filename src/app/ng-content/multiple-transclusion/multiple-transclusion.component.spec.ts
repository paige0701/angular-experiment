import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTransclusionComponent } from './multiple-transclusion.component';

describe('MultipleTransclusionComponent', () => {
  let component: MultipleTransclusionComponent;
  let fixture: ComponentFixture<MultipleTransclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleTransclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTransclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
