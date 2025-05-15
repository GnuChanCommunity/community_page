import { inject, Injectable } from "@angular/core";
import { ISponsorshipsData, Sponsor, SponsorshipTier } from "../models/-sponsorships-data";
import { UniversalDataProvider } from "./universal-data-provider";

@Injectable()
export class SponsorshipsDataEnService implements ISponsorshipsData {
    private universalDataProvider: UniversalDataProvider = inject(UniversalDataProvider);
    header = "Support Our Community";
    intro = "We are grateful to our sponsors who contribute to our open-source projects. You can join them in supporting us.";

    sponsorshipTiers: SponsorshipTier[] = [
        {
            name: "Gold Sponsor",
            description: "Top-level sponsors with the highest contributions.",
            amount: "₺5000+ / month",
            benefits: [
                "Large logo on homepage",
                "Special thanks in all projects",
                "Priority support and direct contact"
            ]
        },
        {
            name: "Silver Sponsor",
            description: "Sponsors who provide regular and meaningful support.",
            amount: "₺2500 / month",
            benefits: [
                "Medium logo on homepage",
                "Thank you on project pages",
                "Mention in community newsletter"
            ]
        },
        {
            name: "Bronze Sponsor",
            description: "Enthusiastic supporters of our community.",
            amount: "₺1000 / month",
            benefits: [
                "Small logo on the website",
                "Listed on community page"
            ]
        }
    ];

    sponsors: Sponsor[] = [
        { name: "Refik", tagline: "A passionate supporter of development.", logoUrl: "assets/sponsors/refik.png" },
        { name: "Mustafa", tagline: "One of our most loyal contributors.", logoUrl: "assets/sponsors/mustafa.png" },
        { name: "Pebdifjfjforjei", tagline: "A hidden supporter known by nickname.", logoUrl: "assets/sponsors/pebdif.png" },
        { name: "Werquast", tagline: "Believer in the spirit of open source.", logoUrl: "assets/sponsors/werquast.png" },
        { name: "Anonymous", tagline: "A secret contributor (afsaf dsafsd).", logoUrl: "assets/sponsors/anonymous.png" },
        { name: "Support", tagline: "A contributor to the community (afsaf dsafd).", logoUrl: "assets/sponsors/destek.png" },
        { name: "Nickname", tagline: "Our supporter under a pseudonym (afsaf dsafd).", logoUrl: "assets/sponsors/nickname.png" },
        { name: "TaraN Turk", tagline: "A strong supporter from Turkey.", logoUrl: "assets/sponsors/taran.png" },
        { name: "Zenci", tagline: "A devoted contributor to our cause (afsaf dsafd).", logoUrl: "assets/sponsors/zenci.png" },
        { name: "Burkan", tagline: "Special contributions from Burkan Bogaz.", logoUrl: "assets/sponsors/burkan.png" },
        { name: "Heraklion", tagline: "Support from visionary Ahmet Taş.", logoUrl: "assets/sponsors/heraklion.png" }
    ];

    ctaHeader = "Become a Supporter";
    ctaText = "Help our open-source initiatives grow and strengthen our community by becoming a sponsor.";
    ctaUrl = this.universalDataProvider.donateUrl;
}
