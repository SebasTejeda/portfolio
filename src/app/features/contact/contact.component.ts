import { Component, inject } from '@angular/core';
import { ContactService } from '@core/services/contact.service';
import { SocialIcon } from '@core/models/contact.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  // Inyección del servicio
  private contactService = inject(ContactService);
  
  // Acceso a los signals del servicio
  contactInfo = this.contactService.contactInfo;
  
  // Enum para usar en el template
  SocialIcon = SocialIcon;
  
  /**
   * Obtiene el logo SVG para cada red social desde CDN
   */
  getSocialLogo(icon: SocialIcon): string {
    const logos: Record<SocialIcon, string> = {
      [SocialIcon.GITHUB]: 'https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png',
      [SocialIcon.LINKEDIN]: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      [SocialIcon.EMAIL]: 'https://api.iconify.design/mdi:email-outline.svg?color=%2306b6d4',
      [SocialIcon.TWITTER]: 'https://api.iconify.design/mdi:twitter.svg?color=%231DA1F2',
      [SocialIcon.PORTFOLIO]: 'https://api.iconify.design/mdi:web.svg?color=%2306b6d4'
    };
    return logos[icon];
  }
  
  /**
   * Copia el email al clipboard
   */
  copyEmail(): void {
    const email = this.contactInfo().email;
    navigator.clipboard.writeText(email).then(() => {
      alert(`Email copiado: ${email}`);
    }).catch(err => {
      console.error('Error al copiar email:', err);
    });
  }
}