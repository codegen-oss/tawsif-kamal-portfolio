import { WorkExperience } from './../interfaces/work-experience';
import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() workExperience: WorkExperience;
}
