import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface NavData {
  name: string;
  route?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  // Toggle the menu visibility on mobile
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navLink: NavData[] = [
    { name: 'Home', route: '' },
    { name: 'About', route: '' },
    { name: 'Services', route: '' },
    { name: 'Properties', route: '' },
    { name: 'Contact', route: '' },
  ];

  navigateToRoute(route: string) {
    // Close the menu on mobile screens
    this.isMenuOpen = false;

    // Navigate to the route
    this.route.navigate([route]);
  }
}
