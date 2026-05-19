import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  highlights = [
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      title: 'Adaptación Rápida',
      description: 'Me adapto rápidamente a nuevos proyectos y tecnologías, aprendiendo de mi equipo.'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg',
      title: 'Orientado a Soluciones',
      description: 'Descompongo problemas complejos en partes pequeñas para encontrar soluciones efectivas.'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      title: 'Trabajo en Equipo',
      description: 'Colaborativo y responsable, con experiencia en desarrollo usando Git/GitHub.'
    }
  ];
}