import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Software Engineer',
      company: 'Bocxy Technologies Pvt. Ltd',
      duration: 'Mar 2025 – Present',
      description: 'Developing Aesthetic Clinic Management system with multi-login roles, streamlining clinic, doctor, pharmacy, and franchise workflows. Implemented billing, appointments, inventory, and dashboards.'
    },
    {
      role: 'Software Engineer',
      company: 'TecData IT Services Pvt. Ltd',
      duration: 'May 2024 – Dec 2024',
      description: 'Led the Motor Insurance Integration project, integrating insurers into a unified platform using Java Spring Boot and Amazon S3 for secure document handling.'
    },
    {
      role: 'Software Engineer',
      company: 'FA Software Services Pvt. Ltd / FA Premium Insurance Broking Pvt. Ltd',
      duration: 'Nov 2022 – Apr 2024',
      description: 'Designed and maintained the Outbound Calling System (OBS) for telesales. Developed Angular frontend and Spring Boot backend. Integrated WhatsApp/SMS/email and provided real-time analytics.'
    }
  ];

}
