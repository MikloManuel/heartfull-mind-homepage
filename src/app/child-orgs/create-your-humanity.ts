import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jhi-create-your-humanity',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['styles.scss'],
  template: `
    <div class="row">
      <div class="col-md-12">
        <div class="page-banner">
         <h1 class="display-4">Create Your Humanity</h1>
         <p class="lead">Eine interaktive Mindmap-Plattform zur Abbildung der menschlichen Diversität</p>
        </div>
          <div class="card mb-4">
            <div class="card-header bg-primary text-white">
              <h2>Die Vision</h2>
            </div>
            <div class="card-body">
              <p class="lead">
                Create Your Humanity ist ein ambitioniertes Projekt, das versucht, die Welt durch eine interaktive Mindmap abzubilden und zu
                strukturieren.
              </p>

              <p>
                Wir erstellen eine umfassende Karte, die den "Value Chain" unserer Erde darstellt – eine Vernetzung aller menschlichen
                Perspektiven und Erfahrungen. Ähnlich wie ein genealogischer Baum, aber für Ideen und Konzepte, schafft diese Struktur einen
                gemeinsamen Bezugsrahmen für die Menschheit.
              </p>

              <blockquote class="blockquote">
                <p>
                  Stellen Sie sich ein digitales "Freundschaftsbuch" vor, das die gesamte Menschheit umfasst – ein Ort, an dem jeder selbst
                  entscheiden kann, welche Informationen er teilen möchte und mit wem.
                </p>
              </blockquote>

              <div class="text-center my-4">
                <img
                  src="content/images/mindmap-humanity.svg"
                  alt="Create Your Humanity Mindmap"
                  class="img-fluid"
                  style="max-width: 700px;"
                />
              </div>
            </div>
          </div>

        <div class="card mb-4">
          <div class="card-header bg-info text-white">
            <h2>Technische Umsetzung</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Plattform & Architektur</div>
                  <div class="card-body">
                    <ul>
                      <li><strong>Basis:</strong> JHipster als Anwendungsgerüst</li>
                      <li><strong>Frontend:</strong> Angular für responsive Benutzeroberflächen</li>
                      <li><strong>Datenbank:</strong> MongoDB für flexible Datenstrukturen</li>
                      <li><strong>Mindmap-Engine:</strong> Integration von WiseMapping (wisemapping.com)</li>
                      <li><strong>Formular-Generierung:</strong> Angular-Formly für dynamische Formulare</li>
                      <li><strong>Authentifizierung:</strong> Keycloak für Single-Sign-On über alle Subprojekte</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">GitHub-Repositories</div>
                  <div class="card-body">
                    <p>Die Anwendung ist in zwei Hauptkomponenten unterteilt, die auf GitHub verfügbar sind:</p>
                    <div class="d-grid gap-2">
                      <a
                        href="https://github.com/createyourevent/createyourhumanity-angular.git"
                        target="_blank"
                        class="btn btn-outline-primary mb-2"
                      >
                        <i class="fab fa-github"></i> createyourhumanity-angular
                      </a>
                      <a
                        href="https://github.com/createyourevent/createyourhumanity-mindmap.git"
                        target="_blank"
                        class="btn btn-outline-primary"
                      >
                        <i class="fab fa-github"></i> createyourhumanity-mindmap
                      </a>
                    </div>
                    <p class="mt-3">
                      Diese modulare Struktur ermöglicht eine flexible Weiterentwicklung und Integration mit anderen Projekten im
                      Heartfull-Mind-Ökosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-success text-white">
            <h2>Das Mindmap-zu-Formular-Konzept</h2>
          </div>
          <div class="card-body">
            <p>
              Das Herzstück von Create Your Humanity ist die Transformation eines hierarchischen Mindmaps in eine interaktive Webform. Diese
              innovative Herangehensweise verbindet die intuitive Visualisierung von Ideen mit praktischer Datenerfassung.
            </p>

            <div class="row mt-4">
              <div class="col-md-4">
                <div class="card mb-3 h-100 border-primary">
                  <div class="card-header bg-primary text-white">1. Mindmap erstellen</div>
                  <div class="card-body">
                    <p class="card-text">
                      Administratoren oder Benutzer mit entsprechenden Rechten können das Grundgerüst der Mindmap erstellen und erweitern.
                      Jeder Knoten repräsentiert einen Aspekt der menschlichen Erfahrung oder Gesellschaft.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-project-diagram fa-3x text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-info">
                  <div class="card-header bg-info text-white">2. Formular generieren</div>
                  <div class="card-body">
                    <p class="card-text">
                      Das System transformiert die Mindmap-Struktur automatisch in ein verschachteltes Webformular. Die Hierarchie des
                      Mindmaps spiegelt sich in der Struktur des Formulars wider.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-file-alt fa-3x text-info"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-success">
                  <div class="card-header bg-success text-white">3. Daten erfassen & teilen</div>
                  <div class="card-body">
                    <p class="card-text">
                      Benutzer können ihre Informationen zu jedem relevanten Punkt des Mindmaps hinzufügen und entscheiden selbst, was sie
                      teilen möchten und mit wem.
                    </p>
                    <div class="text-center">
                      <i class="fas fa-share-alt fa-3x text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-warning text-dark">
            <h2>Das digitale Freundschaftsbuch</h2>
          </div>
          <div class="card-body">
            <p>
              Das Konzept erinnert an die Freundschaftsbücher, die früher in Schulklassen weitergereicht wurden. Jeder Schüler konnte
              persönliche Informationen, Hobbys und Gedanken eintragen.
            </p>

            <p>Create Your Humanity überträgt dieses Konzept ins digitale Zeitalter und erweitert es auf globaler Ebene:</p>

            <div class="row mt-3">
              <div class="col-md-6">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Nutzerbestimmte Datenkontrolle</div>
                  <div class="card-body">
                    <p>
                      Jeder Benutzer entscheidet selbst, welche persönlichen Informationen er zu welchem Thema im Mindmap freigeben möchte.
                      Dies schafft ein transparentes und selbstbestimmtes System der Datenweitergabe.
                    </p>
                    <p>
                      Diese Philosophie steht im Gegensatz zu herkömmlichen sozialen Medien, wo oft unklar ist, wer Zugriff auf welche Daten
                      hat.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Vielseitige Anwendungsbereiche</div>
                  <div class="card-body">
                    <p>Die gesammelten Daten können für verschiedene Zwecke genutzt werden:</p>
                    <ul>
                      <li>Daten-Plattformen für Forschung und Entwicklung</li>
                      <li>Ideen-Plattformen für Innovation und Kreativität</li>
                      <li>Event-Organisation in Verbindung mit Create Your Event</li>
                      <li>Persönliche Profile und berufliche Netzwerke</li>
                      <li>Thematische Communities zu spezifischen Interessen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-danger text-white">
            <h2>Integration mit anderen Projekten</h2>
          </div>
          <div class="card-body">
            <p>
              Create Your Humanity fungiert als Grundlage für weitere Projekte im Heartfull-Mind-Ökosystem. Durch die einheitliche
              Benutzerverwaltung mit Keycloak können Daten und Profile nahtlos zwischen den verschiedenen Plattformen ausgetauscht werden.
            </p>

            <div class="row mt-3">
              <div class="col-md-4">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Create Your Ideas</div>
                  <div class="card-body">
                    <p>
                      Die in Create Your Humanity erfassten Daten und Profile können als Grundlage für Ideenfindung und Innovation genutzt
                      werden.
                    </p>
                    <a routerLink="/child-orgs/create-your-ideas" class="btn btn-sm btn-outline-primary">Mehr erfahren</a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Create Your Event</div>
                  <div class="card-body">
                    <p>
                      Veranstaltungen können basierend auf gemeinsamen Interessen und Profilen organisiert werden, von Firmenevents bis hin
                      zu kulturellen Veranstaltungen.
                    </p>
                    <a routerLink="/child-orgs/create-your-events" class="btn btn-sm btn-outline-primary">Mehr erfahren</a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Zukünftige Erweiterungen</div>
                  <div class="card-body">
                    <p>
                      Das flexible System ermöglicht die Integration weiterer Anwendungen und Dienste, die auf der gemeinsamen Datenbasis
                      aufbauen können.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2>Sei Teil des Create Your Humanity Projekts</h2>
          </div>
          <div class="card-body text-center">
            <p class="lead">Helfen Sie mit, die digitale Repräsentation der Menschheit zu gestalten und zu erweitern.</p>
            <p>Ob als Entwickler, Inhaltsersteller oder einfach als Nutzer – jeder Beitrag bereichert dieses gemeinschaftliche Projekt.</p>
            <a href="/mindmap" class="btn btn-primary btn-lg mt-3">Zum Mindmap-Editor</a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CreateYourHumanityComponent {
  constructor() {}
}
