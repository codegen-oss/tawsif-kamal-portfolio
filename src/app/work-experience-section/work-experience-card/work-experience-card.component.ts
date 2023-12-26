import { CommonModule } from '@angular/common';
import { WorkExperience } from '../../interfaces/work-experience';
import { Component, Input } from '@angular/core';
import { TagComponent } from '../../tag/tag.component';

@Component({
  selector: 'app-work-experience-card',
  standalone: true,
  imports: [TagComponent, CommonModule],
  templateUrl: './work-experience-card.component.html',
  styleUrl: './work-experience-card.component.css',
})
export class WorkExperienceCardComponent {
  @Input() workExperience: WorkExperience;
}
