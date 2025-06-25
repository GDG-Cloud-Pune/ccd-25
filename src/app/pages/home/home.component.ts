import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SocialComponent } from '../../components/social/social.component';
import { VenueComponent } from '../../components/venue/venue.component';
import { WhatIsCcdComponent } from '../../components/what-is-ccd/what-is-ccd.component';
import { CoolFiguresComponent } from '../../components/cool-figures/cool-figures.component';
import { PastSpeakersComponent } from '../../components/past-speakers/past-speakers.component';
import { VideoFrameComponent } from '../../components/video-frame/video-frame.component';
import { PastPhotosComponent } from '../../components/past-photos/past-photos.component';
import { SponsorsComponent } from '../../components/sponsors/sponsors.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    SocialComponent,
    FooterComponent,
    VenueComponent,
    WhatIsCcdComponent,
    CoolFiguresComponent,
    PastSpeakersComponent,
    VideoFrameComponent,
    PastPhotosComponent,
    SponsorsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
