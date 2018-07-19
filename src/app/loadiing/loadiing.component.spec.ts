import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadiingComponent } from './loadiing.component';

describe('LoadiingComponent', () => {
  let component: LoadiingComponent;
  let fixture: ComponentFixture<LoadiingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadiingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadiingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
