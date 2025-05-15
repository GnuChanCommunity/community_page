import { Injectable } from "@angular/core";
import { IProjectData, Stats, Project } from "../models/i-projects-data";

@Injectable()
export class ProjectDataEnService implements IProjectData {
  projectList: Array<Project> = [
    {
      id: "proj-001",
      title: "First Unity Game",
      description:
        "A first-person arena shooter game developed with Unity. The player battles waves of robot soldiers spawning from four different points. After each wave, the player gets a short break to purchase items like health, ammo, and various upgrades from the in-game market.",
      category: "Game Development",
      technologies: ["Unity", "C#", "Blender"],
      completionDate: "2025-05-15",
      repoUrl: "https://github.com/Akif-jpg/firstunitygame",
      demoUrl: "https://gnuchanos.itch.io/the-lost-arena-shooter",
      docsUrl: "",
      imageUrl: "/project-photos/firstunitygame.png",
      contributors: 3,
      achievements: ["Wave-based enemy system", "In-game market integration"],
      featured: true,
      expanded: false,
    },
    {
      id: "proj-002",
      title: "GnuChanCommunity Website",
      description: "This is a website developed for the GnuChan community. It contains detailed information about projects. Information we work on as a community, events we organize, and more are published through this site.",
      category: "Web Development",
      technologies: ["Angular", "TypeScript", "CSS"],
      completionDate: "2025-04-20",
      repoUrl: "https://github.com/GnuChanCommunity/community_page/tree/main",
      demoUrl: "https://gnuchanoscommunity.github.io",
      docsUrl: "https://github.com/GnuChanCommunity/community_page/blob/main/README.md",
      imageUrl: "/project-photos/gnuchan-website.png",
      contributors: 1,
      achievements: ["Multilingual support", "Website deployment", "Google Search Console integration"],
      featured: true,
      expanded: false
    }

  ];

  pageTitle = "Our Projects";
  pageDescription =
    "A list of projects developed by our open-source community.";
  featuredHeader = "Featured Projects";
  allProjectsHeader = "All Projects";
  statusHeader = "Status";
  noResultsText = "No projects found matching your criteria.";

  categories: Array<string> = [
    "Web Development",
    "Mobile Application",
    "Data Science",
    "DevOps Tools",
    "Artificial Intelligence",
    "UI/UX Libraries",
    "Game Development",
  ];

  ctaHeader = "Join the Community";
  ctaText =
    "Interested in contributing to our projects? Start by forking on GitHub!";

  stats: Stats = {
    statsHeader: "Platform Statistics",
    totalProjects: "Total Projects",
    totalContributors: "Contributors",
    githubStars: "GitHub Stars",
    totalDownloads: "Total Downloads",
  };
}
