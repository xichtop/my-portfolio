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
      time: "May 2024 - Current",
      position: "Frontend Developer",
      company: "Blogic Systems",
      companyHref: "https://www.blogicsystems.com/",
      description: "Working with micro-frontend in Angular by using nx, developed ui base on angular material and daisy ui, ...",
      technology: ["Angular", "TailwindCss", "Typescript", "Nx"]
    },
    {
      time: "Jan 2022 - May 2024",
      position: "Frontend Developer",
      company: "DXC Technology",
      companyHref: "https://dxc.com/us/en",
      description: "Developed and styled interactive web app portals in insurance sector such as selling Intermediary, Customer Portal, Underwriting Portal, Lead Management, ...",
      technology: ["Angular", "SCSS", "Typescript", "API level 3"]
    }
  ];
  listProjects: ProjectItem[] = [
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
      title: "Yolo Shop API",
      href: "https://documenter.getpostman.com/view/13212963/2s9Xxzss9a",
      imgHref: "././assets/images/projects/yolo-api.jpg",
      gitHref: "https://github.com/xichtop/mobile-web-be",
      description: "A resful API includes CRUD, Authorize, Limited, ...",
      technology: ["Nodejs", "Expressjs", "Mongodb", "Restful API"]
    },
    {
      title: "League Of Legends Clone",
      href: "https://xtleagueoflegends.netlify.app/home",
      imgHref: "././assets/images/projects/lol.jpg",
      gitHref: "https://github.com/xichtop/leagueoflegends",
      description: "A website to introduce League of Legends game.",
      technology: ["Angular", "SCSS", "ngx-translate"]
    },
    // {
    //   title: "Yolo Shop React Version",
    //   href: "https://github.com/xichtop/yoloshop",
    //   imgHref: "././assets/images/projects/yolo-react.jpg",
    //   gitHref: "https://github.com/xichtop/yoloshop",
    //   description: "A website for selling technology merchandises.",
    //   technology: ["React", "SCSS", "Redux", "Firebase"]
    // }
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
        this.currentText = "I am a Software Engineer 👨‍💻";
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
