import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { particles } from 'src/assets/animations/particles';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { NgParticlesModule } from 'ng-particles';
import { AppService } from './services/app.service';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NgParticlesModule,
    LoadingSpinnerComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'Matias Galeano';

  id = 'tsparticles';
  particlesUrl = 'http://foo.bar/particles.json';
  particlesOptions = particles;

  app = inject(AppService);

  loading$ = this.app.Loading$;
  loaded$ = this.app.Loaded$;

  ngOnInit(): void {
    this.app.onInitApi().subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

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
