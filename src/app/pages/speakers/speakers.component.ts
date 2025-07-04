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
      title: 'Google Developer Expert - Google Cloud , Senior Cloud Engineer@Searce Inc , Cloud-Native & Multi-Cloud Advisor , Organiser@GDG Cloud Mumbai & ElasticUG , Founder@Guys In The Cloud , Tech Speaker , Content Creator , A Cloud Potato',
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
    },
    {
      name: 'Siddhant Agarwal',
      title: 'Developer Relations Lead APAC - Neo4j, GDE- GenAI, Ex-Google, Open, Beahead, IBM , ACM DSP , Google for Startups Accelerator Mentor',
      image: '/assets/speakers/Siddhant_Agarwal.png',
      location: 'Bengaluru, Karnataka, India',
      about: 'Sid Agarwal, currently leading Developer Communities for APAC at Neo4j. Formerly, He pioneered India first fintech community as the Developer Relations Lead at Open Financial Technologies. Prior to that, he spearheaded community efforts as a Program Manager with Google Developer Relations team in India, overseeing programs like Developer Student Clubs, TensorFlow User Groups, Google Developer Groups, and Google Developer Experts. In 2019, he collaborated with the Ministry of Electronics & Information Technology, Government of India, to launch Build for Digital India, engaging 7,000+ students in solving India challenges.He is passionate about design thinking and enjoy mentoring startups to enhance their UX and designs. Recognized as one of ACM Distinguished Speakers, his career of roughly a decade is dedicated to building, scaling, and growing communities in India, launching ed-tech initiatives, fostering design innovation, and contributing to the startup ecosystem.',
      socials: {
        twitter: '',
        linkedin: 'https://linkedin.com/in/sidagarwal04',
        github: 'https://medium.com/@sidagarwal04',
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