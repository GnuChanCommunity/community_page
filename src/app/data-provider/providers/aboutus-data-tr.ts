import { Injectable } from "@angular/core";
import { IAboutUsData } from "../models/i-aboutus-data";

/**
 * Turkish language implementation of AboutUs data
 */
@Injectable()
export class AboutUsDataTrService implements IAboutUsData {
  communityName: string = "Açık Kaynak Topluluğu";
  communityTagline: string = "Geleceği birlikte inşa ediyoruz";
  missionStatement: string =
    "Dünya genelindeki geliştiricileri ve kullanıcıları güçlendiren erişilebilir, yenilikçi yazılım çözümleri yaratmak.";

  storyHeader: string = "Hikayemiz";
  storyParagraphs: Array<string> = [
    "2020 yılında kurulan topluluğumuz, açık işbirliğinin gücüne inanan tutkulu bir geliştirici grubu olarak başladı.",
    "Arkadaşlar arasında bir hafta sonu projesi olarak başlayan girişimimiz, kısa sürede ortak vizyonumuzla birleşen küresel bir katılımcı topluluğuna dönüştü.",
    "Bugün, 30'dan fazla ülkeden üyemizle gurur duyuyoruz; hep birlikte teknolojiyi herkes için daha erişilebilir ve güçlü kılan araçlar geliştiriyoruz.",
    "Yolculuğumuz, yarattığımız her şeyde şeffaflık, kapsayıcılık ve mükemmellik ilkeleriyle tanımlanmıştır.",
  ];

  valuesHeader: string = "Temel Değerlerimiz";
  values: Array<{
    icon: string;
    title: string;
    description: string;
  }> = [
    {
      icon: "fa-lightbulb",
      title: "Yenilikçilik",
      description:
        "Sürekli olarak sınırları zorluyor ve karmaşık sorunları çözmek için yeni yaklaşımlar keşfediyoruz.",
    },
    {
      icon: "fa-users",
      title: "İşbirliği",
      description:
        "En iyi çözümlerin, farklı zihinler ortak hedefler doğrultusunda birlikte çalıştığında ortaya çıktığına inanıyoruz.",
    },
    {
      icon: "fa-lock-open",
      title: "Açıklık",
      description:
        "Kodumuzda, süreçlerimizde ve topluluk etkileşimlerimizde şeffaflığı benimsiyoruz.",
    },
    {
      icon: "fa-universal-access",
      title: "Kapsayıcılık",
      description:
        "Her geçmişten ve beceri düzeyinden geliştiriciler için sıcak bir ortam yaratmaya kararlıyız.",
    },
    {
      icon: "fa-certificate",
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
      name: "Alex Johnson",
      role: "Topluluk Lideri",
      avatarUrl: "/assets/images/team/alex.jpg",
      githubUrl: "https://github.com/alexj",
      linkedinUrl: "https://linkedin.com/in/alexjohnson",
      twitterUrl: "https://twitter.com/alexj",
    },
    {
      name: "Maria Garcia",
      role: "Teknik Lider",
      avatarUrl: "/assets/images/team/maria.jpg",
      githubUrl: "https://github.com/mariagarcia",
      linkedinUrl: "https://linkedin.com/in/mariagarcia",
      twitterUrl: "https://twitter.com/mariagarcia",
    },
    {
      name: "David Chen",
      role: "Belgelendirme Lideri",
      avatarUrl: "/assets/images/team/david.jpg",
      githubUrl: "https://github.com/davidc",
      linkedinUrl: "https://linkedin.com/in/davidchen",
      twitterUrl: "https://twitter.com/davidc",
    },
    {
      name: "Sarah Williams",
      role: "Topluluk İletişimi",
      avatarUrl: "/assets/images/team/sarah.jpg",
      githubUrl: "https://github.com/sarahw",
      linkedinUrl: "https://linkedin.com/in/sarahwilliams",
      twitterUrl: "https://twitter.com/sarahw",
    },
    {
      name: "James Wilson",
      role: "Eğitim Lideri",
      avatarUrl: "/assets/images/team/james.jpg",
      githubUrl: "https://github.com/jamesw",
      linkedinUrl: "https://linkedin.com/in/jameswilson",
      twitterUrl: "https://twitter.com/jamesw",
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
