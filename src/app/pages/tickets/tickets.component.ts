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
      title: 'Regular - Conference Pass',
      price: '₹799',
      description: [
        '💼 Full access to all Conference Sessions',
        '🍽️ Includes food',
        '🎁 Exclusive Conference Goodies',
        '🤝 Networking opportunities with industry professionals & cloud enthusiasts',
      ],
      link: 'https://www.commudle.com/fill-form/3551',
      soldOut: false,
    },
    {
      title: 'Regular - Workshop Pass',
      price: '₹1099',
      description: [
        '👩🏻‍💻 Full access to Keynote + Workshops only',
        '🍽️ Includes food',
        '🎁 Exclusive Workshop Goodies',
        '🤝 Networking opportunities with industry professionals & cloud enthusiasts',
      ],
      link: 'https://www.commudle.com/fill-form/3552',
      soldOut: false,
    },
    {
      title: 'Regular - All Access Pass',
      price: '₹1399',
      description: [
        '👩🏻‍💻 Full access to Conference + Workshops',
        '🍽️ Includes food',
        '🎁 Exclusive Conference + Workshop Goodies',
        '🤝 Networking opportunities with industry professionals & cloud enthusiasts',
      ],
      link: 'https://www.commudle.com/fill-form/3553',
      soldOut: false,
    },
  ];
}
