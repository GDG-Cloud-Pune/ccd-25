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
    { name: 'Antrixsh Gupta', image: 'assets/teams/antrixsh_gupta.JPG' },
    { name: 'Shailesh Chaskar', image: 'assets/teams/shailesh2.jpeg' },
    { name: 'Pratik Kale', image: 'assets/teams/pratik2.jpg' },
    { name: 'Dnyanada Mahajan', image: 'assets/teams/dnyanda2.jpg' },
  ];

  volunteers = [
    { name: 'Aarya Anekar', image: 'assets/teams/Aarya_Anekar.jpg' },
    { name: 'Amaan Shikalgar', image: 'assets/teams/Amaan_Shikalgar.jpg' },
    { name: 'Disha Gole', image: 'assets/teams/Disha_Gole.jpg' },
    { name: 'Jyotiraditya Pise', image: 'assets/teams/Jyotiraditya_Pise.jpg' },
    { name: 'Lavanya Moolya', image: 'assets/teams/Lavanya_Moolya.jpg '}
  ];
}
