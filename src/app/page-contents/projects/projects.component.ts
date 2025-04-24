import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import {
  MatExpansionModule,
  MatExpansionPanel,
} from "@angular/material/expansion";

import { DataProviderModule } from "../../data-provider/data-provider.module";
import { DataProviderFactoryService } from "../../data-provider/data-provider-factory.service";
import { IProjectData } from "../../data-provider/models/i-projects-data";
import { Project } from "../../data-provider/models/i-projects-data";

interface FilteredProjects {
  featured: Project[];
  all: Project[];
}

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // Angular material modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    // Special modules
    DataProviderModule,
  ],
  standalone: true,
})
export class ProjectsComponent implements OnInit {
  dataProvider: DataProviderFactoryService = inject(DataProviderFactoryService);
  projectData: IProjectData = this.dataProvider.getProjectData();

  selectedCategory: string = "all";
  searchText: string = "";

  // Add the filteredProjects property
  filteredProjects: FilteredProjects = {
    featured: [],
    all: [],
  };

  constructor() {}

  ngOnInit(): void {
    // Initialize the filteredProjects when component initializes
    this.filterProjects();
  }

  // Add the filterProjects method
  filterProjects(): void {
    let allProjects = [...this.projectData.projectList];

    // Filter by category if not "all"
    if (this.selectedCategory !== "all") {
      allProjects = allProjects.filter(
        (project) => project.category === this.selectedCategory,
      );
    }

    // Filter by search text if any
    if (this.searchText && this.searchText.trim() !== "") {
      const searchTerms = this.searchText.toLowerCase().trim();
      allProjects = allProjects.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerms) ||
          project.description.toLowerCase().includes(searchTerms) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerms),
          ) ||
          project.category.toLowerCase().includes(searchTerms),
      );
    }

    // Separate featured and non-featured projects
    this.filteredProjects = {
      featured: allProjects.filter((project) => project.featured),
      all: allProjects.filter((project) => !project.featured),
    };
  }

  // Add the clearFilters method
  clearFilters(): void {
    this.selectedCategory = "all";
    this.searchText = "";
    this.filterProjects();
  }
}
