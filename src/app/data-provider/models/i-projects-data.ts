export interface Stats {
  statsHeader: string;
  totalProjects: string;
  totalContributors: string;
  githubStars: string;
  totalDownloads: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  completionDate: string;
  repoUrl: string;
  demoUrl?: string;
  docsUrl?: string;
  imageUrl?: string;
  contributors?: number;
  achievements?: string[];
  featured?: boolean;
  expanded?: boolean;
}

export interface IProjectData {
  projectList: Array<Project>;

  pageTitle: string;
  pageDescription: string;
  featuredHeader: string;
  allProjectsHeader: string;
  statusHeader: string;
  noResultsText: string;

  categories: Array<string>;

  ctaHeader: string;
  ctaText: string;

  stats: Stats;
}
