// header.component.ts
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";

// Angular Material Imports
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

import { DataProviderModule } from "../data-provider/data-provider.module";
import { DataProviderFactoryService } from "../data-provider/data-provider-factory.service";
import { IHeaderData } from "../data-provider/models/i-header-data";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  imports: [
    CommonModule,
    // Angular material modules.
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    // Special modules.
    DataProviderModule,
  ],
})
export class HeaderComponent {
  dataProvider: DataProviderFactoryService = inject(DataProviderFactoryService);
  headerData: IHeaderData = this.dataProvider.getNavbarData();
}
