import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatToolbar} from "@angular/material/toolbar";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {AppService} from "../../services/app.service";
import {BgImageComponent} from "../../components/bg-image/bg-image.component";

@Component({
  selector: 'app-root-page',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    MatSidenavContent,
    MatSidenav,
    MatSidenavContainer,
    BgImageComponent
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent implements AfterViewInit {
  app = inject(AppService)
  sideNavState = this.app.drawer$
  @ViewChild('content') matSidenavContent: MatSidenavContent

  constructor() {
  }

  ngAfterViewInit() {
    this.app.setMatSidenavContent(this.matSidenavContent)
  }


  closeDrawer() {
    this.app.closeDrawer()
  }
}
