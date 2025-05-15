import { Injectable, Inject, PLATFORM_ID, inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

// Import interfaces for data structures
import { IHeaderData } from "./models/i-header-data";
import { IHomeData } from "./models/i-home-data";

// Import concrete data provider services for each language
import { HeaderDataEnService } from "./providers/header-data-en.service";
import { HeaderDataTrService } from "./providers/header-data-tr.service";
import { HomeDataEnService } from "./providers/home-data-en.service";
import { HomeDataTrService } from "./providers/home-data-tr.service";
import { IFooterData } from "./models/i-footer-data";
import { FooterDataTrService } from "./providers/footer-data-tr.service";
import { FooterDataEnService } from "./providers/footer-data-en.service";
import { IAboutUsData } from "./models/i-aboutus-data";
import { AboutUsDataTrService } from "./providers/aboutus-data-tr";
import { AboutUsDataEnService } from "./providers/aboutus-data-en";
import { IProjectData } from "./models/i-projects-data";
import { ProjectDataTrService } from "./providers/project-data-tr";
import { ProjectDataEnService } from "./providers/project-data-en";
import { ISponsorshipsData } from "./models/-sponsorships-data";
import { SponsorshipsDataTrService } from "./providers/sponsorships-data-tr";
import { SponsorshipsDataEnService } from "./providers/sponsorships-data-en";
import { UniversalDataProvider } from "./providers/universal-data-provider";

// @Injectable() decorator marks this class as a service that can be injected
// and can have its own dependencies injected.
@Injectable({
  providedIn: "root",
})
export class DataProviderFactoryService {
  // Private property to store the determined language ('en' or 'tr')
  private readonly language: string; // Constructor is called when the service is instantiated by Angular's injector.
  // @Inject(PLATFORM_ID) injects a token that tells us if the code is running in a browser or on the server.

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Determine the language based on the platform.
    // isPlatformBrowser(platformId) checks if the current platform is a browser.
    this.language = isPlatformBrowser(platformId)
      ? // If in a browser:
        // Check the browser's language using navigator.language.
        // Convert to lower case and check if it starts with 'tr'.
        // If it starts with 'tr', set language to 'tr', otherwise default to 'en'.
        navigator.language.toLowerCase().startsWith("tr")
        ? "tr"
        : "en"
      : // If not in a browser (e.g., Server-Side Rendering - SSR):
        // Default the language to 'en' as navigator is not available on the server.
        "en";
  } // Factory method to get the appropriate Header/Navbar data service based on the determined language.
  // It returns an instance of a class that implements the IHeaderData interface.

  getNavbarData(): IHeaderData {
    // If the determined language is 'tr', return an instance of HeaderDataTrService.
    // Otherwise (language is 'en' or default), return an instance of HeaderDataEnService.
    return this.language === "tr"
      ? inject(HeaderDataTrService)
      : inject(HeaderDataEnService);
  } // Factory method to get the appropriate Home page data service based on the determined language.
  // It returns an instance of a class that implements the IHomeData interface.

  getHomeData(): IHomeData {
    // If the determined language is 'tr', return an instance of HomeDataTrService.
    // Otherwise (language is 'en' or default), return an instance of HomeDataEnService.
    return this.language === "tr"
      ? inject(HomeDataTrService)
      : inject(HomeDataEnService);
  }

  getAboutUsData(): IAboutUsData {
    // If the determined language is 'tr', return an instance of HomeDataTrService.
    // Otherwise (language is 'en' or default), return an instance of HomeDataEnService.
    return this.language === "tr"
      ? inject(AboutUsDataTrService)
      : inject(AboutUsDataEnService);
  }

  getProjectData(): IProjectData {
    // If the determined language is 'tr', return an instance of HomeDataTrService.
    // Otherwise (language is 'en' or default), return an instance of HomeDataEnService.
    return this.language === "tr"
      ? inject(ProjectDataTrService)
      : inject(ProjectDataEnService);
  }

  getSponsorshipsData(): ISponsorshipsData
  {
    return this.language == "tr"
      ? inject(SponsorshipsDataTrService)
      : inject(SponsorshipsDataEnService);
  }

  getUniversalDataProvider(): UniversalDataProvider
  {
    return inject(UniversalDataProvider);
  }

  getFooterData(): IFooterData {
    // If the determined language is 'tr', return an instance of HomeDataTrService.
    // Otherwise (language is 'en' or default), return an instance of HomeDataEnService.
    return this.language === "tr"
      ? inject(FooterDataTrService)
      : inject(FooterDataEnService);
  }
}
