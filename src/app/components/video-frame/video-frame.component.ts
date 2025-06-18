import { Component } from '@angular/core';
import { CCDButtonDirective } from '../../directives/ccd-button.directive';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-video-frame',
  standalone: true,
  imports: [CCDButtonDirective, MatIconModule],
  templateUrl: './video-frame.component.html',
  styleUrl: './video-frame.component.scss'
})
export class VideoFrameComponent {

}
