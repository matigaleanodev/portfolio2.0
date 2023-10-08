import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';
import { particles } from 'src/assets/animations/particles';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { NgParticlesModule } from 'ng-particles';
import { AppService } from '@shared/services/app.service';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { FirebaseService } from '@shared/services/firebase.service';

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
  firebase = inject(FirebaseService);

  loading$ = this.app.Loading$;

  ngOnInit(): void {
    this.firebase.getAllImages().subscribe((res) => console.log(res));
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
