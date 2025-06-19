import { Component } from '@angular/core';
import { TicketComponent } from '../../components/ticket/ticket.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [TicketComponent, NgFor],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {
  tickets = [
    {
      title: 'Early Bird - Conference Pass',
      price: '₹599',
      description: [
        '💼 Full access to all Conference Sessions',
        '🍽️ Includes food',
        '🎁 Exclusive Goodies',
        '🤝 Networking opportunities with industry professionals & cloud enthusiasts',
      ],
      link: 'https://www.commudle.com/fill-form/3514',
    },
    {
      title: 'Early Bird - Workshop Pass',
      price: '₹899',
      description: [
        '👩🏻‍💻 Full access to Keynote + Workshops only',
        '🍽️ Includes food',
        '🎁 Exclusive Goodies',
        '🤝 Networking opportunities with industry professionals & cloud enthusiasts',
      ],
      link: 'https://www.commudle.com/fill-form/3515',
    },
    {
      title: 'Early Bird - All Access Pass',
      price: '₹1199',
      description: [
        '👩🏻‍💻 Full access to Conference + Workshops',
        '🍽️ Includes food',
        '🎁 Exclusive Goodies',
        '🤝 Networking opportunities with industry professionals & cloud enthusiasts',
      ],
      link: 'https://www.commudle.com/fill-form/3517',
    },
  ];
}
