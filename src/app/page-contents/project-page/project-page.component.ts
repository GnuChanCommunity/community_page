import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProviderModule } from "../../data-provider/data-provider.module";
import { DataProviderFactoryService } from "../../data-provider/data-provider-factory.service";
import { IProjectData, Project } from "../../data-provider/models/i-projects-data";

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    CommonModule,
    DataProviderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTabsModule
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  dataProvider: DataProviderFactoryService = inject(DataProviderFactoryService);

  projectData: IProjectData = this.dataProvider.getProjectData();
  project: Project | undefined;
  projectId: string = '';
  notFound: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id') || '';
      this.loadProject();
    });
  }

  loadProject(): void {
    this.project = this.projectData.projectList.find(p => p.id === this.projectId);
    this.notFound = !this.project;
  }

  getCompletionDate(dateString: string): Date {
    return new Date(dateString);
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}