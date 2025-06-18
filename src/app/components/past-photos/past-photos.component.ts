import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CCDButtonDirective } from '../../directives/ccd-button.directive';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-past-photos',
  standalone: true,
  imports: [CommonModule, CCDButtonDirective, MatIconModule],
  templateUrl: './past-photos.component.html',
  styleUrls: ['./past-photos.component.scss']
})
export class PastPhotosComponent {
  photos = [
    { src: 'assets/photos/photo1.png', alt: 'Event stage and audience' },
    { src: 'assets/photos/photo1.png', alt: 'Audience member asking question' },
    { src: 'assets/photos/photo1.png', alt: 'Attendees discussing' },
    { src: 'assets/photos/photo1.png', alt: 'Audience listening' },
  ];
} 