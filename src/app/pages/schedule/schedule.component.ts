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
    { startTime: '07:30 AM', endTime: '09:00 AM', title: 'Registration and Breakfast' },
{ startTime: '09:00 AM', endTime: '09:15 AM', title: 'Welcome Note' },
    {
      type: "conference",
      startTime: "09:15 AM",
      endTime: "09:50 AM",
      title: "AI on the Fly: Implementing safe and dynamic AI with Remote Config",
      speakers: [
        {
          name: "Siddhant Jain",
          image: "/assets/speakers/Siddhant_photo.jpg",
          url: "https://www.linkedin.com/in/siddhant-jain-5a15a183/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        }
      ]
    },
    {
      type: "conference",
      startTime: "09:50 AM",
      endTime: "10:25 AM",
      title: "AlloyDB AI: A Deep Dive into Unlocking Intelligent Apps with Gemini",
      speakers: [
        {
          name: "Vijaykumar Jangamashetti",
          image: "/assets/speakers/Vijaykumar_Jangamashetti.jpg",
          url: "https://www.linkedin.com/in/vijaykumar-jangamashetti/"
        },
        {
          name: "Pushkar Khadilkar",
          image: "/assets/speakers/Prasad.jpg",
          url: "https://in.linkedin.com/in/pushkarkhadilkar"
        }
      ]
    },
    {
      type: "conference",
      startTime: "10:25 AM",
      endTime: "11:00 AM",
      title: "Accelerating Enterprise Development: A Journey of building an Intelligent Self-Service Platform on Google Cloud with Google AI & Cloud Native",
      speakers: [
        {
          name: "Abhishek Sharma",
          image: "/assets/speakers/Abhishek_Sharma.JPG",
          url: "https://www.linkedin.com/in/acloudpotato/"
        }
      ]
    },
    {
      type: "conference",
      startTime: "11:00 AM",
      endTime: "11:15 AM",
      title: "Fun Activity",
      speakers: []
    },
    {
      type: "conference",
      startTime: "11:15 AM",
      endTime: "11:50 AM",
      title: "Mesh Matters: Rethinking AI System Design with Event-Driven Agent Communication",
      speakers: [
        {
          name: "Venkatesan Giri",
          image: "/assets/speakers/Giri_Venkatesan.jpeg",
          url: "https://www.linkedin.com/in/girivenkatesan/"
        }
      ]
    },
    {
      type: "conference",
      startTime: "11:50 AM",
      endTime: "12:25 PM",
      title: "AI Insights with Weave by W&B",
      speakers: [
        {
          name: "Anubhav Singh",
          image: "/assets/speakers/AnubhavSingh.png",
          url: "https://www.linkedin.com/in/xprilion/"
        },
        {
          name: "Ayush Thakur",
          image: "/assets/speakers/AyushThakur.jpg",
          url: "https://www.linkedin.com/in/ayush-thakur-731914149/"
        }
      ]
    },
    {
      type: "conference",
      startTime: "12:25 PM",
      endTime: "01:00 PM",
      title: "Supercharging Web Apps with Gemini Function Calling",
      speakers: [
        {
          name: "Vrijraj Singh",
          image: "/assets/speakers/vrijraj.PNG",
          url: "https://www.linkedin.com/in/vrijrajsingh/"
        }
      ]
    },
    {
      type: "conference",
      startTime: "01:00 PM",
      endTime: "02:00 PM",
      title: "Lunch Break",
      speakers: []
    },
    {
      type: "conference",
      startTime: "02:00 PM",
      endTime: "02:35 PM",
      title: "When GenAI meets Mythology",
      speakers: [
        {
          name: "Siddhant Agarwal",
          image: "/assets/speakers/Siddhant_Agarwal.png",
          url: "https://linkedin.com/in/sidagarwal04"
        }
      ]
    },
    {
      type: "conference",
      startTime: "02:35 PM",
      endTime: "03:10 PM",
      title: "Leveraging Generative AI on Vertex AI: Building Intelligent Applications",
      speakers: [
        {
          name: "Pranoti Nandurkar",
          image: "/assets/speakers/Pranoti_Nandurkar.jpeg",
          url: "https://www.linkedin.com/in/pranoti-nandurkar-170021b"
        }
      ]
    },
    {
      type: "conference",
      startTime: "03:10 PM",
      endTime: "03:25 PM",
      title: "Fun Activity",
      speakers: []
    },
    {
      type: "conference",
      startTime: "03:25 PM",
      endTime: "04:00 PM",
      title: "Smarter Workflows Using GCP Serverless and Natural Language AI",
      speakers: [
        {
          name: "Rajani Ekunde",
          image: "/assets/speakers/Rajani.jpg",
          url: "https://www.linkedin.com/in/rajani103/"
        }
      ]
    },
  ,
    

    
  {
    type: 'workshop',
    startTime: '09:50 AM',
    endTime: '10:50 AM',
    title: 'Building AI Apps in Minutes with Firebase Studio and Genkit',
    speakers: [
      {
        name: 'Mayur Vaid',
        image: '/assets/speakers/Mayur_Vaid.jpeg',
        url: 'https://www.linkedin.com/in/mayur-vaid-5422b8171/'
      }
    ]
  },
  {
    type: 'workshop',
    startTime: '10:50 AM',
    endTime: '11:50 AM',
    title: 'Build a Movie Recommendation Chatbot using Neo4j and Vertex AI',
    speakers: [
      {
        name: 'Bhavesh Bhatt',
        image: '/assets/speakers/Bhavesh_Bhatt.jpeg',
        url: 'https://www.linkedin.com/in/bhattbhavesh91'
      }
    ]
  },
  {
    type: 'workshop',
    startTime: '11:50 AM',
    endTime: '12:50 PM',
    title: 'Hands-on with vCluster and GPU Workloads: Build Your Own Multi-Tenant AI Platform on GKE',
    speakers: [
      {
        name: 'Hrittik Roy',
        image: '/assets/speakers/Hritik.JPG',
        url: 'https://linkedin.com/in/hrittikhere'
      }
    ]
  },
  {
    type: 'workshop',
    startTime: '12:50 PM',
    endTime: '01:50 PM',
    title: 'Workshop Lunch Break',
    speakers: []
  },
  {
    type: 'workshop',
    startTime: '01:50 PM',
    endTime: '02:50 PM',
    title: 'Hands-On with Agent Mesh: Powering AI Coordination with Events',
    speakers: [
      {
        name: 'Venkatesan Giri',
        image: '/assets/speakers/Giri_Venkatesan.jpeg',
        url: 'https://www.linkedin.com/in/girivenkatesan/'
      }
    ]
  },
  {
    type: 'workshop',
    startTime: '02:50 PM',
    endTime: '03:50 PM',
    title: 'Build Semantic AI Agents with Vertex AI Agent Engine and Couchbase',
    speakers: [
      {
        name: 'Shivay Lamba',
        image: '/assets/speakers/ShivayLamba.jpeg',
        url: 'https://www.linkedin.com/in/shivaylamba/'
      }
    ]
  },


   {
      startTime: "04:00 PM",
      endTime: "04:40 PM",
      title: "Cloud AI Playbook: Trends and Tactics",
      speakers: [
        {
          name: "Toshal Khawale",
          image: "/assets/speakers/Toshal_Khawale.png",
          url: "https://www.linkedin.com/in/toshal-khawale/"
        },
        {
          name: "Siddhant Jain",
          image: "/assets/speakers/Siddhant_photo.jpg",
          url: "https://www.linkedin.com/in/siddhant-jain-5a15a183/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
        {
          name: "Vijaykumar Jangamashetti",
          image: "/assets/speakers/Vijaykumar_Jangamashetti.jpg",
          url: "https://www.linkedin.com/in/vijaykumar-jangamashetti/"
        },
        {
          name: "Mayur Vaid",
          image: "/assets/speakers/Mayur_Vaid.jpeg",
          url: "https://www.linkedin.com/in/mayur-vaid-5422b8171/"
        },
        {
          name: "Antrixsh Gupta",
          image: "/assets/speakers/antrixsh_gupta.JPG",
          url: "https://www.linkedin.com/in/antrixshgupta/"
        }
      ]
    },
    { startTime: '04:40 PM', endTime: '05:10 PM', title: 'End Note and Goodies Distribution' }
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
