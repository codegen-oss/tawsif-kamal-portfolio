import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../../tag/tag.component';
import { Project } from '../../interfaces/project';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TagComponent, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project: Project;
  @Input() hoveredProject: string | null;
}
