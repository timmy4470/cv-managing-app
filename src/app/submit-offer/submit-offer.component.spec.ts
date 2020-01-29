import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOfferComponent } from './submit-offer.component';

describe('SubmitOfferComponent', () => {
  let component: SubmitOfferComponent;
  let fixture: ComponentFixture<SubmitOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
