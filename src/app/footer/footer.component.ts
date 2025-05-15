// footer.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
// Angular Material Imports
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { DataProviderFactoryService } from "../data-provider/data-provider-factory.service";
import { inject } from "@angular/core";

import { DataProviderModule } from "../data-provider/data-provider.module";
import { IFooterData } from "../data-provider/models/i-footer-data";
import { UniversalDataProvider } from "../data-provider/providers/universal-data-provider";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    DataProviderModule,
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  name = "Your Name";

  dataProvider: DataProviderFactoryService = inject(DataProviderFactoryService);
  footerData: IFooterData = this.dataProvider.getFooterData();
  universalData: UniversalDataProvider = this.dataProvider.getUniversalDataProvider();
  // Sosyal medya linkleri
  socialLinks = [
    {
      name: "Github",
      url: this.universalData.githubUrl,
      ariaLabel: "Github",
    },
    {
      name: "Twitter",
      url: this.universalData.twitterUrl,
      ariaLabel: "Twitter",
    },
    {
      name: "Youtube",
      url: this.universalData.youtubeUrl,
      ariaLabel: "Youtube",
    },
  ];
}
