import { Injectable } from "@angular/core";
import { IProjectData, Stats, Project } from "../models/i-projects-data";

@Injectable()
export class ProjectDataTrService implements IProjectData {
  projectList: Array<Project> = [
    {
      id: "proj-001",
      title: "Sanayimatik Yönetim Sistemi",
      description:
        "Sanayi üretim süreçlerini dijitalleştiren açık kaynak yönetim yazılımı.",
      category: "Web Geliştirme",
      technologies: ["Flask", "MySQL", "Bootstrap", "Docker", "Jenkins"],
      completionDate: "2024-12-01",
      repoUrl: "https://github.com/sanayimatik/sistem",
      demoUrl: "https://demo.sanayimatik.org",
      docsUrl: "https://docs.sanayimatik.org",
      imageUrl: "assets/images/projects/sanayimatik.png",
      contributors: 5,
      achievements: ["Veri izlenebilirliği", "Gerçek zamanlı üretim takibi"],
      featured: true,
      expanded: false,
    },
    {
      id: "proj-002",
      title: "HTMLUnit Test Suite",
      description: "HTMLUnit ile entegre çalışan test ve raporlama altyapısı.",
      category: "DevOps Araçları",
      technologies: ["Java", "JUnit", "HTMLUnit", "Jenkins"],
      completionDate: "2025-04-15",
      repoUrl: "https://github.com/test-suite/htmlunit-monitor",
      imageUrl: "assets/images/projects/htmlunit.png",
      contributors: 4,
      achievements: ["PDF/HTML raporlama", "Anotasyon tabanlı test analizi"],
      featured: false,
      expanded: false,
    },
  ];

  pageTitle = "Projelerimiz";
  pageDescription =
    "Açık kaynak topluluğumuzun geliştirdiği projeler listelenmektedir.";
  featuredHeader = "Öne Çıkan Projeler";
  allProjectsHeader = "Tüm Projeler";
  statusHeader = "Durum";
  noResultsText = "Aradığınız kriterlere uygun proje bulunamadı.";

  categories: Array<string> = [
    "Web Geliştirme",
    "Mobil Uygulama",
    "Veri Bilimi",
    "DevOps Araçları",
    "Yapay Zeka",
    "UI/UX Kütüphaneleri",
  ];

  ctaHeader = "Topluluğa Katılın";
  ctaText =
    "Projelerimize katkıda bulunmak ister misiniz? Hemen GitHub üzerinden forka başlayın!";

  stats: Stats = {
    statsHeader: "Platform İstatistikleri",
    totalProjects: "Toplam Proje",
    totalContributors: "Katkıda Bulunanlar",
    githubStars: "GitHub Yıldızları",
    totalDownloads: "Toplam İndirme",
  };
}
