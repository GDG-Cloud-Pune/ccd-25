import {Component, inject} from '@angular/core';
import {AppService} from "../../services/app.service";
import {AsyncPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-what-is-ccd',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './what-is-ccd.component.html',
  styleUrl: './what-is-ccd.component.scss'
})
export class WhatIsCcdComponent {
  app = inject(AppService)
  isMobile = this.app.isMobile$
  isTab = this.app.isTab$
  isDesktop = this.app.isDesktop$
}
