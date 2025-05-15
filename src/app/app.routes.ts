import { Routes } from "@angular/router";
import { HomeComponent } from "./page-contents/home/home.component";
import { AboutUsComponent } from "./page-contents/about-us/about-us.component";
import { ProjectsComponent } from "./page-contents/projects/projects.component";
import { SponsorshipsComponent } from "./page-contents/contributors/contributors.component";
import { ContactComponent } from "./page-contents/contact/contact.component";
import { ProjectPageComponent } from "./page-contents/project-page/project-page.component";
import { PrerenderFallback } from "@angular/ssr";

export const routes: Routes = [
  { path: "",
    component: HomeComponent 
  },
  { path: "home", component: HomeComponent },
  { path: "about", 
    component: AboutUsComponent
  },
  { path: "projects", 
    component: ProjectsComponent 
  },
  { path: "contributors",
    component: SponsorshipsComponent 
  },
  { path: "contact",
    component: ContactComponent
  },
  {
    path: "project/:id",
    component: ProjectPageComponent,
  }
];
