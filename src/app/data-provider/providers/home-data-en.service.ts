import { inject, Injectable } from "@angular/core";
import { IHomeData } from "../models/i-home-data";
import { UniversalDataProvider } from "./universal-data-provider";

@Injectable()
export class HomeDataEnService implements IHomeData {
  universalDataProvider: UniversalDataProvider = inject(UniversalDataProvider);
  name = "Gnuchan Open Source Community";
  title = "Collective Wisdom and Development Through the Power of Free Software";
  email = this.universalDataProvider.contactEmail;
  revolt: string = this.universalDataProvider.revoltAdress;
  phone = "Community Communication Channels (Discord, Forum, etc.)";
  location = "Online and Globally Accessible";
  github = this.universalDataProvider.githubUrl;
  linkedin = "Our LinkedIn Page is Coming Soon!";

  communityMissionHeader: string = "Community Mission";
  communityMission: string =
    "Our mission is to build a vibrant, inclusive, and sustainable open-source community where developers, designers, and enthusiasts collaborate to create impactful software for the public good. We are committed to transparency, continuous learning, and empowering contributors from all backgrounds to share knowledge, grow together, and build meaningful digital solutions.";

  skillItemsHeader: string = "Technical Skills";
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

  workingAreasHeader: string = "Areas of Focus";
  workingAreas = [
    "Initiating and Building New Free Software Projects",
    "Contributing to Existing Open Source Projects (Bug Fixes, New Features)",
    "Research and Prototyping on Technological Trends",
    "Sharing Knowledge and Experience on Open Source Tools and Infrastructures",
    "Developing Educational Materials and Creating Mentorship Programs",
    "Maintaining and Improving Essential Tools and Platforms for the Community",
  ];

  projectsHeader: string = "Our Projects";
  projects = [
    {
      title: "The Last Arena Shooter",
      technologies: "Unity 2022.3.6f1",
      description:
        "The first project developed by our community—a simple arena shooter game.",
    },
  ];
}
