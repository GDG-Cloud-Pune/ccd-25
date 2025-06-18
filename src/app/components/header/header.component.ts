import {Component, inject} from '@angular/core';
import {AppService} from "../../services/app.service";
import {AsyncPipe, NgClass} from "@angular/common";
import {CCDButtonDirective} from "../../directives/ccd-button.directive";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass,
    CCDButtonDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  app = inject(AppService)
  constructor() {
  }
}
