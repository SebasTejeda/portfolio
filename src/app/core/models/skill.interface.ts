export interface Skill {
  name: string;
  icon?: string;
  level?: SkillLevel;
  category: SkillCategory;
}

export enum SkillCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  TOOLS = 'tools'
}

export enum SkillLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert'
}

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  skills: Skill[];
}
