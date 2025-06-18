import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {AppService} from "../../services/app.service";
import {CCDButtonDirective} from "../../directives/ccd-button.directive";

@Component({
  selector: 'app-cool-figures',
  standalone: true,
  imports: [
    AsyncPipe,
    CCDButtonDirective,
    MatIcon,
    NgClass
  ],
  templateUrl: './cool-figures.component.html',
  styleUrl: './cool-figures.component.scss'
})
export class CoolFiguresComponent {
  app = inject(AppService)
  isMobile = this.app.isMobile$
  isTab = this.app.isTab$
  isDesktop = this.app.isDesktop$
}
