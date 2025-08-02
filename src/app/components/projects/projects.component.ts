import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor], // ✅ Add NgFor here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Clinic Management API',
      description: 'Spring Boot based clinic backend with billing & appointment modules.',
      link: '#'
    },
    {
      title: 'E-commerce Backend',
      description: 'RESTful backend with product, cart, and payment API.',
      link: '#'
    },
    {
      title: 'Online Movie Ticket Booking',
      description: 'Angular + Spring Boot project for booking flow with seats & history.',
      link: '#'
    }
  ];
}
