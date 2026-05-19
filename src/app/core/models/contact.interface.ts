export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIcon;
}

export enum SocialIcon {
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  EMAIL = 'email',
  TWITTER = 'twitter',
  PORTFOLIO = 'portfolio'
}

export interface ContactInfo {
  email: string;
  location: string;
  socialLinks: SocialLink[];
}
