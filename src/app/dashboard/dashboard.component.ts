import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  items: any[] = [
    { name: 'Landing Pages', image: '', route: 'landing-pages' },
    { name: 'Home Pages', image: '', route: 'home-pages' },
    { name: 'Dashboard Pages', image: '', route: 'dashboard-pages' },
  ];
}
