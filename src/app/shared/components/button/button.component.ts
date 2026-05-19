import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button 
      [ngClass]="buttonClasses()"
      [disabled]="disabled()"
      [type]="type()"
      (click)="handleClick()"
      class="button">
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  // Inputs como signals
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  disabled = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button');
  fullWidth = input<boolean>(false);
  
  // Output
  clicked = output<void>();
  
  handleClick(): void {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }
  
  buttonClasses(): string[] {
    return [
      `button--${this.variant()}`,
      `button--${this.size()}`,
      this.fullWidth() ? 'button--full' : ''
    ].filter(Boolean);
  }
}
