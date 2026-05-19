import { Component, input, output } from '@angular/core';
import { Project } from '@core/models/project.interface';
import { SkillBadgeComponent } from '../skill-badge/skill-badge.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [SkillBadgeComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  // Signal inputs
  project = input.required<Project>();
  
  // Signal outputs
  viewDemo = output<string>();
  viewGithub = output<string>();
  
  onViewDemo(): void {
    const demoUrl = this.project().demoUrl;
    if (demoUrl) {
      this.viewDemo.emit(demoUrl);
    }
  }
  
  onViewGithub(): void {
    const githubUrl = this.project().githubUrl;
    if (githubUrl) {
      this.viewGithub.emit(githubUrl);
    }
  }
}
