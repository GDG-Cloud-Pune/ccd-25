import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-code-of-conduct',
  standalone: true,
  imports: [],
  templateUrl: './code-of-conduct.component.html',
  styleUrl: './code-of-conduct.component.scss',
})
export class CodeOfConductComponent {
  @HostBinding('class') classes = 'code-of-conduct-host';
}
