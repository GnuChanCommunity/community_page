import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";

import { DataProviderModule } from "../../data-provider/data-provider.module";
import { DataProviderFactoryService } from "../../data-provider/data-provider-factory.service";
import { ISponsorshipsData } from "../../data-provider/models/-sponsorships-data";

@Component({
  selector: "app-sponsorships",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    DataProviderModule
  ],
  templateUrl: "./contributors.component.html",
  styleUrl: "./contributors.component.css",
})
export class SponsorshipsComponent {
  dataProvider: DataProviderFactoryService = inject(DataProviderFactoryService);
  sponsorshipsData: ISponsorshipsData = this.dataProvider.getSponsorshipsData();
  data = this.sponsorshipsData;
}
