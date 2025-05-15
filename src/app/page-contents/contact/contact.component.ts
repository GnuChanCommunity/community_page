import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversalDataProvider } from '../../data-provider/providers/universal-data-provider';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact', // Or your preferred selector
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class ContactComponent implements OnInit {

  // Make the provider public so the template can access its getters easily
  constructor(public universalDataProvider: UniversalDataProvider) { }

  ngOnInit(): void {
    // You can add initialization logic here if needed
    // For example, logging the data:
    // console.log('Contact Email:', this.universalDataProvider.contactEmail);
    // console.log('Social Links:', this.universalDataProvider.getAllSocialLinks());
  }

  // Optional: If you prefer not to expose the whole service,
  // you can create specific properties:
  // contactEmail = this.universalDataProvider.contactEmail;
  // contactPhone = this.universalDataProvider.contactPhone;
  // socialLinks = this.universalDataProvider.getAllSocialLinks();
  // Using the public provider instance is often simpler for templates.
}