import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageEventsComponent } from './frontpage-events.component';

describe('FrontpageEventsComponent', () => {
  let component: FrontpageEventsComponent;
  let fixture: ComponentFixture<FrontpageEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontpageEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontpageEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
