import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataProviderFactoryService } from "./data-provider-factory.service";
import { HeaderDataEnService } from "./providers/header-data-en.service";
import { HeaderDataTrService } from "./providers/header-data-tr.service";
import { HomeDataTrService } from "./providers/home-data-tr.service";
import { HomeDataEnService } from "./providers/home-data-en.service";
import { FooterDataEnService } from "./providers/footer-data-en.service";
import { FooterDataTrService } from "./providers/footer-data-tr.service";
import { AboutUsDataEnService } from "./providers/aboutus-data-en";
import { AboutUsDataTrService } from "./providers/aboutus-data-tr";
import { ProjectDataEnService } from "./providers/project-data-en";
import { ProjectDataTrService } from "./providers/project-data-tr";
import { SponsorshipsDataTrService } from "./providers/sponsorships-data-tr";
import { SponsorshipsDataEnService } from "./providers/sponsorships-data-en";

@NgModule({
  providers: [
    DataProviderFactoryService,
    HeaderDataEnService,
    HeaderDataTrService,
    HomeDataEnService,
    HomeDataTrService,
    AboutUsDataEnService,
    AboutUsDataTrService,
    ProjectDataEnService,
    ProjectDataTrService,
    SponsorshipsDataTrService,
    SponsorshipsDataEnService,
    FooterDataEnService,
    FooterDataTrService,
  ],
  declarations: [],
  imports: [CommonModule],
})
export class DataProviderModule {}
