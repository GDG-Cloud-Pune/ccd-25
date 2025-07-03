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
{ name: 'Anuja Mukherjee', image: 'assets/teams/Anuja_Mukherjee.png' },
{ name: 'Chinmay', image: 'assets/teams/Chinmay.png' },
{ name: 'Disha Gole', image: 'assets/teams/Disha_Gole.jpg' },
{ name: 'Gitesh Mahadik', image: 'assets/teams/Gitesh_Mahadik.png' },
{ name: 'Ishan Deshpande', image: 'assets/teams/Ishan_Deshpande.png' },
{ name: 'Jyotiraditya Pise', image: 'assets/teams/Jyotiraditya_Pise.jpg' },
{ name: 'Lavanya Moolya', image: 'assets/teams/Lavanya_Moolya.jpg '},
{ name: 'Mayur Patil', image: 'assets/teams/mayur_patil.png' },
{ name: 'Mrunal Thakare', image: 'assets/teams/Mrunal_Thakare.png' },
{ name: 'Omkar Davare', image: 'assets/teams/Omkar_Davare.png' },
{ name: 'Randrita Sarkar', image: 'assets/teams/Randrita_Sarkar.png' },
{ name: 'Ranjeet Wadkar', image: 'assets/teams/Ranjeet_Wadkar.png' },
{ name: 'Rhiya Buranpur', image: 'assets/teams/Rhiya_Buranpur.png' },
{ name: 'Rishi Gandhi', image: 'assets/teams/Rishi_Gandhi.png' },
{ name: 'Ritesh Hon', image: 'assets/teams/Ritesh_Hon.png' },
{ name: 'Rohan Borse', image: 'assets/teams/Rohan_Borse.png' },
{ name: 'Sanika Kotgire', image: 'assets/teams/Sanika_kotgire.png' },
{ name: 'Sarah Khambatta', image: 'assets/teams/Sarah_Khambatta.png' },
{ name: 'Saurabh Renge', image: 'assets/teams/Saurabh_Renge.png' },
{ name: 'Shivam Awasare', image: 'assets/teams/Shivam_Awasare.png' },
{ name: 'Siddhi Soni', image: 'assets/teams/Siddhi_Soni.PNG' },
{ name: 'Snehal Yelwande', image: 'assets/teams/Snehal_Yelwande.png' },
{ name: 'Soham Dhande', image: 'assets/teams/Soham_Dhande.png' },
{ name: 'Soham Mahajan', image: 'assets/teams/Soham_Mahajan.PNG' },
{ name: 'Soham Shelke', image: 'assets/teams/Soham_Shelke.png' },
{ name: 'Swarnim Shamgaonkar', image: 'assets/teams/Swarnim_Shamgaonkar.png' },
{ name: 'Swaraj Pawar', image: 'assets/teams/SWARAJ_PAWAR.png' },
{ name: 'Tanmay Ashturkar', image: 'assets/teams/Tanmay_Ashturkar.png' },
{ name: 'Vaishnavi Joshi', image: 'assets/teams/Vaishnavi_Joshi.png' },
{ name: 'Vaishnavi Pawar', image: 'assets/teams/Vaishnavi_Pawar.png' },
{ name: 'Vatsal Jain', image: 'assets/teams/Vatsal_Jain.jpg' },
{ name: 'Vinayak_Govindalwar', image: 'assets/teams/Vinayak_Govindalwa.png' },
{ name: 'Vihaa Terkar', image: 'assets/teams/Vihaa_Terkar.png' },
{ name: 'Yash Bade', image: 'assets/teams/Yash_Bade.png' },
{ name: 'Yash Gwalvanshi', image: 'assets/teams/Yash_Gwalvanshi.png' },
{ name: 'Yash Khope', image: 'assets/teams/Yash_Khope.png' },
{ name: 'Yash Londhe', image: 'assets/teams/Yash_Londhe.png' }

];
}
