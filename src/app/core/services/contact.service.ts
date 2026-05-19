import { Injectable, signal } from '@angular/core';
import { ContactInfo, SocialIcon, SocialLink } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Signal con información de contacto
private contactInfoSignal = signal<ContactInfo>({
  email: 'u20191a458@upc.edu.pe',
  location: 'Lima, Perú',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/SebasTejeda',
      icon: SocialIcon.GITHUB
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sebastián-tejeda-flores-100245192',
      icon: SocialIcon.LINKEDIN
    },
    {
      name: 'Email',
      url: 'mailto:u20191a458@upc.edu.pe',
      icon: SocialIcon.EMAIL
    }
  ]
});
  
  readonly contactInfo = this.contactInfoSignal.asReadonly();
  
  /**
   * Obtiene un link social por tipo de icono
   */
  getSocialLink(icon: SocialIcon): SocialLink | undefined {
    return this.contactInfoSignal().socialLinks.find(link => link.icon === icon);
  }
  
  /**
   * Obtiene todos los links sociales
   */
  getSocialLinks(): SocialLink[] {
    return this.contactInfoSignal().socialLinks;
  }
}
