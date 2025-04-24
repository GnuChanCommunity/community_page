// home.component.ts
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";

import { DataProviderModule } from "../../data-provider/data-provider.module";
import { DataProviderFactoryService } from "../../data-provider/data-provider-factory.service";
import { IHomeData } from "../../data-provider/models/i-home-data";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
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
export class HomeComponent {
  dataProvider: DataProviderFactoryService = inject(DataProviderFactoryService);
  homeData: IHomeData = this.dataProvider.getHomeData();
}
