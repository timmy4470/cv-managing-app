import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcvComponent } from './showcv.component';

describe('ShowcvComponent', () => {
  let component: ShowcvComponent;
  let fixture: ComponentFixture<ShowcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
