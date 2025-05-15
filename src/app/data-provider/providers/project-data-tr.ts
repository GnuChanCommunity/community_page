import { Injectable } from "@angular/core";
import { IProjectData, Stats, Project } from "../models/i-projects-data";

@Injectable()
export class ProjectDataTrService implements IProjectData {
  projectList: Array<Project> = [
    {
      id: "proj-001",
      title: "First Unity Game",
      description:
        "Unity ile geliştirilen ilk FPS tabanlı arena savaş oyunu. Oyuncu, dört bir yandan gelen robot askerlerle mücadele eder. Düşmanlar dalgalar halinde gelir ve her dalga sonrası oyuncuya mola süresi tanınır. Bu sürede oyuncu, can, mermi ve çeşitli geliştirmeler satın alabilir.",
      category: "Oyun Geliştirme",
      technologies: ["Unity", "C#", "Blender"],
      completionDate: "2025-05-15",
      repoUrl: "https://github.com/Akif-jpg/firstunitygame",
      demoUrl: "https://gnuchanos.itch.io/the-lost-arena-shooter",
      docsUrl: "",
      imageUrl: "/project-photos/firstunitygame.png",
      contributors: 3,
      achievements: ["Wave tabanlı düşman sistemi", "Oyun içi market entegrasyonu"],
      featured: true,
      expanded: false,
    },
    {
      id: "proj-002",
      title: "GnuChanCommunity Web Sitesi",
      description:
        "GnuChan community topluluğu için geliştirilmiş bir web sitesidir. Projeler hakkında detaylı bilgiler içerir. Topluluk olarak üzerinde çalıştığımız bilgiler, düzenlediğimiz etkinlikler vb bu site üzerinden yayınlanır.",
      category: "Web Geliştirme",
      technologies: ["Angular", "TypeScript", "CSS"],
      completionDate: "2025-04-20",
      repoUrl: "https://github.com/GnuChanCommunity/community_page/tree/main",
      demoUrl: "https://gnuchanoscommunity.github.io",
      docsUrl: "https://github.com/GnuChanCommunity/community_page/blob/main/README.md",
      imageUrl: "/project-photos/gnuchan-website.png",
      contributors: 1,
      achievements: ["Çoklu dil desteği", "Sitenin yayınlanması","Google search console ekleme"],
      featured: true,
      expanded: false,
    }
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
    "Oyun Geliştirme",
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
