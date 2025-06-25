import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.scss',
})
export class SponsorsComponent {
  eventSponsors = [
    { title: 'Weights & Biases', logo: '/assets/sponsors/wandb-logo.png' },
  ];
  workshopSponsors = [
    { title: 'Couchbase', logo: '/assets/sponsors/couchbase-logo.png' },
    { title: 'Solace', logo: '/assets/sponsors/solace-logo.png' },
    { title: 'LoftLabs', logo: '/assets/sponsors/loftlabs-logo.png' },
    { title: 'neo4j', logo: '/assets/sponsors/neo4j-logo.png' },
  ];
}
