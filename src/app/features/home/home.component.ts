import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsListComponent } from '../projects-list/projects-list.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsListComponent,
    ContactComponent
  ],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-projects-list />
    <app-contact />
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomeComponent {}
