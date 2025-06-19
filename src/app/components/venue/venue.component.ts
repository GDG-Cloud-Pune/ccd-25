import { Component, inject } from '@angular/core';
import { CCDButtonDirective } from '../../directives/ccd-button.directive';
import { MatIconModule } from '@angular/material/icon';
import { AppService } from '../../services/app.service';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [CCDButtonDirective, MatIconModule, NgClass, AsyncPipe],
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.scss',
})
export class VenueComponent {
  app = inject(AppService);
  isMobile = this.app.isMobile$;
  isTab = this.app.isTab$;
  isDesktop = this.app.isDesktop$;

  onGetDirections() {
    window.open('https://maps.app.goo.gl/p4AsbfUaXPtuBrmQ7', '_blank');
  }
}
