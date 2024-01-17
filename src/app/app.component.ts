import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  currentStyle = 'background: radial-gradient(600px at 158px 748px, rgba(29, 78, 216, 0.15), transparent 80%);';

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
  }

  onMoveMouse(event: MouseEvent) {
    this.currentStyle = `background: radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%);`;
  }

  clickTest() {
    console.log('clicked');
  }

}
