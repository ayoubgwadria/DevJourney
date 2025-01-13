import { Component, OnInit, Renderer2 } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'load', () => {
      const options = {
        strings: [
          `
        &lt;title&gt;Hello World&lt;/title&gt;
        `,
        ],
        typeSpeed: 40,
        backSpeed: 50,
        loop: true,
        contentType: 'html',
      };

      new Typed('.auto-type', options);
    });
  }
}
