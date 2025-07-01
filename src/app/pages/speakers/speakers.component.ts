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
      name: 'Abhishek Sharma',
      title: 'A Senior Cloud & DevOps Engineer, Google Developer Expert(GCP) & Google Cloud Champions Innovator(Hybrid/Multi-Cloud), Cloud Advisor & Mentor, Public Speaker & Content Creator',
      image: '/assets/speakers/Abhishek_Sharma.JPG',
      location: 'Mumbai, Maharashtra, India',
      about: 'Abhishek has a proven track record of driving digital transformation. He specializes in architecting and implementing scalable cloud solutions on Google Cloud, leveraging his expertise in DevOps, observability, and cloud security tools such as Docker, Kubernetes, Terraform, ArgoCD, Prometheus, Mimir, Tempo, Grafana, Checkov, Kyverno, Prisma Cloud, and Gitlab CI. Abhishek optimizes development pipelines, strengthens SRE & platform engineering practices, and ensures robust security standards to empower organizations to achieve their goals. His innovative solutions and thought leadership have earned him recognition as a leading expert in the cloud community.',
      socials: {
        twitter: 'https://x.com/acloudpotato',
        linkedin: 'https://www.linkedin.com/in/acloudpotato/',
        github: '',
        instagram: 'https://www.instagram.com/shy_honour/?__d=1'
      }
    },
    {
      name: 'Bhavesh Bhatt',
      title: 'AVP Generative-AI at IDFC FIRST Bank, GDE in ML, GitHub Star, 40 Under 40 Data Scientist',
      image: '/assets/speakers/Bhavesh_Bhatt.jpeg',
      location: 'Mumbai, Maharashtra, India',
      about: 'Bhavesh is an AVP Generative-AI at IDFC FIRST Bank & he enjoys solving problems. In his Data Science journey so far, he has had the honour of becoming a Google Developer Expert (GDE) in Machine Learning, GitHub Star & also being recognized as a 40 Under 40 Data Scientist by Analytics India Magazine. He recently received the Best AI/ML product of the year at Cypher 2022.',
      socials: {
        twitter: '',
        linkedin: 'https://www.linkedin.com/in/bhattbhavesh91',
        github: 'https://bhattbhavesh91.github.io/',
        instagram: ''
      }
    }//,
    // {
    //   name: 'Jane Smith',
    //   title: 'CTO, InnovateX',
    //   image: 'https://static.vecteezy.com/system/resources/thumbnails/036/755/376/small/ai-generated-portrait-of-beautiful-young-woman-with-clean-fresh-skin-spa-healthcare-photo.jpg',
    //   location: 'New York, USA',
    //   about: 'Jane leads cutting-edge product teams and specializes in cloud infrastructure. She is passionate about technology and inclusive leadership.',
    //   socials: {
    //     twitter: '',
    //     linkedin: 'https://linkedin.com/in/janesmith',
    //     github: 'https://github.com/janesmith',
    //     instagram: ''
    //   }
    // }
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