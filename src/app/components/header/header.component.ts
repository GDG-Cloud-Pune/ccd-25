import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppService } from '../../services/app.service';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    AsyncPipe,
    MatIconModule,
    NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  app = inject(AppService);
  isMobile$ = this.app.isMobile$;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
