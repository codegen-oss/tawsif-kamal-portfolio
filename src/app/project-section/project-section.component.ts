import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { WorkExperience } from '../interfaces/work-experience';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.css',
})
export class ProjectSectionComponent {
  workExperiences: WorkExperience[] = [
    {
      role: 'IoT Developer',
      dateWorked: 'Jan 2024 - Apr 2024',
      company: 'IBM Consulting',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet tempora veritatis ad a adipisci error eius explicabo neque. Possimus vel sunt, facilis alias eaque at eveniet! Tempore, soluta ratione?',
      skills: ['Docker', 'Google Cloud', 'Google Dialogflow'],
    },
    {
      role: 'Frontend Developer',
      dateWorked: 'May 2023 - Aug 2023',
      company: 'LogicomUSA',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet tempora veritatis ad a adipisci error eius explicabo neque. Possimus vel sunt, facilis alias eaque at eveniet! Tempore, soluta ratione?',
      skills: ['Vue.js', 'Node.js', 'CSS', 'AWS Cloud'],
    },
    {
      role: 'Software Engineering Intern',
      dateWorked: 'May 2022 - Aug 2022',
      company: 'NCR Corporation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet tempora veri',
      skills: ['React.js', 'Node.js', 'Nest.js', 'RestAPI', 'GraphQL'],
    },
  ];
}
