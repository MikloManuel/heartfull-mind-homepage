import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jhi-really-fair-org',
  standalone: true,
  styleUrls: ['styles.scss'],
  imports: [CommonModule, RouterModule],
  template: `
    <div class="row">
      <div class="col-md-12">
        <h1 class="display-4">Really-Fair.org</h1>
        <p class="lead">Eine gemeinwohlorientierte Crowdfunding-Plattform</p>

        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2>Echte Fairness für innovative Ideen</h2>
          </div>
          <div class="card-body">
            <p class="lead">
              Really-Fair.org agiert als gemeinnützige Stiftung und Crowdfunding-Plattform, die vielversprechende Ideen und Projekte
              fördert, die zum Gemeinwohl beitragen.
            </p>

            <p>
              Im Gegensatz zu herkömmlichen Finanzierungsmodellen legen wir Wert auf Transparenz, faire Verteilung von Ressourcen und
              nachhaltige Entwicklung von Projekten.
            </p>

            <blockquote class="blockquote">
              <p>"Eine wirklich faire Erde für eine bessere Zukunft"</p>
            </blockquote>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-success text-white">
            <h2>Unser Finanzierungsmodell</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-3 h-100 border-primary">
                  <div class="card-header bg-primary text-white">Gemeinschaftliche Finanzierung</div>
                  <div class="card-body">
                    <p class="card-text">
                      Projekte werden von einer Gemeinschaft Gleichgesinnter unterstützt, die an den Wert und das Potenzial der Idee
                      glauben.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-hand-holding-usd fa-3x text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-info">
                  <div class="card-header bg-info text-white">Transparenz</div>
                  <div class="card-body">
                    <p class="card-text">Volle Transparenz über Finanzströme, Mittelverwendung und Projektstatus für alle Beteiligten.</p>
                    <div class="text-center">
                      <i class="fas fa-search-dollar fa-3x text-info"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-success">
                  <div class="card-header bg-success text-white">Gemeinwohlorientierung</div>
                  <div class="card-body">
                    <p class="card-text">
                      Förderung von Projekten, die nicht nur wirtschaftlich erfolgreich sein können, sondern auch einen positiven
                      gesellschaftlichen Beitrag leisten.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-globe fa-3x text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ReallyFairOrgComponent {
  constructor() {}
}
