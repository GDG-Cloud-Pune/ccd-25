import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  schedule = [
    {
      startTime: '07:00 AM',
      endTime: '09:00 AM',
      title: 'Registration'
    },
    {
      startTime: '09:00 AM',
      endTime: '09:10 AM',
      title: 'Welcome Note'
    },
    {
      startTime: '09:10 AM',
      endTime: '09:30 AM',
      title: 'Unlock the Power of Generative AI with Google Cloud GenAI: A Deep Dive into Gemini and Beyond',
      speaker: 'Vijaykumar Jangamashetti',
      speakerImage: 'https://cdn.create.vista.com/api/media/small/56347297/stock-photo-beautiful-young-black-woman-smiling',
      speakerUrl: 'https://google.com'
    },
    {
      startTime: '09:30 AM',
      endTime: '09:50 AM',
      title: 'Development with AI & Gen AI Exchange (Gemini, Code Assist, IDX)',
      speaker: 'Arun Teja Godavarthi',
      speakerImage: 'https://cdn.create.vista.com/api/media/small/56347297/stock-photo-beautiful-young-black-woman-smiling',
      speakerUrl: 'https://google.com'
    },
    // Add more schedule items here
  ];
}