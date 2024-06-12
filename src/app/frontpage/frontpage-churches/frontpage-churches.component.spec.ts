import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageChurchesComponent } from './frontpage-churches.component';

describe('FrontpageChurchesComponent', () => {
  let component: FrontpageChurchesComponent;
  let fixture: ComponentFixture<FrontpageChurchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontpageChurchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontpageChurchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
