import { Component, HostListener } from '@angular/core';
import { ContactComponent } from "./components/contact/contact.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FooterComponent } from "./components/footer/footer.component";
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { NgxSpinnerModule } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  imports: [ContactComponent, NgxSpinnerModule,SkillsComponent, ProjectsComponent, AboutComponent, HeaderComponent, HeroComponent, FooterComponent, ExperienceComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1600,
        easing: 'ease-in-out',
        once: true,
        offset: 80
      });

    }
  }
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 300;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Built-in smooth scroll
  }
  title = 'my-portfolio';
}
