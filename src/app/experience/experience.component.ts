import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../models/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() experienceItem: ExperienceItem = {
    time: "",
    position: "",
    company: "",
    companyHref: "",
    description: "",
    technology: []                
  }
}
