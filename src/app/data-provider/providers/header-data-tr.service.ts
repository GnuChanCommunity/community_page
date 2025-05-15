import { Injectable } from "@angular/core";
import { IHeaderData } from "../models/i-header-data";

@Injectable()
export class HeaderDataTrService implements IHeaderData {
  brandName = "Gnu Chan Topluluk";
  menuItems = [
    { label: "Ana Sayfa", path: "/home" },
    { label: "Hakkımdıza", path: "/about" },
    { label: "Projeler", path: "/projects" },
    { label: "Destekçiler", path: "/contributors" },
    { label: "İletişim", path: "/contact" },
  ];
}
