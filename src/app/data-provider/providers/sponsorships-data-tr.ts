import { inject, Injectable } from "@angular/core";
import { ISponsorshipsData, Sponsor, SponsorshipTier } from "../models/-sponsorships-data";
import { UniversalDataProvider } from "./universal-data-provider";

@Injectable()
export class SponsorshipsDataTrService implements ISponsorshipsData {
  private universalDataProvider: UniversalDataProvider = inject(UniversalDataProvider);
  header = "Topluluğumuzu Destekleyin";
  intro = "Açık kaynak projelerimize katkıda bulunan sponsorlara minnettarız. Siz de destekçilerimiz arasına katılabilirsiniz.";

  sponsorshipTiers: SponsorshipTier[] = [
    {
      name: "Altın Sponsor",
      description: "En yüksek düzeyde katkı sağlayan sponsorlar.",
      amount: "₺5000+ / ay",
      benefits: [
        "Ana sayfada büyük logo",
        "Tüm projelerde özel teşekkür",
        "Özel destek ve öncelikli iletişim"
      ]
    },
    {
      name: "Gümüş Sponsor",
      description: "Düzenli ve anlamlı katkılar sunan sponsorlar.",
      amount: "₺2500 / ay",
      benefits: [
        "Ana sayfada orta boy logo",
        "Proje sayfalarında teşekkür",
        "Destekçi bülteninde yer alma"
      ]
    },
    {
      name: "Bronz Sponsor",
      description: "Topluluğa katkı sağlayan girişimci destekçiler.",
      amount: "₺1000 / ay",
      benefits: [
        "Web sitemizde küçük logo",
        "Topluluk sayfasında listelenme"
      ]
    }
  ];

  sponsors: Sponsor[] = [
    { name: "Refik", tagline: "Yazılıma gönül veren destekçimiz.", logoUrl: "investor.png" },
    { name: "Mustafa", tagline: "Topluluğumuzun sadık destekçisi.", logoUrl: "investor.png" },
    { name: "Pebdifjfjforjei", tagline: "Takma adıyla tanınan gizli destekçi.", logoUrl: "investor.png" },
    { name: "Werquast", tagline: "Açık kaynak ruhunu benimseyen bir isim.", logoUrl: "investor.png" },
    { name: "Anonymous", tagline: "Gizli bir destekçi (afsaf dsafsd).", logoUrl: "investor.png" },
    { name: "Destek", tagline: "Topluluk için katkı sağlayan (afsaf dsafd).", logoUrl: "investor.png" },
    { name: "Nickname", tagline: "Takma isimli destekçimiz (afsaf dsafd).", logoUrl: "investor.png" },
    { name: "TaraN Turk", tagline: "Türkiye'den güçlü bir destek.", logoUrl: "investor.png" },
    { name: "Zenci", tagline: "Topluluğa gönülden destek veren (afsaf dsafd).", logoUrl: "investor.png" },
    { name: "Burkan", tagline: "Burkan Boğaz'dan özel katkı.", logoUrl: "investor.png" },
    { name: "Heraklion", tagline: "Ahmet Taş'ın vizyoner desteği.", logoUrl: "investor.png" }
  ];

  ctaHeader = "Siz de destek olun";
  ctaText = "Açık kaynak projelerimizin gelişimine katkı sağlamak ve daha güçlü bir topluluk oluşturmak için siz de sponsor olun.";
  ctaUrl = this.universalDataProvider.donateUrl;
}
