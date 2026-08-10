import { Component, HostListener, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

const TOP_REVEAL_ZONE_PX = 12;

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    :host(.auto-hide) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      transform: translateY(-100%);
      transition: transform 0.25s ease;
      pointer-events: none;
    }

    :host(.auto-hide.revealed) {
      transform: translateY(0);
      pointer-events: auto;
    }
  `,
  host: {
    '[class.auto-hide]': 'autoHide()',
    '[class.revealed]': 'autoHide() && chromeVisible()',
  },
})
export class Header {
  autoHide = input(false);

  protected chromeVisible = signal(false);
  private navHovered = false;

  menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' },
  ];

  @HostListener('document:mousemove', ['$event'])
  onDocumentMouseMove(event: MouseEvent): void {
    if (!this.autoHide()) return;
    this.updateChromeVisibility(event.clientY);
  }

  @HostListener('document:touchstart', ['$event'])
  onDocumentTouchStart(event: TouchEvent): void {
    if (!this.autoHide()) return;
    const y = event.touches[0]?.clientY ?? Number.MAX_SAFE_INTEGER;
    this.updateChromeVisibility(y);
  }

  onNavEnter(): void {
    if (!this.autoHide()) return;
    this.navHovered = true;
    this.chromeVisible.set(true);
  }

  onNavLeave(event: MouseEvent): void {
    if (!this.autoHide()) return;
    this.navHovered = false;
    this.updateChromeVisibility(event.clientY);
  }

  private updateChromeVisibility(pointerY: number): void {
    this.chromeVisible.set(pointerY <= TOP_REVEAL_ZONE_PX || this.navHovered);
  }
}
