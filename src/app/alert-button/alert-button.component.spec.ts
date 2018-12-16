//require  for all
import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
//require for component DOM test
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AlertButtonComponent } from './alert-button.component';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    
    fixture.detectChanges();
  });
  //test component create successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  //test  properties of the component 
  it('should have message with `warned`', () => {
    expect(component.content).toContain('warned');
  });

  it('should have severity greater than `200`', () => {
    expect(component.severity).toBeGreaterThan(200);
  });

  // test compone being render correctly in DOM
  it('should have an H1 tag of `Alert Button`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });

  //test functionality of the component
  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy;
    component.toggle();
    expect(component.hideContent).toBeFalsy;
  });

  it('should toggle the message boolean asynchronously', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy;
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy;
  }));

});
