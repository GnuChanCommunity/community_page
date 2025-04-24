import { Injectable } from "@angular/core";
import { IHeaderData } from "../models/i-header-data";
import path from "node:path/posix";

@Injectable()
export class HeaderDataTrService implements IHeaderData {
  brandName = "Gnu Chan Topluluk";
  menuItems = [
    { label: "Ana Sayfa", path: "/home" },
    { label: "Hakkımdıza", path: "/about" },
    { label: "Projeler", path: "/projects" },
    { label: "Destekciler", path: "/contributors" },
    { label: "İletişim", path: "/contact" },
  ];
}
