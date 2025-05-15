import { Injectable } from "@angular/core";
import { IHeaderData } from "../models/i-header-data";

@Injectable()
export class HeaderDataEnService implements IHeaderData {
  brandName = "Gnu Chan Community";
  menuItems = [
    { label: "Home", path: "/home" },
    { label: "AboutUs", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Sponsorships", path: "/contributors" },
    { label: "Contact", path: "/contact" },
  ];
}
