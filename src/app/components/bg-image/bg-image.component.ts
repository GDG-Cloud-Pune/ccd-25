import {AfterViewInit, Component, ElementRef, inject, QueryList, ViewChildren} from '@angular/core';
import {animate, stagger} from "animejs";
import {AppService} from "../../services/app.service";


@Component({
  selector: 'app-bg-image',
  standalone: true,
  imports: [],
  templateUrl: './bg-image.component.html',
  styleUrl: './bg-image.component.scss'
})
export class BgImageComponent implements AfterViewInit {
  @ViewChildren('path') paths: QueryList<ElementRef>;
  app = inject(AppService)

  ngAfterViewInit() {
    if (!this.app.isBrowser) return;
    animate(this.paths.toArray().map(value => value.nativeElement), {
      rotate: {from: 0, to: 360},
      delay: stagger(100),
      duration: 1000 * 30,
      ease: 'inOutCubic',
      loop: true,
    });
  }
}
