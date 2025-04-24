export interface IAboutUsData {
  communityName: string;
  communityTagline: string;
  missionStatement: string;
  storyHeader: string;
  storyParagraphs: Array<string>;

  valuesHeader: string;
  values: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  teamHeader: string;
  teamIntro: string;
  teamMembers: Array<{
    name: string;
    role: string;
    avatarUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    twitterUrl: string;
  }>;

  joinHeader: string;
  joinText: string;
  waysToContribute: Array<string>;
}
