import { inject, Injectable } from "@angular/core";
import { IHomeData } from "../models/i-home-data";
import { UniversalDataProvider } from "./universal-data-provider";

@Injectable()
export class HomeDataTrService implements IHomeData {
  universalDataProvider: UniversalDataProvider = inject(UniversalDataProvider);
  name = "Gnuchan Açık Kaynak Topluluğu";
  title = "Özgür Yazılımın Gücüyle Ortak Akıl ve Geliştirme";
  email = this.universalDataProvider.contactEmail;
  revolt: string = this.universalDataProvider.revoltAdress;
  phone = "Topluluk İletişim Kanallarımız (Discord, Forum vb.)";
  location = "Çevrimiçi ve Küresel Erişim";
  github = "https://github.com/gnuchan-community-example";
  linkedin = "LinkedIn Sayfamız Yakında!";

  communityMissionHeader: string = "Topluluk Misyonu";
  communityMission: string =
    "Misyonumuz, geliştiricilerin, tasarımcıların ve meraklıların kamu yararına etkili yazılımlar oluşturmak için iş birliği yaptığı canlı, kapsayıcı ve sürdürülebilir bir açık kaynak topluluğu oluşturmaktır. Şeffaflığa, sürekli öğrenmeye ve her türlü geçmişe sahip katkıda bulunanların bilgi paylaşmalarını, birlikte büyümelerini ve anlamlı dijital çözümler yaratmalarını sağlamaya kararlıyız.";

  skillItemsHeader: string = "Teknik Beceriler";
  /**
   * Areas where the community collectively gains experience or focuses.
   */
  skillItems = [
    {
      category: "Temel Prensipler",
      skill:
        "Açık Kaynak Kültürü, Ortak Geliştirme, Bilgi Paylaşımı, Şeffaflık",
    },
    {
      category: "Teknolojiler",
      skill:
        "Çeşitli programlama dilleri (örn: Python, Java, JavaScript, C++, Rust), Git, CI/CD Araçları (Jenkins, GitHub Actions), Konteynerleşme (Docker), Linux Ortamları, Veritabanları (SQL, NoSQL)",
    },
    {
      category: "Geliştirme Süreçleri",
      skill:
        "Çevik Metodolojiler, Kod İncelemesi (Code Review), Test Odaklı Geliştirme (TDD), Hata Takibi, Belgelendirme",
    },
    {
      category: "Topluluk Yönetimi",
      skill: "Etkinlik Planlama, İletişim Yönetimi, Katılımcı Desteği",
    },
  ];

  workingAreasHeader: string = "Çalışma Alanları";
  /**
   * Areas that the community is actively working on or aiming to contribute to.
   */
  workingAreas = [
    "Yeni Özgür Yazılım Projeleri Başlatma ve İnşa Etme",
    "Mevcut Açık Kaynak Projelerine Katkı Sağlama (Bug Fix, Yeni Özellikler)",
    "Teknolojik Trendler Üzerine Araştırma ve Prototipleme Çalışmaları",
    "Açık Kaynak Araçları ve Altyapıları Üzerine Bilgi ve Deneyim Paylaşımı",
    "Eğitim Materyalleri Geliştirme ve Mentorluk Programları Oluşturma",
    "Topluluk İçin Gerekli Araç ve Platformların Bakımı ve Geliştirilmesi",
  ];

  projectsHeader: string = "Projelerimiz";
  /**
   * Example projects completed or actively developed by the community.
   */
  projects = [
    {
      title: "The Last Arena Shoter",
      technologies: "Unity 2022.3.62f1",
      description:
        "Topluluk olarak ilk geliştirdiğimiz proje, basit bir arena shoter oyunu.",
    },
  ];
}
