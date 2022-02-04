import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent implements OnInit {
  windowWidth?: number;
  mobileSize = false;

  constructor() { }

  ngOnInit(): void {
    this.WindowWith();
  }
  WindowWith() {
    this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobileSize = true;
      } else {
        this.mobileSize = false;
      }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    this.WindowWith();
  }

}
