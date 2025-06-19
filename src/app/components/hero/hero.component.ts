import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { AppService } from '../../services/app.service';
import { CCDButtonDirective } from '../../directives/ccd-button.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgClass, AsyncPipe, CCDButtonDirective, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  app = inject(AppService);
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;

  onCallForSpeakers() {
    window.open('https://www.commudle.com/fill-form/3468', '_blank');
  }
}
