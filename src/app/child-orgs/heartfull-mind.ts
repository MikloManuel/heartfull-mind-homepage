import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jhi-heartfull-mind',
  standalone: true,
  styleUrls: ['styles.scss'],
  imports: [CommonModule, RouterModule],
  template: `
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2>Unsere Vision</h2>
          </div>
          <div class="card-body">
            <p class="lead">
              Heartfull Mind Et AII repräsentiert ein neues Konzept für virtuelle Organisationen: Eine flexible, netzwerkartige Struktur,
              die die festgefahrenen hierarchischen Strukturen der traditionellen Geschäftswelt überwindet.
            </p>

            <p>
              In einer Zeit, in der Schulen noch nach Lehrplänen von 1968 unterrichten und Unternehmen an starren Hierarchien festhalten,
              brauchen wir einen frischen Ansatz. Unsere dynamische und vernetzte Welt verlangt nach neuen Organisationsformen.
            </p>

            <blockquote class="blockquote">
              <p>
                Die vier M's in unserem Namen stehen für "Mindmap, Mindset, Mindlist und Mindevolution" - ein neu definiertes "Mindfield",
                das die Tragödie der fehlenden Menschlichkeit in vielen Systemen überwinden soll.
              </p>
            </blockquote>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-info text-white">
            <h2>Das Konzept der vernetzten Organisation</h2>
          </div>
          <div class="card-body">
            <p>
              Wir stellen uns Heartfull Mind als ein Netzwerk vor, dessen Zentrum <strong>www.heartfull-mind.space</strong> bildet. Von
              diesem Mittelpunkt gehen verschiedene Subprojekte aus, die eigenständig funktionieren, aber Teil eines größeren Ganzen sind.
            </p>

            <p>
              Dieses Netzwerk folgt dem Prinzip einer Matroschka oder einer Zwiebel: Schicht um Schicht bauen wir eine digitale Struktur
              auf, die Schutz und Entfaltungsmöglichkeiten zugleich bietet.
            </p>

            <div class="text-center mb-4 mindmap-org">
              <div style="width: 960px; height: 720px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:960px; height:720px" src="https://lucid.app/documents/embedded/2a0430a4-ced7-4345-b526-e7d16a924a8b" id="4KYM5G3hrPTr"></iframe></div>
            </div>

            <p>
              Jedes Subprojekt ist ein Zahnrad im Getriebe von "Heartfull Mind", mit eigenen Rechten und Pflichten, aber vor allem mit einer
              gemeinsamen Vision: Die Verantwortung in die Hände unserer Benutzer zu legen, die wir lieber als "Familienangestellte" in
              unserer virtuellen Familien-AG betrachten.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-success text-white">
            <h2>Unsere Suborganisationen</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-3 h-100 border-primary">
                  <div class="card-header bg-primary text-white">Headquarters</div>
                  <div class="card-body">
                    <h5 class="card-title">MMMM - Heartfull Mind Et AII</h5>
                    <h6 class="card-subtitle mb-2 text-muted">www.heartfull-mind.space</h6>
                    <p class="card-text">
                      Das zentrale Projekt, das alle anderen miteinander verbindet und koordiniert. Hier werden die grundlegenden Ideen und
                      Werte definiert und geteilt.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-info">
                  <div class="card-header bg-info text-white">Primäres Subprojekt</div>
                  <div class="card-body">
                    <h5 class="card-title">Create Your Humanity</h5>
                    <h6 class="card-subtitle mb-2 text-muted">www.createyourhumanity.space</h6>
                    <p class="card-text">
                      Die Basis unserer vernetzten Projekte. Hier entsteht die Plattform für interaktive Mindmaps, die menschliche
                      Perspektiven und Ideen miteinander verbinden.
                    </p>
                    <a routerLink="/child-orgs/create-your-humanity" class="btn btn-sm btn-outline-info">Mehr erfahren</a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-success">
                  <div class="card-header bg-success text-white">Sekundäres Subprojekt</div>
                  <div class="card-body">
                    <h5 class="card-title">Create Your Ideas</h5>
                    <h6 class="card-subtitle mb-2 text-muted">www.createyourideas.space</h6>
                    <p class="card-text">
                      Die Plattform für den Austausch und die Entwicklung innovativer Ideen, die auf den Grundlagen von Create Your Humanity
                      aufbaut.
                    </p>
                    <a routerLink="/child-orgs/create-your-ideas" class="btn btn-sm btn-outline-success">Mehr erfahren</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-4">
                <div class="card mb-3 h-100 border-warning">
                  <div class="card-header bg-warning text-dark">Tertiäres Subprojekt</div>
                  <div class="card-body">
                    <h5 class="card-title">Create Your Event</h5>
                    <h6 class="card-subtitle mb-2 text-muted">www.createyourevent.space</h6>
                    <p class="card-text">
                      Die praktische Umsetzung von Ideen in reale Ereignisse und Zusammenkünfte, die Menschen physisch zusammenbringen und
                      Gemeinschaften stärken.
                    </p>
                    <a routerLink="/child-orgs/create-your-events" class="btn btn-sm btn-outline-warning">Mehr erfahren</a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-danger">
                  <div class="card-header bg-danger text-white">Zukünftiges Projekt</div>
                  <div class="card-body">
                    <h5 class="card-title">Create Your Sense</h5>
                    <h6 class="card-subtitle mb-2 text-muted">In Entwicklung</h6>
                    <p class="card-text">
                      Ein Projekt zur Erforschung und Förderung von Bedeutung und Sinnhaftigkeit im digitalen Zeitalter.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100 border-secondary">
                  <div class="card-header bg-secondary text-white">Ideenfundament</div>
                  <div class="card-body">
                    <h5 class="card-title">Really-Fair-Org</h5>
                    <h6 class="card-subtitle mb-2 text-muted">www.really-fair.org</h6>
                    <p class="card-text">
                      Der konzeptuelle Ursprung: Ein Pool an Experten, die mit Wissen und Motivation zu einem faireren System beitragen
                      wollen.
                    </p>
                    <a routerLink="/child-orgs/really-fair-org" class="btn btn-sm btn-outline-secondary">Mehr erfahren</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-dark text-white">
            <h2>Das Prinzip des freien Willens</h2>
          </div>
          <div class="card-body">
            <p>
              Alle unsere Projekte basieren auf einem fundamentalen Prinzip: dem freien Willen. Bei uns <em>muss</em> man nichts - man
              <em>kann</em>, und wenn man kann, dann <em>darf</em> man.
            </p>

            <blockquote class="blockquote">
              <p>
                "Müssen" ist das einzige Modalverb, das den freien Willen in die Knie zwingt. Meinungsfreiheit ohne freien Willen kann nicht
                sein - aus logischer Sicht.
              </p>
            </blockquote>

            <p>
              Unser Ansatz sieht die virtuelle Welt als Treiber für die materielle Welt - als Filter, der die Regeln des heutigen
              öffentlichen Marktes nicht konkurriert, sondern ausbalanciert. Die Kommunikation geschieht indirekt, und die Organisation
              funktioniert wie ein Spiel - eine Gamifizierung des kapitalistischen Systems.
            </p>

            <p>
              Ähnlich wie bei Nintendo ermöglichen wir nach einem Absturz einen Reset. In einer Zeit, in der in vielen Bereichen die Puste
              ausgegangen ist - teilweise durch die rasante Digitalisierung - bieten wir einen frischen Neustart.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2>Werde Teil unserer Vision</h2>
          </div>
          <div class="card-body text-center">
            <p class="lead">Du musst dich bei uns nicht anmelden, aber du kannst es... ungeniert!</p>
            <p>Werde Teil unserer virtuellen Familie und gestalte mit uns die Zukunft der vernetzten Organisation.</p>
            <a href="#" class="btn btn-primary btn-lg mt-3">Jetzt beitreten</a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HeartfullMindComponent {
  constructor() {}
}
