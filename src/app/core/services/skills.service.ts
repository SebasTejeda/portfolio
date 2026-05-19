import { Injectable, signal, computed } from '@angular/core';
import { Skill, SkillCategory, SkillGroup, SkillLevel } from '../models/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  // Signal privado writable
  private skillsSignal = signal<Skill[]>([]);
  
  // Signal público readonly
  readonly skills = this.skillsSignal.asReadonly();
  
  // Computed signal: agrupa skills por categoría
  readonly skillGroups = computed<SkillGroup[]>(() => {
    const skills = this.skillsSignal();
    
    return [
      {
        category: SkillCategory.FRONTEND,
        title: 'Frontend',
        skills: skills.filter(s => s.category === SkillCategory.FRONTEND)
      },
      {
        category: SkillCategory.BACKEND,
        title: 'Backend',
        skills: skills.filter(s => s.category === SkillCategory.BACKEND)
      },
      {
        category: SkillCategory.DATABASE,
        title: 'Bases de Datos',
        skills: skills.filter(s => s.category === SkillCategory.DATABASE)
      },
      {
        category: SkillCategory.TOOLS,
        title: 'Herramientas',
        skills: skills.filter(s => s.category === SkillCategory.TOOLS)
      }
    ].filter(group => group.skills.length > 0); // Solo grupos con skills
  });
  
  readonly totalSkills = computed(() => this.skillsSignal().length);
  
  constructor() {
    this.loadMockSkills();
  }
  
  /**
   * Carga skills mock
   */
private loadMockSkills(): void {
  const mockSkills: Skill[] = [
    // Frontend
    { name: 'Angular', category: SkillCategory.FRONTEND, level: SkillLevel.ADVANCED },
    { name: 'TypeScript', category: SkillCategory.FRONTEND, level: SkillLevel.INTERMEDIATE },
    { name: 'JavaScript', category: SkillCategory.FRONTEND, level: SkillLevel.INTERMEDIATE },
    { name: 'React', category: SkillCategory.FRONTEND, level: SkillLevel.BEGINNER },
    { name: 'HTML5', category: SkillCategory.FRONTEND, level: SkillLevel.EXPERT },
    { name: 'CSS3', category: SkillCategory.FRONTEND, level: SkillLevel.ADVANCED },
    { name: 'SCSS', category: SkillCategory.FRONTEND, level: SkillLevel.INTERMEDIATE },
    { name: 'Figma', category: SkillCategory.FRONTEND, level: SkillLevel.INTERMEDIATE },
    
    // Backend
    { name: 'Python', category: SkillCategory.BACKEND, level: SkillLevel.INTERMEDIATE },
    { name: 'FastAPI', category: SkillCategory.BACKEND, level: SkillLevel.INTERMEDIATE },
    { name: 'Spring Boot', category: SkillCategory.BACKEND, level: SkillLevel.INTERMEDIATE },
    { name: 'C#', category: SkillCategory.BACKEND, level: SkillLevel.INTERMEDIATE },
    { name: 'Pandas', category: SkillCategory.BACKEND, level: SkillLevel.INTERMEDIATE },
    { name: 'NumPy', category: SkillCategory.BACKEND, level: SkillLevel.INTERMEDIATE },
    { name: 'REST APIs', category: SkillCategory.BACKEND, level: SkillLevel.ADVANCED },
    
    // Databases
    { name: 'PostgreSQL', category: SkillCategory.DATABASE, level: SkillLevel.INTERMEDIATE },
    { name: 'MySQL', category: SkillCategory.DATABASE, level: SkillLevel.INTERMEDIATE },
    { name: 'SQL Server', category: SkillCategory.DATABASE, level: SkillLevel.INTERMEDIATE },
    { name: 'Firebase', category: SkillCategory.DATABASE, level: SkillLevel.INTERMEDIATE },
    { name: 'SQLite', category: SkillCategory.DATABASE, level: SkillLevel.BEGINNER },
    
    // Tools
    { name: 'Git', category: SkillCategory.TOOLS, level: SkillLevel.ADVANCED },
    { name: 'GitHub', category: SkillCategory.TOOLS, level: SkillLevel.ADVANCED },
    { name: 'VS Code', category: SkillCategory.TOOLS, level: SkillLevel.EXPERT },
    { name: 'Postman', category: SkillCategory.TOOLS, level: SkillLevel.ADVANCED },
    { name: 'Power BI', category: SkillCategory.TOOLS, level: SkillLevel.INTERMEDIATE },
    { name: 'IIS', category: SkillCategory.TOOLS, level: SkillLevel.BEGINNER }
  ];
  
  this.skillsSignal.set(mockSkills);
}
  
  /**
   * Obtiene skills por categoría
   */
  getSkillsByCategory(category: SkillCategory): Skill[] {
    return this.skillsSignal().filter(s => s.category === category);
  }
}
