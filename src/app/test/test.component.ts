import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const options = {
      strings: [
        `<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Hello World&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;p&gt;This is a simple HTML page displaying 'Hello World'&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>`
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      contentType: 'html',
    };

    const typed = new Typed('.auto-type', options);
  }
}
