import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';
import { particles } from 'src/assets/animations/particles';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { NgParticlesModule } from 'ng-particles';
import { AppService } from '@shared/services/app.service';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    AsyncPipe,
    RouterOutlet,
    HeaderComponent,
    NgParticlesModule,
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

  loading: Signal<boolean> = toSignal(this.app.Loading$, {
    initialValue: true,
  });

  ngOnInit(): void {
    this.initData();
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
