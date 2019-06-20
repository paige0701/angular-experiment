import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNgContentExampleComponent } from './basic-ng-content-example.component';

describe('BasicNgContentExampleComponent', () => {
  let component: BasicNgContentExampleComponent;
  let fixture: ComponentFixture<BasicNgContentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicNgContentExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNgContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
