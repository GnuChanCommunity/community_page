import { Routes } from "@angular/router";
import { HomeComponent } from "./page-contents/home/home.component";
import { AboutUsComponent } from "./page-contents/about-us/about-us.component";
import { ProjectsComponent } from "./page-contents/projects/projects.component";
import { ContributorsComponent } from "./page-contents/contributors/contributors.component";
import { ContactComponent } from "./page-contents/contact/contact.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutUsComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contributors", component: ContributorsComponent },
  { path: "contact", component: ContactComponent },
];
