import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {
  @Input() title: string = '';
  @Input() price: string = '';
  @Input() description: string[] = [];
  @Input() link: string = '';
}
