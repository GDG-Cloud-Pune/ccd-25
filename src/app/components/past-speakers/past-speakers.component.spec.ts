import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSpeakersComponent } from './past-speakers.component';

describe('PastSpeakersComponent', () => {
  let component: PastSpeakersComponent;
  let fixture: ComponentFixture<PastSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastSpeakersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
