import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';

describe('PhotoFrameComponent', () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
