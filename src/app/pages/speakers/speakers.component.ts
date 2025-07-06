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
    "name": "Abhishek Sharma",
    "title": "Google Developer Expert - Google Cloud , Senior Cloud Engineer@Searce Inc , Cloud-Native & Multi-Cloud Advisor , Organiser@GDG Cloud Mumbai & ElasticUG , Founder@Guys In The Cloud , Tech Speaker , Content Creator , A Cloud Potato",
    "image": "/assets/speakers/Abhishek_Sharma.JPG",
    "location": "Mumbai, Maharashtra, India",
    "about": "Abhishek has a proven track record of driving digital transformation. He specializes in architecting and implementing scalable cloud solutions on Google Cloud, leveraging his expertise in DevOps, observability, and cloud security tools such as Docker, Kubernetes, Terraform, ArgoCD, Prometheus, Mimir, Tempo, Grafana, Checkov, Kyverno, Prisma Cloud, and Gitlab CI. Abhishek optimizes development pipelines, strengthens SRE & platform engineering practices, and ensures robust security standards to empower organizations to achieve their goals. His innovative solutions and thought leadership have earned him recognition as a leading expert in the cloud community.",
    "socials": {
      "twitter": "https://x.com/acloudpotato",
      "linkedin": "https://www.linkedin.com/in/acloudpotato/",
      "github": "",
      "instagram": "https://www.instagram.com/shy_honour/?__d=1"
    }
  },
  {
    "name": "Anubhav Singh",
    "title": "AI Eng @ W&B, Google Dev Expert - GCP & ML, TEDx Speaker, Author",
    "image": "/assets/speakers/AnubhavSingh.png",
    "location": "Noida , Uttar Pradesh, India",
    "about": "Anubhav has over a decade of experience dealing with large-scale software complexities. Before embarking on his own AI startup venture, he has been a contributor to several open-source projects. He has authored two books on Deep Learning on Web and Mobile apps. He is also a Google VPMS scholar.",
    "socials": {
      "twitter": "",
      "linkedin": "https://www.linkedin.com/in/xprilion/",
      "github": "https://www.linkedin.com/in/xprilion/",
      "instagram": ""
    }
  },
  {
    "name": "Ayush Thakur",
    "title": "Manager , AI Engineering @Weights and Biases",
    "image": "/assets/speakers/AyushThakur.jpg",
    "location": "Noida , Uttar Pradesh, India",
    "about": "He is a Machine Learning Engineer at Weights and Biases. He seasoned (trying to be) Kaggler (Notebooks master) and robotics guy (it is been sometime since I left doing it). He has a background in Electronics and Communications and hence have a deep rooted love for Maths and Physics. He has 6+ years of experience practicing Machine Learning. He has seen rise and fall of frameworks but fundamentals stick.",
    "socials": {
      "twitter": "",
      "linkedin": "https://www.linkedin.com/in/ayush-thakur-731914149/",
      "github": "https://x.com/ayushthakur0",
      "instagram": ""
    }
  },
  {
    "name": "Bhavesh Bhatt",
    "title": "AVP Generative-AI at IDFC FIRST Bank, GDE in ML, GitHub Star, 40 Under 40 Data Scientist",
    "image": "/assets/speakers/Bhavesh_Bhatt.jpeg",
    "location": "Mumbai, Maharashtra, India",
    "about": "Bhavesh is an AVP Generative-AI at IDFC FIRST Bank & he enjoys solving problems. In his Data Science journey so far, he has had the honour of becoming a Google Developer Expert (GDE) in Machine Learning, GitHub Star & also being recognized as a 40 Under 40 Data Scientist by Analytics India Magazine. He recently received the Best AI/ML product of the year at Cypher 2022.",
    "socials": {
      "twitter": "",
      "linkedin": "https://www.linkedin.com/in/bhattbhavesh91",
      "github": "https://bhattbhavesh91.github.io/",
      "instagram": ""
    }
  },
  {
    "name": "Biswanath Giri",
    "title": "Cloud & AI  Principal Architect  at LTIMindtree ",
    "image": "/assets/speakers/Biswanath_Giri.jpeg",
    "location": "Noida , Uttar Pradesh, India",
    "about": "He is a Google Cloud  & AI Principal Architect with over 6 years of experience as a Google Cloud Solution Architect and a total of 16 years in the IT industry. As a self-motivated and results-driven professional, he specialize in designing and implementing cutting-edge cloud solutions, with a focus on Cloud Networking, Security, and migration strategies from on-premises to the cloud. His expertise spans across IT infrastructure, managed services, and multi-cloud environments, leveraging my certifications in GCP, AWS, Azure, and Terraform Associate.  In addition to his technical roles, He is passionate about knowledge sharing and community building. I have trained over 10,000 students and professionals in cloud technologies and AI, empowering them to excel in their careers. He actively contribute to the Google Cloud community by creating technical content, producing video tutorials, and collaborating with peers to foster growth and innovation in the cloud ecosystem.  His mission is to drive digital transformation through scalable, secure, and efficient cloud solutions while inspiring and educating the next generation of cloud professionals.",
    "socials": {
      "twitter": "",
      "linkedin": "https://www.linkedin.com/in/biswanathgiri",
      "github": "https://www.linkedin.com/in/biswanathgiri",
      "instagram": ""
    }
  },
  {
    "name": "Hrittik Roy",
    "title": "Platform Advocate at Loft Labs and a CNCF Ambassador",
    "image": "/assets/speakers/Hritik.JPG",
    "location": "Noida , Uttar Pradesh, India",
    "about": "Hrittik Roy is a Platform Advocate at Loft Labs and a CNCF Ambassador, with expertise in cloud native technologies and open source communities. He has contributed extensively to developer advocacy, technical writing, and community engagement. Hrittik has been a featured speaker at events such as Kubernetes Community Days, Open Source Summits, and more, and has served as a Program Committee member for several KubeCons and CloudNativeCons.",
    "socials": {
      "twitter": "",
      "linkedin": "https://linkedin.com/in/hrittikhere",
      "github": "https://linkedin.com/in/hrittikhere",
      "instagram": ""
    }
  },
  {
    "name": "Pranoti Nandurkar",
    "title": "Solution Architect at TCS ,  WTM Ambassador",
    "image": "/assets/speakers/Pranoti_Nandurkar .jpeg",
    "location": "Noida , Uttar Pradesh, India",
    "about": "She Understands the power of Google Generative AI models.* How Vertex AI enables easy access and fine-tuning of these models. * Practical applications of Generative AI (text, image, code generation).* Building custom Generative AI agents with Vertex AI Agent Builder.",
    "socials": {
      "twitter": "",
      "linkedin": "https://www.linkedin.com/in/pranoti-nandurkar-170021b",
      "github": "https://www.linkedin.com/in/pranoti-nandurkar-170021b",
      "instagram": ""
    }
  },
  {
    "name": "Pushkar Khadilkar",
    "title": "Software Engineer,Google",
    "image": "/assets/speakers/Prasad.jpg",
    "location": "Pune, Maharashtra, India",
    "about": "Pushkar Khadilkar is a software engineer working on AlloyDB Database at Google Cloud. His present area of focus involves the intersection of AI and databases. He has 10+ years of experience working with database internals. Some of the topics he has worked on in the past are database storage formats, in-memory processing, paging, and k8s operators for databases.",
    "socials": {
      "twitter": "",
      "linkedin": "https://in.linkedin.com/in/pushkarkhadilkar",
      "github": "https://in.linkedin.com/in/pushkarkhadilkar",
      "instagram": ""
    }
  },
  {
    "name": "Rajani Ekunde",
    "title": "Senior SRE @okta , Docker Captain , WTM Ambassador",
    "image": "/assets/speakers/Rajani.jpg",
    "location": "Noida , Uttar Pradesh, India",
    "about": "Rajani is a skilled DevOps Engineer with over 3 years of experience, passionate about cloud technologies and DevOps practices. As a recognized Docker Captain and Women Techmakers (WTM) Ambassador, she actively contributes to the tech community through content creation and public speaking. Rajani shares her expertise on platforms like Medium and LinkedIn, aiming to educate and empower others in the DevOps space.  Her participation in major cloud and DevOps conferences highlights her commitment to continuous learning. As a public speaker, she engages with the global tech community on trending topics. Rajani finds fulfillment in mentoring aspiring engineers, inspiring and uplifting fellow professionals and students through her articles, talks, and mentorship.",
    "socials": {
      "twitter": "",
      "linkedin": "https://www.linkedin.com/in/rajani103/",
      "github": "https://www.linkedin.com/in/rajani103/",
      "instagram": ""
    }
  },
  {
    "name": "Siddhant Agarwal",
    "title": "Developer Relations Lead APAC - Neo4j, GDE- GenAI, Ex-Google, Open, Beahead, IBM , ACM DSP , Google for Startups Accelerator Mentor",
    "image": "/assets/speakers/Siddhant_Agarwal.png",
    "location": "Bengaluru, Karnataka, India",
    "about": "Sid Agarwal, currently leading Developer Communities for APAC at Neo4j. Formerly, He pioneered India first fintech community as the Developer Relations Lead at Open Financial Technologies. Prior to that, he spearheaded community efforts as a Program Manager with Google Developer Relations team in India, overseeing programs like Developer Student Clubs, TensorFlow User Groups, Google Developer Groups, and Google Developer Experts. In 2019, he collaborated with the Ministry of Electronics & Information Technology, Government of India, to launch Build for Digital India, engaging 7,000+ students in solving India challenges.He is passionate about design thinking and enjoy mentoring startups to enhance their UX and designs. Recognized as one of ACM Distinguished Speakers, his career of roughly a decade is dedicated to building, scaling, and growing communities in India, launching ed-tech initiatives, fostering design innovation, and contributing to the startup ecosystem.",
    "socials": {
      "twitter": "",
      "linkedin": "https://linkedin.com/in/sidagarwal04",
      "github": "https://medium.com/@sidagarwal04",
      "instagram": ""
    }
  },
  {
    "name": "Shivay Lamba",
    "title": "Developer Experience Engineer At Couchbase",
    "image": "/assets/speakers/ShivayLamba.jpeg",
    "location": "Noida , Uttar Pradesh, India",
    "about": "Shivay Lamba is a software developer specializing in DevOps, Machine Learning and Full Stack Development. He is an Open Source Enthusiast and has been part of various programs like Google Code In and Google Summer of Code as a Mentor and has also been a MLH Fellow. He is actively involved in community work as well. He is a TensorflowJS SIG member, Mentor in OpenMined and CNCF Service Mesh Community, SODA Foundation and has given talks at various conferences like Github Satellite, Voice Global, Fossasia Tech Summit, TensorflowJS Show & Tell.",
    "socials": {
      "twitter": "",
      "linkedin": "https://www.linkedin.com/in/shivaylamba/",
      "github": "https://www.linkedin.com/in/shivaylamba/",
      "instagram": ""
    }
  },
  {
    "name": "Vijaykumar Jangamashetti",
    "title": "Senior Cloud Consulting Architect and a Program Manager at Google",
    "image": "/assets/speakers/Vijaykumar_Jangamashetti.jpg",
    "location": "Pune, Maharashtra, India",
    "about": "Vijaykumar Jangamashetti (VJ), is a seasoned professional with 18 years of experience in Data Analytics, Cloud, and AI. Currently a Trusted Advisor, Senior Cloud Consulting Architect, and Program Manager at Google, he specializes in guiding customers through their digital transformation journeys. Vijay expertise lies in helping customers design, architect, migrate, and modernize their infrastructure, data warehouses, and applications on Google Cloud, enabling them to fully harness the power of cloud computing. Furthermore, Vijay offers valuable insights into AI and Generative AI (GenAI), empowering customers to explore new opportunities and achieve success with their AI endeavours. Vijay is also a Startups Mentor in Google For Startups Accelerator (GFSA) programmme and holds Google Cloud 13X certifications.",
    "socials": {
      "twitter": "",
      "linkedin": "https://www.linkedin.com/in/vijaykumar-jangamashetti/",
      "github": "https://www.linkedin.com/in/vijaykumar-jangamashetti/",
      "instagram": ""
    }
  },
  {
    "name": "Vrijraj Singh",
    "title": "GDE For Firebase & ML",
    "image": "/assets/speakers/vrijraj.PNG",
    "location": "Noida , Uttar Pradesh, India",
    "about": "Vrijraj Singh is a passionate technologist and a Google Developers Expert in Firebase and ML, he actively contributes to the tech ecosystem through the TechFerment. With a track record of delivering over 400+ talks and workshops, Vrijraj has shared his knowledge across numerous communities and platforms.His core expertise spans Web Development, Firebase, Google Cloud Platform, and UI/UX Design. Always eager to explore emerging technologies, he focuses on building impactful and innovative solutions. Beyond his technical work, Vrijraj is deeply committed to mentoring and community building. In his downtime, he enjoys discovering new cuisines and unwinding with YouTube videos.",
    "socials": {
      "twitter": "",
      "linkedin": "https://www.linkedin.com/in/vrijrajsingh/",
      "github": "https://www.Vrijraj.xyz",
      "instagram": ""
    }
  }

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