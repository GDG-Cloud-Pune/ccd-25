import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RootComponent} from "./pages/root/root.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ccd25';
}
