import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../models/experience';

@Component({
  standalone: true,
  selector: 'app-experience',
  templateUrl: './experience.component.html'
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
