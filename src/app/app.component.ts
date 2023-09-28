import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { particles } from 'src/assets/animations/particles';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { NgParticlesModule } from 'ng-particles';
import { slideInY } from 'src/assets/animations/slide-in-y.animation';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, HeaderComponent, NgParticlesModule],
  animations: [slideInY],
})
export class AppComponent {
  title = 'matias-galeano';

  id = 'tsparticles';
  particlesUrl = 'http://foo.bar/particles.json';
  particlesOptions = particles;

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
