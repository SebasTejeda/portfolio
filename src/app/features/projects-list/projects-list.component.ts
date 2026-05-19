import { Component, inject } from '@angular/core';
import { ProjectsService } from '@core/services/projects.service';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  // Inyección del servicio
  private projectsService = inject(ProjectsService);
  
  // Acceso directo a los signals del servicio
  projects = this.projectsService.projects;
  featuredProjects = this.projectsService.featuredProjects;
  projectCount = this.projectsService.projectCount;
  
  /**
   * Maneja el click en "Ver Demo"
   */
  onViewDemo(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  
  /**
   * Maneja el click en "Ver GitHub"
   */
  onViewGithub(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
