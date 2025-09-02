import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'jhi-create-your-ideas',
  standalone: true,
  styleUrls: ['styles.scss'],  styles: [`
    .page-banner {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: linear-gradient(to bottom, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%);
      border-radius: 8px;
      text-align: center;
    }

    .page-banner h1 {
      font-size: 2.5rem;
      color: #ffffff;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -0.125rem;
      margin: 0;
      font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    }

    .page-banner p {
      margin-top: 1rem;
      color: #ffffff;
    }

    .divider {
      width: 80%;
      height: 2px;
      margin-top: 0.75rem;
      background: linear-gradient(
        90deg,
        rgba(255,255,255,0.2) 0%,
        rgba(255,255,255,0.8) 50%,
        rgba(255,255,255,0.2) 100%
      );
    }
  `],
  imports: [CommonModule, RouterModule],
  template: `
    <div class="row">
      <div class="col-md-12">
        <div class="page-banner">
          <div class="logo" [ngStyle]="{'background-image': 'url(' + logoUrl + ')'}"></div>
          <h1 class="display-4">Create Your Ideas</h1>
          <p class="lead">Eine kollaborative Plattform für die Evolution von Ideen</p>
          <div class="divider"></div>
        </div>

        <div class="card mb-4">

        <div class="card-header bg-primary text-white">
            <h2>Neudenken der Startup-Kultur</h2>
          </div>
          <div class="card-body">
            <p class="lead">
              Create Your Ideas bietet einen alternativen Ansatz zur traditionellen Unternehmensgründungskultur, der den Fokus auf die
              Ideenentwicklung und gemeinschaftliche Bewertung legt.
            </p>

            <p>
              Wir schaffen einen Raum, in dem Innovationen nicht in isolierten Unternehmenssilos entstehen, sondern in einem lebendigen
              Ökosystem aus aufeinander aufbauenden Konzepten – ähnlich einem Bienenstock kollektiver Intelligenz.
            </p>

            <blockquote class="blockquote">
              <p>"The evolution of the mind" – ein Zirkel aus Mindset, Mindmap, Mindsource und Mindevolution.</p>
            </blockquote>

            <div class="text-center my-4">
              <img src="content/images/idea-evolution.svg" alt="Idea Evolution Concept" class="img-fluid" style="max-width: 700px;" />
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-success text-white">
            <h2>Hierarchisches Ideen-Mindmap</h2>
          </div>
          <div class="card-body">
            <p>
              Im Herzen von Create Your Ideas steht ein hierarchisches Mindmap, das alle Konzepte in einer strukturierten, evolutionären
              Baumstruktur abbildet. Jede Idee kann sich verzweigen und neue Ableger hervorbringen.
            </p>

            <div class="row mt-4">
              <div class="col-md-4">
                <div class="card mb-3 h-100 border-primary">
                  <div class="card-header bg-primary text-white">Zentrale Idee</div>
                  <div class="card-body">
                    <p class="card-text">
                      Jede Idee beginnt als zentrales Topic im Mindmap. Diese Seed-Ideen sind der Ausgangspunkt für Innovation und
                      Weiterentwicklung.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-lightbulb fa-3x text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-info">
                  <div class="card-header bg-info text-white">Kollaborative Entwicklung</div>
                  <div class="card-body">
                    <p class="card-text">
                      Alle Nutzer unseres "Bienenstocks" können bestehende Ideen erweitern, kommentieren und neue Zweige hinzufügen, wodurch
                      eine organisch wachsende Struktur entsteht.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-users fa-3x text-info"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-success">
                  <div class="card-header bg-success text-white">Vererbung & Ressourcen</div>
                  <div class="card-body">
                    <p class="card-text">
                      Kind-Ideen können von Parent-Ideen "erben" – Ressourcen, Code-Pakete und Infrastruktur können geteilt werden, um neue
                      Innovationen zu beschleunigen.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-code-branch fa-3x text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-warning text-dark">
            <h2>Der Ideen-Evolutionsprozess</h2>
          </div>
          <div class="card-body">
            <p>Bei Create Your Ideas folgen wir einem natürlichen Evolutionsprozess für Innovationen:</p>

            <div class="row mt-3">
              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light"><strong>1.</strong> Ideen-Keimung</div>
                  <div class="card-body">
                    <p>
                      Jeder Nutzer kann eine initiale Idee einreichen – ein Produkt, eine Dienstleistung oder ein Konzept, das anderen
                      helfen könnte, ihre eigenen Vorhaben voranzubringen.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light"><strong>2.</strong> Bewertung & Feedback</div>
                  <div class="card-body">
                    <p>
                      Die Community bewertet Ideen, gibt Feedback und hilft bei der Identifizierung von Verbesserungspotentialen und
                      möglichen Anwendungsbereichen.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light"><strong>3.</strong> Verzweigung & Vererbung</div>
                  <div class="card-body">
                    <p>
                      Aufbauend auf einer Parent-Idee können Nutzer eigene Ableger entwickeln, die von den Ressourcen und dem Fortschritt
                      der ursprünglichen Idee profitieren.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light"><strong>4.</strong> Mehrwertschöpfung</div>
                  <div class="card-body">
                    <p>
                      Erfolgreiche Kind-Ideen schaffen Mehrwert sowohl für sich selbst als auch für die Parent-Idee, wodurch ein sich selbst
                      verstärkendes Ökosystem entsteht.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-danger text-white">
            <h2>Ressourcen-Sharing & Implementierung</h2>
          </div>
          <div class="card-body">
            <p>Ein zentrales Element von Create Your Ideas ist die Möglichkeit, Ressourcen zwischen verwandten Ideen zu teilen:</p>

            <div class="row mt-3">
              <div class="col-md-6">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Interface zum Ideenmindmap</div>
                  <div class="card-body">
                    <p>
                      Wir implementieren ein technisches Interface, das den Zugriff auf Ressourcen, Cloud-Dienste und andere Infrastrukturen
                      ermöglicht, die mit bestimmten Ideen verknüpft sind.
                    </p>
                    <p>
                      So können Entwickler beispielsweise Module oder Packages von Parent-Ideen in ihren eigenen Projekten verwenden und
                      weiterentwickeln.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Expertenintegration</div>
                  <div class="card-body">
                    <p>
                      Experten können sich für bestimmte Ideen registrieren und als "Ideenmitarbeiter" fungieren, indem sie ihr Fachwissen
                      und ihre Fähigkeiten einbringen.
                    </p>
                    <p>
                      Diese kollaborative Struktur ermöglicht es, Talent und Expertise dort einzusetzen, wo sie den größten Mehrwert
                      schaffen können.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-info text-white">
            <h2>Integration mit dem MMMM-Ökosystem</h2>
          </div>
          <div class="card-body">
            <p>Create Your Ideas ist tief in das Heartfull-Mind-Ökosystem integriert:</p>

            <div class="row mt-3">
              <div class="col-md-4">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Create Your Humanity</div>
                  <div class="card-body">
                    <p>
                      Nutzerprofile und Präferenzen aus Create Your Humanity helfen dabei, die richtigen Experten und Mitarbeiter für
                      spezifische Ideen zu finden.
                    </p>
                    <a routerLink="/child-orgs/create-your-humanity" class="btn btn-sm btn-outline-primary">Mehr erfahren</a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Create Your Event</div>
                  <div class="card-body">
                    <p>
                      Ideen können zu Events führen – von Hackathons bis zu Produktpräsentationen – die über Create Your Event organisiert
                      und koordiniert werden.
                    </p>
                    <a routerLink="/child-orgs/create-your-events" class="btn btn-sm btn-outline-primary">Mehr erfahren</a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Really-Fair</div>
                  <div class="card-body">
                    <p>
                      Vielversprechende Ideen können über unsere Really-Fair-Plattform Crowdfunding erhalten und von gemeinnützigen
                      Ressourcen profitieren.
                    </p>
                    <a routerLink="/child-orgs/really-fair-org" class="btn btn-sm btn-outline-primary">Mehr erfahren</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2>Werden Sie Teil der Ideenrevolution</h2>
          </div>
          <div class="card-body text-center">
            <p class="lead">
              Teilen Sie Ihre Innovationen, bauen Sie auf anderen Ideen auf und werden Sie Teil eines kollaborativen Ideennetzwerks.
            </p>
            <p>
              Bei Create Your Ideas geht es nicht um Konkurrenz, sondern um Evolution – jede Idee kann der Baustein für etwas noch Größeres
              sein.
            </p>
            <a href="#" class="btn btn-primary btn-lg mt-3">Idee einreichen</a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CreateYourIdeasComponent {
  logoUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setLogoBasedOnRoute();
  }

  private setLogoBasedOnRoute(): void {
    const currentRoute = this.router.url;

    // Pfade zu den Logos basierend auf der Route
    if (currentRoute.includes('heartfull-mind')) {
      this.logoUrl = './images/logos/svg_output/heartfull-mind.svg';
    } else if (currentRoute.includes('create-your-humanity')) {
      this.logoUrl = './images/logos/svg_output/createyourhumanity.svg';
    } else if (currentRoute.includes('create-your-event')) {
      this.logoUrl = './images/logos/svg_output/createyourevent.svg';
    } else if (currentRoute.includes('create-your-ideas')) {
      this.logoUrl = './images/logos/svg_output/createyourideas.svg';
    } else if (currentRoute.includes('create-your-senses')) {
      this.logoUrl = './images/logos/svg_output/createyoursenses.svg';
    } else if (currentRoute.includes('really-fair')) {
      this.logoUrl = './images/logos/svg_output/really-fair.svg';
    }
  }
}
