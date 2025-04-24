/**
 * An interface for provide template to header data provider services.
 * @author Akif Esad
 */
export interface IHeaderData {
  brandName: string;
  menuItems: Array<{
    label: string;
    path: string;
  }>;
}
