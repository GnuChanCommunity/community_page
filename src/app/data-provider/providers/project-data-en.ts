import { Injectable } from "@angular/core";
import { IProjectData, Stats, Project } from "../models/i-projects-data";

@Injectable()
export class ProjectDataEnService implements IProjectData {
  projectList: Array<Project> = [
    {
      id: "proj-001",
      title: "Sanayimatik Management System",
      description:
        "An open-source management software that digitalizes industrial production processes.",
      category: "Web Development",
      technologies: ["Flask", "MySQL", "Bootstrap", "Docker", "Jenkins"],
      completionDate: "2024-12-01",
      repoUrl: "https://github.com/sanayimatik/sistem",
      demoUrl: "https://demo.sanayimatik.org",
      docsUrl: "https://docs.sanayimatik.org",
      imageUrl: "assets/images/projects/sanayimatik.png",
      contributors: 5,
      achievements: ["Data traceability", "Real-time production tracking"],
      featured: true,
      expanded: false,
    },
    {
      id: "proj-002",
      title: "HTMLUnit Test Suite",
      description:
        "A testing and reporting framework integrated with HTMLUnit.",
      category: "DevOps Tools",
      technologies: ["Java", "JUnit", "HTMLUnit", "Jenkins"],
      completionDate: "2025-04-15",
      repoUrl: "https://github.com/test-suite/htmlunit-monitor",
      imageUrl: "assets/images/projects/htmlunit.png",
      contributors: 2,
      achievements: ["PDF/HTML reporting", "Annotation-based test analysis"],
      featured: false,
      expanded: false,
    },
  ];

  pageTitle = "Our Projects";
  pageDescription =
    "A list of projects developed by our open-source community.";
  featuredHeader = "Featured Projects";
  allProjectsHeader = "All Projects";
  statusHeader = "Status";
  noResultsText = "No projects found matching your criteria.";

  categories: [
    "Web Development",
    "Mobile Application",
    "Data Science",
    "DevOps Tools",
    "Artificial Intelligence",
    "UI/UX Libraries",
  ] = [
    "Web Development",
    "Mobile Application",
    "Data Science",
    "DevOps Tools",
    "Artificial Intelligence",
    "UI/UX Libraries",
  ];

  ctaHeader = "Join the Community";
  ctaText =
    "Would you like to contribute to our projects? Fork us on GitHub and start collaborating!";

  stats: Stats = {
    statsHeader: "Platform Statistics",
    totalProjects: "Total Projects",
    totalContributors: "Contributors",
    githubStars: "GitHub Stars",
    totalDownloads: "Total Downloads",
  };
}
