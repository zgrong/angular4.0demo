import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XingzhengComponent } from './xingzheng.component';

describe('XingzhengComponent', () => {
  let component: XingzhengComponent;
  let fixture: ComponentFixture<XingzhengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XingzhengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XingzhengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
