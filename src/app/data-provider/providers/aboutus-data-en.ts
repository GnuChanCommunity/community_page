import { Injectable } from "@angular/core";
import { IAboutUsData } from "../models/i-aboutus-data";

/**
 * English language implementation of AboutUs data
 */
@Injectable()
export class AboutUsDataEnService implements IAboutUsData {
  communityName: string = "GnuChan Community";
  communityTagline: string = "Building the Turkish open-source ecosystem together through our shared projects.";
  missionStatement: string =
    "To create accessible, innovative, and effective software solutions for developers and users around the world.";

  storyHeader: string = "Our Story";
  storyParagraphs: Array<string> = [
    "Our community was founded in 2025 by a group of developers who met through YouTube and decided to collaborate.",
    "Our very first project was a game called 'The Arena: Last Shooter', which we released independently on Itch.io. It was the first tangible result of our shared passion.",
    "The founding members of the team are still with us today, forming the core of our developer group—bonded by both code and friendship.",
    "As we continued working together, we realized that passion projects can be more than hobbies—they can become a sustainable way of life.",
    "Now, we are committed to promoting open-source culture and developer collaboration across Türkiye, aiming to build an inclusive ecosystem where anyone can contribute."
  ];

  valuesHeader: string = "Our Core Values";
  values: Array<{
    icon: string;
    title: string;
    description: string;
  }> = [
    {
      icon: "fa-lightbulb",
      title: "Innovation",
      description: "We constantly push boundaries and explore new approaches to solve complex problems.",
    },
    {
      icon: "fa-users",
      title: "Collaboration",
      description: "We believe the best solutions come from diverse minds working toward a shared goal.",
    },
    {
      icon: "fa-lock-open",
      title: "Openness",
      description: "We embrace transparency in our code, processes, and community interactions.",
    },
    {
      icon: "fa-universal-access",
      title: "Inclusivity",
      description: "We are committed to creating a welcoming space for developers of all backgrounds and skill levels.",
    },
    {
      icon: "fa-certificate",
      title: "Quality",
      description: "We uphold high standards in our code, documentation, and community support.",
    },
  ];

  teamHeader: string = "Meet the Team";
  teamIntro: string =
    "Our community is led by a group of dedicated volunteers who contribute their time and expertise to guide our projects and support our growing community.";
  teamMembers: Array<{
    name: string;
    role: string;
    avatarUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    twitterUrl: string;
  }> = [
    {
      name: "Kubilay Yalçın",
      role: "Community Leader, 3D Modeling, Game Developer",
      avatarUrl: "developer-profile-photos/kubi.png",
      githubUrl: "https://github.com/gnuchanos",
      linkedinUrl: "https://www.linkedin.com/in/kubilay-yalcin-5b0233292/",
      twitterUrl: "",
    },
    {
      name: "Akif Esad Tosun",
      role: "Tech Lead, Web Developer, Game Developer",
      avatarUrl: "developer-profile-photos/akif.jpg",
      githubUrl: "https://github.com/Akif-jpg",
      linkedinUrl: "https://www.linkedin.com/in/akif-tosun-81b205340/",
      twitterUrl: "https://x.com/AkifEsas",
    },
    {
      name: "Fatih Gök",
      role: "Game Tester, Bug Fixer",
      avatarUrl: "developer-profile-photos/fatihgok.png",
      githubUrl: "https://github.com/painoyunda",
      linkedinUrl: "",
      twitterUrl: "",
    },
  ];

  joinHeader: string = "Join Our Community";
  joinText: string =
    "We're always looking for passionate individuals to join us. Whether you're a developer, designer, writer, or simply enthusiastic about open-source, there's a place for you here.";
  waysToContribute: Array<string> = [
    "Contribute code to our open-source projects",
    "Help improve our documentation",
    "Report bugs and suggest features",
    "Translate our resources into different languages",
    "Participate in community discussions and forums",
    "Mentor new contributors",
    "Spread the word about our community and projects",
  ];
}
