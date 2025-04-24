import { Injectable } from "@angular/core";
import { IHomeData } from "../models/i-home-data"; // Assuming the interface is imported from this path

@Injectable()
export class HomeDataEnService implements IHomeData {
  // Fields required by the IHomeData interface:

  name = "Gnuchan Open Source Community";
  title =
    "Empowering Collaborative Development through Free Software Principles"; // A title reflecting the community's mission
  email = "Our community email address";
  phone = "Our Community Communication Channels (Discord, Forum, etc.)"; // Directing to communication channels instead of a phone number
  location = "Online and Global Reach"; // Specifying the nature of the community
  github = "https://github.com/gnuchan-community-example"; // Example community GitHub link
  linkedin = "Our LinkedIn Page Coming Soon!"; // Status of the LinkedIn page

  communityMissionHeader: string = "Community Mission";
  communityMission: string =
    "Our mission is to foster a vibrant, inclusive, and sustainable open source community where developers, designers, and enthusiasts collaborate to build impactful software for the public good. We are committed to transparency, continuous learning, and empowering contributors of all backgrounds to share knowledge, grow together, and create meaningful digital solutions.";

  skillItemsHeader: string = "Technical Skills";
  /**
   * Areas where the community has collectively gained experience or focuses on.
   */
  skillItems = [
    {
      category: "Core Principles",
      skill:
        "Open Source Culture, Collaborative Development, Knowledge Sharing, Transparency",
    },
    {
      category: "Technologies",
      skill:
        "Various programming languages (e.g., Python, Java, JavaScript, C++, Rust), Git, CI/CD Tools (Jenkins, GitHub Actions), Containerization (Docker), Linux Environments, Databases (SQL, NoSQL)",
    },
    {
      category: "Development Processes",
      skill:
        "Agile Methodologies, Code Review, Test-Driven Development (TDD), Bug Tracking, Documentation",
    },
    {
      category: "Community Management",
      skill: "Event Planning, Communication Management, Contributor Support",
    },
  ];

  workingAreasHeader: string = "Working Areas";
  /**
   * The areas the community is actively working on or aims to contribute to.
   */
  workingAreas = [
    "Initiating and Developing New Free Software Projects",
    "Contributing to Existing Open Source Projects (Bug Fixes, New Features)",
    "Researching and Prototyping on Technological Trends",
    "Sharing Knowledge and Experience on Open Source Tools and Infrastructure",
    "Developing Educational Materials and Establishing Mentorship Programs",
    "Maintaining and Developing Tools and Platforms for the Community",
  ];

  projectsHeader: string = "Our Projects";
  /**
   * Example projects completed or actively developed by the community.
   */
  projects = [
    {
      title: "Gnuchan Task Tracker",
      technologies: "Python, Django, PostgreSQL, Docker",
      description:
        "A web-based open source platform for transparent tracking of community tasks and contributions.",
    },
    {
      title: "Open Documentation Initiative",
      technologies: "Markdown, Sphinx, GitHub Pages",
      description:
        "A central repository and publishing platform for detailed technical documentation prepared by the community for various open source projects.",
    },
    {
      title: "Educational Resources Library",
      technologies: "Various (not technology specific)",
      description:
        "A digital library hosting and making easily accessible educational materials (code samples, presentations) prepared by community members.",
    },
    {
      title: "Contributions to Core Libraries",
      technologies: "Project dependent (Java, Python, C++ etc.)",
      description:
        "Regular bug fixes and feature contributions to core libraries of various popular open source projects (e.g., Linux kernel, Spring, Django).",
    },
  ];
}
