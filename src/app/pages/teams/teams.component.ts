import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  organizers = [
    { name: 'Antrixsh Gupta', image: 'assets/teams/antrixsh_gupta.jpg' },
    { name: 'Shailesh Chaskar', image: 'assets/teams/shailesh_chaskar.jpg' },
    { name: 'Pratik Kale', image: 'assets/teams/pratik.JPG' },
    { name: 'Dnyanada Mahajan', image: 'assets/teams/dnyanada_mahajan.jpg' },
  ];

  volunteers = [
    { name: 'Aarya Anekar', image: 'assets/teams/Aarya Anekar.jpg' },
    { name: 'Amaan Shikalgar', image: 'assets/teams/Amaan Shikalgar.jpg' },
    { name: 'Disha Gole', image: 'assets/teams/Disha Gole.jpeg' },
    { name: 'Jyotiraditya Pise', image: 'assets/teams/Jyotiraditya Pise.jpg' },
    { name: 'Lavanya Moolya', image: 'assets/teams/Lavanya Moolya.jpeg '}
  ];
}
