import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { TagComponent } from './tag/tag.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProjectSectionComponent, TagComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';
}
