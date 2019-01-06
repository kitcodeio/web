import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KideComponent } from './kide.component';

describe('KideComponent', () => {
  let component: KideComponent;
  let fixture: ComponentFixture<KideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
