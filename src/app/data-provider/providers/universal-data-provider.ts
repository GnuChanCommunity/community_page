import { Injectable } from "@angular/core";

/**
 * This class provides universal data like github url, linkedin url etc.
 */
@Injectable({
  providedIn: "root",
})
export class UniversalDataProvider {
  // Social media URLs
  private readonly _githubUrl: string = "https://github.com/yourusername";
  private readonly _linkedinUrl: string = "https://linkedin.com/in/yourprofile";
  private readonly _twitterUrl: string = "https://twitter.com/yourhandle";
  private readonly _discordUrl: string = "https://discord.com/yourdiscord";

  // Contact information
  private readonly _contactEmail: string = "contact@example.com";
  private readonly _contactPhone: string = "+1 (123) 456-7890";

  // Company or personal website
  private readonly _websiteUrl: string = "https://example.com";

  // Portfolio or resume link
  private readonly _portfolioUrl: string = "https://example.com/portfolio";
  private readonly _resumeUrl: string = "https://example.com/resume";

  // API endpoints or base URLs
  private readonly _apiBaseUrl: string = "https://api.example.com/v1";

  // App metadata
  private readonly _appName: string = "Your Application Name";
  private readonly _appVersion: string = "1.0.0";

  // Getters for accessing the data
  get githubUrl(): string {
    return this._githubUrl;
  }

  get linkedinUrl(): string {
    return this._linkedinUrl;
  }

  get twitterUrl(): string {
    return this._twitterUrl;
  }

  get discordUrl(): string {
    return this._discordUrl;
  }
  get contactEmail(): string {
    return this._contactEmail;
  }

  get contactPhone(): string {
    return this._contactPhone;
  }

  get websiteUrl(): string {
    return this._websiteUrl;
  }

  get portfolioUrl(): string {
    return this._portfolioUrl;
  }

  get resumeUrl(): string {
    return this._resumeUrl;
  }

  get apiBaseUrl(): string {
    return this._apiBaseUrl;
  }

  get appName(): string {
    return this._appName;
  }

  get appVersion(): string {
    return this._appVersion;
  }

  /**
   * Returns all social media URLs as an object
   */
  getAllSocialLinks(): Record<string, string> {
    return {
      github: this._githubUrl,
      linkedin: this._linkedinUrl,
      twitter: this._twitterUrl,
      discord: this._discordUrl,
    };
  }

  /**
   * Returns all contact information as an object
   */
  getContactInfo(): Record<string, string> {
    return {
      email: this._contactEmail,
      phone: this._contactPhone,
      website: this._websiteUrl,
    };
  }

  /**
   * Returns app metadata as an object
   */
  getAppInfo(): Record<string, string> {
    return {
      name: this._appName,
      version: this._appVersion,
    };
  }
}
