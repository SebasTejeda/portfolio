import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollToProjects(): void {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  downloadCV(): void {
    // Ruta desde public/ se accede directamente desde la raíz
    window.open('/cv/Sebastian_Tejeda_CV.pdf', '_blank');
  }
}