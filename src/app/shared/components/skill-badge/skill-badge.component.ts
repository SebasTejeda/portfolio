import { Component, input } from '@angular/core';
import { SkillLevel } from '@core/models/skill.interface';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  template: `
    <span 
      class="skill-badge"
      [class.skill-badge--beginner]="level() === 'beginner'"
      [class.skill-badge--intermediate]="level() === 'intermediate'"
      [class.skill-badge--advanced]="level() === 'advanced'"
      [class.skill-badge--expert]="level() === 'expert'">
      @if (icon()) {
        <span class="skill-badge__icon">{{ icon() }}</span>
      }
      <span class="skill-badge__name">{{ name() }}</span>
    </span>
  `,
  styleUrl: './skill-badge.component.scss'
})
export class SkillBadgeComponent {
  name = input.required<string>();
  icon = input<string>();
  level = input<SkillLevel>();
}
