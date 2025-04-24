import { Injectable } from "@angular/core";
import { IHeaderData } from "../models/i-header-data";
import { IFooterData } from "../models/i-footer-data";

@Injectable()
export class FooterDataEnService implements IFooterData {
  footerHeader: string = "© 2025 GnuChanCommunity | All Rights Reserved";
  footerInfo: string =
    "This website is developed by the community to encourage open source contributions. To contribute, provide feedback, or learn more about our projects, please feel free to contact us.";
}
