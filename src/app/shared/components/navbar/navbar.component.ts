import { Component, signal, HostListener } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // Signal para estado de scroll
  isScrolled = signal<boolean>(false);
  
  // Navigation links
  navLinks: NavLink[] = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' }
  ];
  
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled.set(scrollPosition > 50);
  }
  
  scrollToSection(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
