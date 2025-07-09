import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedule = [
    { startTime: '07:00 AM', endTime: '09:00 AM', title: 'Registration' },

    { type: 'conference', startTime: '09:00 AM', endTime: '09:10 AM', title: 'Welcome Note' },
    { type: 'conference', startTime: '09:10 AM', endTime: '09:30 AM', title: 'Keynote Session', speaker: 'Vijaykumar Jangamashetti', speakerImage: 'https://cdn.create.vista.com/api/media/small/56347297/stock-photo-beautiful-young-black-woman-smiling', speakerUrl: 'https://google.com' },
    { type: 'conference', startTime: '09:30 AM', endTime: '09:50 AM', title: 'Development with AI', speaker: 'Arun Teja Godavarthi', speakerImage: 'https://cdn.create.vista.com/api/media/small/56347297/stock-photo-beautiful-young-black-woman-smiling', speakerUrl: 'https://google.com' },

    { type: 'workshop', startTime: '09:00 AM', endTime: '10:00 AM', title: 'Hands-on with Google Cloud' },
    { type: 'workshop', startTime: '10:00 AM', endTime: '11:00 AM', title: 'AI Workshop' },

    { startTime: '05:00 PM', endTime: '06:00 PM', title: 'Closing Ceremony' }
  ];

  orderedSchedule: any[] = [];

  selectedType = 'conference'; // Default tab
  availableTypes: string[] = [];

  ngOnInit(): void {
    const types = this.schedule
      .filter(event => event.type)
      .map(event => event.type);

    this.availableTypes = Array.from(new Set(types));

    // Pre-process the schedule to keep order
    this.orderedSchedule = [];
    let tabsInserted = false;

    this.schedule.forEach(event => {
      if (!tabsInserted && event.type) {
        this.orderedSchedule.push({ isTabs: true });
        tabsInserted = true;
      }
      this.orderedSchedule.push(event);
    });
  }

  selectSchedule(type: string) {
    this.selectedType = type;
  }
}