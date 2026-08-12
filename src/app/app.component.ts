import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExperienceItem } from '../models/experience';
import { ProjectItem } from '../models/project';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ExperienceComponent, ProjectComponent]
})
export class AppComponent implements OnInit {

  @ViewChild('about') aboutElement: ElementRef = {} as ElementRef;
  @ViewChild('experiences') experiencesElement: ElementRef = {} as ElementRef;
  @ViewChild('projects') projectsElement: ElementRef = {} as ElementRef;
  @ViewChild('edu') eduElement: ElementRef = {} as ElementRef;

  currentStyle = 'background: radial-gradient(600px at 158px 748px, rgba(29, 78, 216, 0.15), transparent 80%);';
  currentText = "I am Le Xich Top 😊";
  currentStatusText = true;
  currentSection = 'about';
  listExperiences: ExperienceItem[] = [
    {
      time: "March 2026 - Current",
      position: "Senior Frontend Developer",
      company: "FPT Software",
      companyHref: "https://fptsoftware.com/",
      description: "Developing enterprise web applications for the manufacturing domain, focusing on scalable and maintainable frontend solutions. Building modern user interfaces with Angular and PrimeNG, integrating APIs, and contributing to CI/CD workflows and cloud-based deployments.",
      technology: ["Angular", "Angular Material", "TailwindCss", "Typescript", "PrimeNG", "AWS", "Github Actions"]
    },
    {
      time: "May 2024 - March 2026",
      position: "Frontend Developer",
      company: "Blogic Systems",
      companyHref: "https://www.blogicsystems.com/",
      description: "Developed and maintained scalable web applications using a micro-frontend architecture with Angular and Nx. Built reusable UI components with Angular Material and DaisyUI, while contributing to containerized deployments and CI/CD pipelines across multiple development environments.",
      technology: ["Angular", "Angular Material", "TailwindCss", "Typescript", "Nx", "Docker", "Jenkins", "Ubuntu", "MacOS"]
    },
    {
      time: "Jan 2022 - May 2024",
      position: "Frontend Developer",
      company: "DXC Technology",
      companyHref: "https://dxc.com/us/en",
      description: "Developed enterprise web applications for the insurance domain, including Intermediary, Customer, and Underwriting Portals, as well as Lead Management systems. Focused on building responsive, reusable, and maintainable user interfaces while collaborating with cross-functional teams to deliver business-critical features.",
      technology: ["Angular", "Angular Material", "SCSS", "Typescript"]
    }
  ];
  listProjects: ProjectItem[] = [
    {
      title: "Sub Dealer Client",
      href: "https://khotot.vn",
      imgHref: "././assets/images/projects/sd-client.jpg",
      gitHref: "",
      description: "A client website to to sell cameras of DSS Sale Platform.",
      technology: ["NextJS", "TailwindCSS", "HeroUI", "Redux", "NextAuth", "Docker", "Jenkins"]
    },
    {
      title: "DSS Admin",
      href: "https://dss.khotot.vn",
      imgHref: "././assets/images/projects/dss-admin.jpg",
      gitHref: "",
      description: "A admin website to manage DSS Sale Platform.",
      technology: ["Angular", "TailwindCSS", "NgZorro", "Docker", "Jenkins"]
    },
    {
      title: "Master Dealer Admin",
      href: "https://md.khotot.vn",
      imgHref: "././assets/images/projects/md-admin.jpg",
      gitHref: "",
      description: "A admin website to manage Master Dealer of DSS Sale Platform.",
      technology: ["Angular", "TailwindCSS", "NgZorro", "Docker", "Jenkins"]
    },
    {
      title: "MUA BALO Website",
      href: "https://muabalo.com/",
      imgHref: "././assets/images/projects/mua-balo.png",
      gitHref: "",
      description: "A website for selling bags.",
      technology: ["NextJS", "TailwindCSS", "DaisyUI"]
    },
    {
      title: "Yolo Shop",
      href: "https://shopyolo.netlify.app",
      imgHref: "././assets/images/projects/yolo.jpg",
      gitHref: "https://github.com/xichtop/mobile-web-ui",
      description: "A website for selling technology merchandises.",
      technology: ["Angular", "SCSS", "NG-ZORRO", "ngx-translate"]
    },
    {
      title: "League Of Legends Clone",
      href: "https://xtleagueoflegends.netlify.app/home",
      imgHref: "././assets/images/projects/lol.jpg",
      gitHref: "https://github.com/xichtop/leagueoflegends",
      description: "A website to introduce League of Legends game.",
      technology: ["Angular", "SCSS", "ngx-translate"]
    }
  ]

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const aboutRec = this.aboutElement.nativeElement.getBoundingClientRect();
    const experiencesRec = this.experiencesElement.nativeElement.getBoundingClientRect();
    const projectsRec = this.projectsElement.nativeElement.getBoundingClientRect();
    const eduRec = this.eduElement.nativeElement.getBoundingClientRect();
    if (aboutRec.top >= 0) {
      this.currentSection = 'about';
    } else if (experiencesRec.top >= 0) {
      this.currentSection = 'experiences';
    } else if (projectsRec.top >= 0) {
      this.currentSection = 'projects';
    } else if (eduRec.top >= 0) {
      this.currentSection = 'edu';
    } else {
      this.currentSection = '';
    }
  }

  constructor(
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.currentStatusText) {
        this.currentText = "I am a Frontend Developer 👨‍💻";
      } else {
        this.currentText = "I am Le Xich Top 😊";
      }
      this.currentStatusText = !this.currentStatusText;
    }, 4000);
  }

  onMoveMouse(event: MouseEvent) {
    this.currentStyle = `background: radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%);`;
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      if (this.currentSection !== section) {
        this.currentSection = section;
      }
    }, 500);
  }

}
