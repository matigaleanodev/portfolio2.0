import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';
import { particles } from 'src/assets/animations/particles';
import { AppService } from '@shared/services/app.service';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { ToastrService } from 'ngx-toastr';
import { Container, Engine } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    AsyncPipe,
    RouterOutlet,
    HeaderComponent,
    NgxParticlesModule,
    LoadingSpinnerComponent,
  ],
  providers: [AppService],
})
export class AppComponent implements OnInit {
  title = 'Matias Galeano';

  id = 'tsparticles';
  particlesOptions = signal(particles);

  app = inject(AppService);
  toastr = inject(ToastrService);

  private readonly ngParticlesService = inject(NgParticlesService);

  loading: Signal<boolean> = toSignal(this.app.Loading$, {
    initialValue: true,
  });

  ngOnInit(): void {
    this.initData();
    this.ngParticlesService.init(async (engine: Engine) => {
      console.log(engine);
      await loadFull(engine);
    });
  }

  initData() {
    const storedProfile = sessionStorage.getItem('profile');

    if (storedProfile) {
      this.app._loading$.next(false);
      console.log('App Init');
    } else {
      this.app.onInitApi().subscribe({
        next: () => {
          console.log('App Init');
        },
        error: (err) => {
          this.toastr.error(
            'Ocurrió un error al iniciar la API, vuelva a intentar mas tarde',
            'Error al iniciar API'
          );
          this.app._loading$.next(false);
        },
      });
    }
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
