import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jhi-create-your-senses',
  standalone: true,
  styleUrls: ['styles.scss'],
  imports: [CommonModule, RouterModule],
  template: `
    <div class="row">
      <div class="col-md-12">
        <h1 class="display-4">Create Your Senses</h1>
        <p class="lead">Eine Plattform für Sinnstiftung und persönliches Wachstum</p>

        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2>Die Suche nach Sinn</h2>
          </div>
          <div class="card-body">
            <p class="lead">
              Create Your Senses widmet sich der wichtigsten Frage im Leben: Wie finden wir Sinn und Erfüllung in einer zunehmend komplexen
              und schnelllebigen Welt?
            </p>

            <p>
              Unsere Plattform verbindet Menschen, die ihren Horizont sinnvoll erweitern möchten, mit Lebensbegleitern, Coaches und Experten
              aus verschiedenen Bereichen der Persönlichkeitsentwicklung und Sinnfindung.
            </p>

            <blockquote class="blockquote">
              <p>"Der Mensch kann fast alles ertragen, solange er einen Sinn darin erkennt." - Viktor Frankl</p>
            </blockquote>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-success text-white">
            <h2>Unser Angebot</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-3 h-100 border-primary">
                  <div class="card-header bg-primary text-white">Lebensbegleiter</div>
                  <div class="card-body">
                    <p class="card-text">
                      Erfahrene Mentoren und Berater bieten persönliche Begleitung auf dem Weg zu mehr Sinn und Erfüllung.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-hands-helping fa-3x text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-info">
                  <div class="card-header bg-info text-white">Coaches & Experten</div>
                  <div class="card-body">
                    <p class="card-text">
                      Spezialisierte Coaches für verschiedene Lebensbereiche helfen dabei, individuelle Potenziale zu erkennen und zu
                      entfalten.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-brain fa-3x text-info"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-success">
                  <div class="card-header bg-success text-white">Gemeinschaften</div>
                  <div class="card-body">
                    <p class="card-text">
                      Gleichgesinnte finden und mit ihnen in Austausch treten – denn Sinnfindung ist oft ein gemeinschaftlicher Prozess.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-users fa-3x text-success"></i>
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
export class CreateYourSensesComponent {
  constructor() {}
}
