import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: "app-contributors",
  imports: [
    CommonModule,
    // Angular material modules.
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: "./contributors.component.html",
  styleUrl: "./contributors.component.css",
})
export class ContributorsComponent {
  contributorsData = {
    contributorsHeader: "Destekçilerimiz",
    contributorsIntro:
      "Açık kaynak projelerimize maddi destek sağlayarak topluluğumuzu büyütmemize yardımcı olan değerli destekçilerimize teşekkür ederiz.",
    contributors: [
      {
        name: "Ahmet Yılmaz",
        role: "Platin Destekçi",
        bio: "Açık kaynak yazılımların gelişimine katkı sağlayan bir teknoloji tutkunu.",
        avatarUrl: "assets/images/contributors/ahmet.jpg",
        technologies: ["Angular", "Topluluk", "Bağışçı"],
        githubUrl: "https://github.com/ahmetyilmaz",
        linkedinUrl: "https://linkedin.com/in/ahmetyilmaz",
        personalUrl: "https://ahmetyilmaz.dev",
      },
      {
        name: "Ayşe Kaya",
        role: "Altın Destekçi",
        bio: "Toplulukları önemseyen ve teknolojiyi herkes için erişilebilir kılmayı hedefleyen bir profesyonel.",
        avatarUrl: "assets/images/contributors/ayse.jpg",
        technologies: ["Tasarım", "Topluluk"],
        githubUrl: "https://github.com/aysekaya",
        linkedinUrl: "https://linkedin.com/in/aysekaya",
      },
      // Daha fazla destekçi eklenebilir...
    ],
    joinTeamHeader: "Siz de Destekçi Olun",
    joinTeamText:
      "Projelerimize bağış yaparak açık kaynak gelişimini desteklemek ister misiniz? Destekçilerimiz arasında yer alın ve topluluğumuzu birlikte büyütelim.",
    joinTeamUrl: "https://github.com/your-organization/contribute",
  };
}
