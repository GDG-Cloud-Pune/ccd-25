import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {
  speakers = [
    {
      name: 'John Doe',
      title: 'CEO, TechCorp',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXRsEwpFFX0OKKI2dQwdnS3hsLq_2Bogf2g&s',
      location: 'San Francisco, USA',
      about: 'John is a seasoned tech entrepreneur with over 15 years of experience. He has built multiple startups and enjoys mentoring young talent. His vision is to democratize technology and create impact-driven solutions.',
      socials: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        github: '',
        instagram: 'https://instagram.com/johndoe'
      }
    },
    {
      name: 'Jane Smith',
      title: 'CTO, InnovateX',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/052/754/088/small/attractive-blonde-german-model-in-a-black-jersey-against-a-white-background-stop-racism-stop-homophobia-free-photo.jpeg',
      location: 'New York, USA',
      about: 'Jane leads cutting-edge product teams and specializes in cloud infrastructure. She is passionate about technology and inclusive leadership.',
      socials: {
        twitter: '',
        linkedin: 'https://linkedin.com/in/janesmith',
        github: 'https://github.com/janesmith',
        instagram: ''
      }
    },
    {
      name: 'Jane Smith',
      title: 'CTO, InnovateX',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/036/755/376/small/ai-generated-portrait-of-beautiful-young-woman-with-clean-fresh-skin-spa-healthcare-photo.jpg',
      location: 'New York, USA',
      about: 'Jane leads cutting-edge product teams and specializes in cloud infrastructure. She is passionate about technology and inclusive leadership.',
      socials: {
        twitter: '',
        linkedin: 'https://linkedin.com/in/janesmith',
        github: 'https://github.com/janesmith',
        instagram: ''
      }
    }
    // You can add more speakers here...
  ];

  
    selectedSpeaker: any = null;
    isAboutExpanded: boolean = false;
    isAboutLong: boolean = false;
  
    openSpeakerDetails(speaker: any) {
      this.selectedSpeaker = speaker;
      this.isAboutExpanded = false;
  
      // Simple length check to estimate 3 lines (adjust this as needed)
      this.isAboutLong = speaker.about.length > 200; // Approx 3 lines
    }
  
    closePopup() {
      this.selectedSpeaker = null;
    }
  
    toggleAbout() {
      this.isAboutExpanded = !this.isAboutExpanded;
    }
  
}