import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";

import { DataProviderModule } from "../../data-provider/data-provider.module";
import { DataProviderFactoryService } from "../../data-provider/data-provider-factory.service";
import { IHomeData } from "../../data-provider/models/i-home-data";
import { IAboutUsData } from "../../data-provider/models/i-aboutus-data";
import { UniversalDataProvider } from "../../data-provider/providers/universal-data-provider";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
  imports: [
    CommonModule,
    // Angular material modules.
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    // Special modules.
    DataProviderModule,
  ],
})
export class AboutUsComponent implements OnInit {
  dataProvider: DataProviderFactoryService = inject(DataProviderFactoryService);
  aboutData: IAboutUsData = this.dataProvider.getAboutUsData();
  universalData: UniversalDataProvider = inject(UniversalDataProvider);
  constructor() {}

  ngOnInit(): void {
    // Burada gerekirse dış kaynaklardan veri yüklenebilir
    // this.loadAboutData();
  }

  // Eğer verileri bir servis üzerinden alacaksanız
  // loadAboutData() {
  //   this.dataService.getAboutData().subscribe(data => {
  //     this.aboutData = data;
  //   });
  // }
}
