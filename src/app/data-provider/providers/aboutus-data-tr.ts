import { Injectable } from "@angular/core";
import { IAboutUsData } from "../models/i-aboutus-data";

/**
 * Turkish language implementation of AboutUs data
 */
@Injectable()
export class AboutUsDataTrService implements IAboutUsData {
  communityName: string = "GnuChan Topluluk";
  communityTagline: string = "Açık kaynak projelerimizle Türk açık kaynak ekosistemini birlikte inşa ediyoruz.";
  missionStatement: string =
    "Dünya genelindeki geliştiriciler ve kullanıcılar için erişilebilir, yenilikçi ve etkili yazılım çözümleri üretmek.";


  storyHeader: string = "Hikayemiz";
  storyParagraphs: Array<string> = [
    "Topluluğumuz 2025 yılında, YouTube üzerinden tanışan bir grup geliştiricinin bir araya gelmesiyle kuruldu.",
    "İlk projemiz, bağımsız olarak yayınladığımız 'The Arena: Last Shooter' adlı bir itchio oyunuydu. Bu proje, ortak üretim tutkumuzun ilk somut meyvesiydi.",
    "Ekibin ilk üyeleri bugün hâlâ aramızda olan çekirdek geliştirici kadrosudur. Bu kadro, zamanla sadece teknik değil, aynı zamanda güçlü bir dostluk ağına dönüştü.",
    "Birlikte çalıştıkça gördük ki, tutkuyla üretilen projeler sadece bireysel doyum değil, aynı zamanda sürdürülebilir bir yaşam biçimi de sağlayabilir.",
    "Bu yolda ilerlerken Türkiye'de açık kaynak kültürünü ve geliştirici topluluklarını yaygınlaştırmak, herkesin katkı sunabileceği bir ekosistem inşa etmek öncelikli hedeflerimizden biri haline geldi."
  ];


  valuesHeader: string = "Temel Değerlerimiz";
  values: Array<{
    icon: string;
    title: string;
    description: string;
  }> = [
      {
        icon: "fa-solid fa-lightbulb",
        title: "Yenilikçilik",
        description:
          "Sürekli olarak sınırları zorluyor ve karmaşık sorunları çözmek için yeni yaklaşımlar keşfediyoruz.",
      },
      {
        icon: "fa-solid fa-handshake",
        title: "İşbirliği",
        description:
          "En iyi çözümlerin, farklı zihinler ortak hedefler doğrultusunda birlikte çalıştığında ortaya çıktığına inanıyoruz.",
      },
      {
        icon: "fa-solid fa-magnifying-glass",
        title: "Açıklık",
        description:
          "Kodumuzda, süreçlerimizde ve topluluk etkileşimlerimizde şeffaflığı benimsiyoruz.",
      },
      {
        icon: "fa-solid fa-universal-access",
        title: "Kapsayıcılık",
        description:
          "Her geçmişten ve beceri düzeyinden geliştiriciler için sıcak bir ortam yaratmaya kararlıyız.",
      },
      {
        icon: "fa-solid fa-certificate",
        title: "Kalite",
        description:
          "Kodumuzda, belgelendirmemizde ve topluluk desteğimizde yüksek standartları koruyoruz.",
      },
    ];

  teamHeader: string = "Ekibimizle Tanışın";
  teamIntro: string =
    "Topluluğumuz, projelerimize rehberlik etmek ve büyüyen topluluğumuzu beslemek için zamanlarını ve uzmanlıklarını sunan özverili gönüllülerden oluşan bir ekip tarafından yönetilmektedir.";
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
        role: "Topluluk Lideri, 3D Modelleme, Game Developer",
        avatarUrl: "developer-profile-photos/kubi.png",
        githubUrl: "https://github.com/gnuchanos",
        linkedinUrl: "https://www.linkedin.com/in/kubilay-yalcin-5b0233292/",
        twitterUrl: "",
      },
      {
        name: "Akif Esad Tosun",
        role: "Teknik Lider, Web Developer, Game Developer",
        avatarUrl: "developer-profile-photos/akif.jpg",
        githubUrl: "https://github.com/Akif-jpg",
        linkedinUrl: "https://www.linkedin.com/in/akif-tosun-81b205340/",
        twitterUrl: "https://x.com/AkifEsas",
      },
      {
        name: "Fatih Gök",
        role: "Game Tester, bug fixer",
        avatarUrl: "developer-profile-photos/fatihgok.png",
        githubUrl: "https://github.com/painoyunda",
        linkedinUrl: "",
        twitterUrl: "",
      },
    ];

  joinHeader: string = "Topluluğumuza Katılın";
  joinText: string =
    "Her zaman topluluğumuza katılacak tutkulu bireyler arıyoruz. İster geliştirici, ister tasarımcı, ister yazar, isterse açık kaynak konusunda sadece istekli olun, burada size göre bir yer var.";
  waysToContribute: Array<string> = [
    "Açık kaynak projelerimize kod katkısında bulunun",
    "Belgelendirmemizi geliştirmemize yardımcı olun",
    "Hataları bildirin ve özellikler önerin",
    "Kaynaklarımızı farklı dillere çevirin",
    "Topluluk tartışmalarına ve forumlara katılın",
    "Yeni katkıda bulunanlara mentorluk yapın",
    "Topluluğumuz ve projelerimiz hakkında bilgi yayın",
  ];
}
