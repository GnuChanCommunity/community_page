import { Injectable } from "@angular/core";
import { IAboutUsData } from "../models/i-aboutus-data";

/**
 * English language implementation of AboutUs data
 */
@Injectable()
export class AboutUsDataEnService implements IAboutUsData {
  communityName: string = "Open Source Community";
  communityTagline: string = "Building the future, together";
  missionStatement: string =
    "To create accessible, innovative software solutions that empower developers and users around the world.";

  storyHeader: string = "Our Story";
  storyParagraphs: Array<string> = [
    "Founded in 2020, our community began as a small group of passionate developers who believed in the power of open collaboration.",
    "What started as a weekend project among friends quickly grew into a global community of contributors, all united by our shared vision.",
    "Today, we're proud to have members from over 30 countries, working together to build tools that make technology more accessible and powerful for everyone.",
    "Our journey has been defined by the principles of transparency, inclusivity, and excellence in everything we create.",
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
      description:
        "We constantly push boundaries and explore new approaches to solving complex problems.",
    },
    {
      icon: "fa-users",
      title: "Collaboration",
      description:
        "We believe the best solutions emerge when diverse minds work together toward common goals.",
    },
    {
      icon: "fa-lock-open",
      title: "Openness",
      description:
        "We embrace transparency in our code, our processes, and our community interactions.",
    },
    {
      icon: "fa-universal-access",
      title: "Inclusivity",
      description:
        "We're committed to creating a welcoming environment for developers of all backgrounds and skill levels.",
    },
    {
      icon: "fa-certificate",
      title: "Quality",
      description:
        "We maintain high standards in our code, documentation, and community support.",
    },
  ];

  teamHeader: string = "Meet Our Team";
  teamIntro: string =
    "Our community is led by a dedicated team of volunteers who contribute their time and expertise to guide our projects and nurture our growing community.";
  teamMembers: Array<{
    name: string;
    role: string;
    avatarUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    twitterUrl: string;
  }> = [
    {
      name: "Alex Johnson",
      role: "Community Lead",
      avatarUrl: "/assets/images/team/alex.jpg",
      githubUrl: "https://github.com/alexj",
      linkedinUrl: "https://linkedin.com/in/alexjohnson",
      twitterUrl: "https://twitter.com/alexj",
    },
    {
      name: "Maria Garcia",
      role: "Technical Lead",
      avatarUrl: "/assets/images/team/maria.jpg",
      githubUrl: "https://github.com/mariagarcia",
      linkedinUrl: "https://linkedin.com/in/mariagarcia",
      twitterUrl: "https://twitter.com/mariagarcia",
    },
    {
      name: "David Chen",
      role: "Documentation Lead",
      avatarUrl: "/assets/images/team/david.jpg",
      githubUrl: "https://github.com/davidc",
      linkedinUrl: "https://linkedin.com/in/davidchen",
      twitterUrl: "https://twitter.com/davidc",
    },
    {
      name: "Sarah Williams",
      role: "Community Outreach",
      avatarUrl: "/assets/images/team/sarah.jpg",
      githubUrl: "https://github.com/sarahw",
      linkedinUrl: "https://linkedin.com/in/sarahwilliams",
      twitterUrl: "https://twitter.com/sarahw",
    },
    {
      name: "James Wilson",
      role: "Education Lead",
      avatarUrl: "/assets/images/team/james.jpg",
      githubUrl: "https://github.com/jamesw",
      linkedinUrl: "https://linkedin.com/in/jameswilson",
      twitterUrl: "https://twitter.com/jamesw",
    },
  ];

  joinHeader: string = "Join Our Community";
  joinText: string =
    "We're always looking for passionate individuals to join our community. Whether you're a developer, designer, writer, or just enthusiastic about open source, there's a place for you here.";
  waysToContribute: Array<string> = [
    "Contribute code to our open source projects",
    "Help improve our documentation",
    "Report bugs and suggest features",
    "Translate our resources into different languages",
    "Participate in community discussions and forums",
    "Mentor new contributors",
    "Spread the word about our community and projects",
  ];
}
