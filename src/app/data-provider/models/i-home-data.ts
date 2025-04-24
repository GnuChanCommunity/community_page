/**
 * An interface for provide template to home data provider services.
 * @author Akif Esad
 */
export interface IHomeData {
  /**
   * These datas for profile-header div.
   */
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;

  communityMissionHeader: string;
  communityMission: string;

  skillItemsHeader: string;
  /**
   * The following data is used to illustrate areas of work in which experience is gained.
   */
  skillItems: Array<{
    category: string;
    skill: string;
  }>;

  workingAreasHeader: string;
  /**
   * The following fields are used to define the target areas to be studied.
   */
  workingAreas: Array<string>;

  projectsHeader: string;
  /**
   * Previously completed projects.
   */
  projects: Array<{
    title: string;
    technologies: string;
    description: string;
  }>;
}
