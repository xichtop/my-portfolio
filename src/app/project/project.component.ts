import { Component, Input } from '@angular/core';
import { ProjectItem } from '../../models/project';

@Component({
  standalone: true,
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  @Input() projectItem: ProjectItem = {
    title: "Yolo Shop",
    href: "https://main--fascinating-bubblegum-37362e.netlify.app/home",
    imgHref: "././assets/images/projects/yolo.jpg",
    gitHref: "https://github.com/xichtop/mobile-web-ui",
    description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    technology: ["Angular", "NG-ZORRO", "ngx-translate"]
  }
}
