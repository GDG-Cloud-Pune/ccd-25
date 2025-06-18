import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass} from "@angular/common";
import {AppService} from "../../services/app.service";
import {CCDButtonDirective} from "../../directives/ccd-button.directive";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    CCDButtonDirective
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  app = inject(AppService);
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
}
