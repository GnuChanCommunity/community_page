export interface ISponsorshipsData {
  header: string;
  intro: string;
  sponsorshipTiers: SponsorshipTier[];
  sponsors: Sponsor[];
  ctaHeader: string;
  ctaText: string;
  ctaUrl: string;
}

export interface SponsorshipTier {
  name: string;
  description: string;
  amount: string; // Örn: "$500 / ay"
  benefits: string[];
}

export interface Sponsor {
  name: string;
  tagline: string;
  logoUrl: string;
  website?: string;
}
