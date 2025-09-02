import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jhi-create-your-events',
  standalone: true,
  styleUrls: ['styles.scss'],
  styles: [`
    :host {
      display: block;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4eff7 100%);
      min-height: 100vh;
      padding: 20px;
    }

    .video-container {
      padding: 20px;
      background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
      border-radius: 10px;
    }

    video {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }

    .card {
      transition: transform 0.3s, box-shadow 0.3s;
      border: none;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      margin-bottom: 25px;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }

    .card-header {
      border-bottom: none;
      padding: 15px 20px;
    }

    .card-header.bg-primary {
      background: linear-gradient(45deg, #4e73df 0%, #2e59d9 100%) !important;
    }

    .card-header.bg-success {
      background: linear-gradient(45deg, #1cc88a 0%, #13855c 100%) !important;
    }

    .card-header.bg-info {
      background: linear-gradient(45deg, #36b9cc 0%, #258391 100%) !important;
    }

    .card-header.bg-warning {
      background: linear-gradient(45deg, #f6c23e 0%, #dda20a 100%) !important;
    }

    .card-header.bg-danger {
      background: linear-gradient(45deg, #e74a3b 0%, #be2617 100%) !important;
    }

    .card-header.bg-secondary {
      background: linear-gradient(45deg, #858796 0%, #60616f 100%) !important;
    }

    .card-header.bg-dark {
      background: linear-gradient(45deg, #5a5c69 0%, #373840 100%) !important;
    }

    .card-header.bg-light {
      background: linear-gradient(45deg, #f8f9fc 0%, #e2e6f3 100%) !important;
      color: #6e707e;
    }

    .card-body {
      background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
      padding: 25px;
    }
  `],
  imports: [CommonModule, RouterModule],
  template: `
    <div class="row">
      <div class="col-md-12">
        <div class="page-banner">
         <h1 class="title">Create Your Event</h1>
          <p class="lead">Ein runder Tisch für Organisatoren, Verkäufer, Dienstleistern und natürlich den Event-Kunden..</p>
        </div>
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2>Event-Präsentation</h2>
          </div>
          <div class="card-body video-container">
            <video
              controls
              autoplay
              muted
              width="100%"
              class="rounded shadow"
              preload="metadata"
            >
              <source src="https://heartfull-mind.space/videos/createyourevent.mp4" type="video/mp4">
              Ihr Browser unterstützt das Video-Element nicht.
            </video>
          </div>
        </div>


        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2>Zusammenfassung und Vision</h2>
          </div>
          <div class="card-body">
            <p class="lead">
              Unser primäres Ziel ist es, eine Plattform zu schaffen, die Menschen zusammenbringt und echte Verbindungen fördert. In einer
              Welt, die immer mehr von virtuellen Beziehungen dominiert wird, möchten wir der Menschheit die Möglichkeit geben, sich wieder
              persönlich zu treffen und gemeinsam zu feiern.
            </p>

            <p>
              Wir glauben, dass es wichtig ist, dass unsere Plattform transparent, fair und sozial ist. Wir wollen, dass die Menschen sich
              sicher und geschützt fühlen, wenn sie auf unserer Plattform interagieren. Deshalb setzen wir auf eine klare und offene
              Kommunikation sowie auf eine transparente Abwicklung von Geschäften.
            </p>

            <p>
              Unser Ziel ist es, eine Plattform zu schaffen, die auf Logik und Vernunft basiert, aber auch die Bedeutung von menschlichen
              Beziehungen und Verbindungen anerkennt. Wir sind überzeugt, dass dies der Schlüssel zu einer erfolgreichen Plattform ist, die
              dazu beiträgt, echte Beziehungen und Verbindungen zu fördern.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-info text-white">
            <h2>Zielgruppen</h2>
          </div>
          <div class="card-body">
            <p>
              Unsere Plattform richtet sich an alle Menschen, die gerne feiern und neue Leute kennenlernen möchten. Wir bieten eine breite
              Palette von Events an, die für jeden Geschmack und jedes Budget geeignet sind. Unsere Kunden und Gäste kommen aus allen
              Altersgruppen, Geschlechtern und sozialen Schichten. Wir möchten eine Plattform schaffen, die für alle zugänglich und
              benutzerfreundlich ist.
            </p>

            <h3>Usergruppen auf unserer Plattform</h3>

            <div class="row mt-4">
              <div class="col-md-6">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-success text-white">Gäste</div>
                  <div class="card-body">
                    <p>
                      Als Gast können Sie sich auf unserer Plattform registrieren, um Events zu buchen und Tickets zu kaufen. Sie können
                      auch Kommentare abgeben und Events bewerten. Der Organisator kann Änderungen am Event vornehmen, solange es noch nicht
                      definitiv durchgeführt wird. Es entstehen nur Kosten durch Ticket- und Reservierungsverkäufe.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-warning text-dark">Organisatoren</div>
                  <div class="card-body">
                    <p>
                      Als Organisator können Sie Events auf unserer Plattform ausschreiben und verwalten. Sie haben die Möglichkeit, die
                      minimale und maximale Anzahl von Besuchern anzugeben und können Produkte und Dienstleistungen in Anspruch nehmen. Sie
                      können den Event verwalten und alle Kommentare und Bewertungen einsehen. Ihre und unsere Aufgabe ist es nun, den Event
                      unter das Volk zu bringen und zu bewerben. Sobald die minimale Anzahl von Nutzern erreicht ist und alle Produkte und
                      Dienstleistungen bestätigt wurden, kann der Event auf definitiv gestellt werden.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-danger text-white">Dienstleister</div>
                  <div class="card-body">
                    <p>
                      Als Dienstleister können Sie bei uns Ihr Profil registrieren und Servicemappen erstellen. Sie können Ihre Kosten
                      angeben und Ihre Adresse hinterlegen.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-secondary text-white">Lieferanten</div>
                  <div class="card-body">
                    <p>
                      Als Lieferant haben Sie die Möglichkeit, Ihre Produkte auf unserer Plattform zu verkaufen und zu vermieten. Sie können
                      die Ware, die Sie angeboten haben, gratis ausschreiben.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-dark text-white">Organisationen</div>
                  <div class="card-body">
                    <p>
                      Wenn Sie ein Restaurant, einen Club, ein Hotel oder ein Gebäude welches sich für Events eignen würde, können Sie dies
                      auch bei uns tun. Für jede Form von Lokalität wird es ebenfalls eine eigene Internetseite geben, wo man seine
                      anzubietende Lokalität bewerben kann.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2>Marktanalyse</h2>
          </div>
          <div class="card-body">
            <p>
              Obwohl es doch schon sehr viele Plattformen im Eventbereich gibt, denken wir dass wir mit unserem Ansatz kurzum gesagt die
              einzigen in so weit, dass wir nicht nur ein Ticketanbieter für diverse Events, oder eine Art Managementfirma für Bands, Dj's
              und weiteres sind, sondern wir schauen uns vielmehr als logische Schlussfolgerung für das was heute möglich ist, wenn man es
              vor allem in Bezug auf Transparenz, Zusammengehörigkeitsgefühl, Mitverantwortung und weitere Punkte dies betrachtet.
            </p>

            <p>
              Wir möchten einfach kurzum mithilfe des Internets die unendlichen Möglichkeiten des Internets auszunutzen, um so zusammen
              jeweils Events zu planen, die durch eben diese gemeinsame Planung zu einem vollen Erfolg für alle Beteiligten, sprich den
              Organisator, den Verkäufer oder Vermieter und auch last but not least für alle die diesen Event dann miterleben dürfen.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-info text-white">
            <h2>Angebote und Funktionen</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="card mb-3">
                  <div class="card-header bg-light">Registrierung & Profilverwaltung</div>
                  <div class="card-body">
                    <ul>
                      <li>Benutzer können sich auf der Plattform registrieren und ihr Profil verwalten</li>
                      <li>Unterteilung von Benutzern in Organisator, Lieferanten, Dienstleister und Eventteilnehmer</li>
                      <li>
                        Verwaltung von Organisationsprofilen, um Verfügbarkeit und Nutzungsbedingungen für lokale Mietobjekte
                        bereitzustellen
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card mb-3">
                  <div class="card-header bg-light">Eventplanung</div>
                  <div class="card-body">
                    <ul>
                      <li>
                        Benutzer können einen Event erstellen, um ihre Vorstellungen und Anforderungen auf der Plattform zu veröffentlichen
                      </li>
                      <li>Organisator kann Veranstaltungsorte aus einer Liste von registrierten lokalitäten auswählen</li>
                      <li>
                        Eine Liste von Verkäufern, Vermietern und Dienstleistern bietet Einweg- oder Paket-Lösungen in Bezug auf benötigte
                        Materialien, Ressourcen, Beleuchtung, Ton, Catering usw.
                      </li>
                      <li>
                        Die Benutzeroberfläche ermöglicht die Zusammenstellung benutzerdefinierter Pakete, automatische Buchungen und
                        Zahlungen
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="card mb-3">
                  <div class="card-header bg-light">Social Features</div>
                  <div class="card-body">
                    <ul>
                      <li>Benutzer können Feedback und Bewertungen abgeben</li>
                      <li>
                        Benutzer können Social-Media-Sharing- und Marketingfunktionen nutzen, um Veranstaltungen zu teilen, zu bewerben und
                        zu verwalten
                      </li>
                      <li>
                        Organisatoren können Einladungen, Sofortnachrichten und Updates an registrierte Benutzer senden, um ihr Event in der
                        Plattform zu fördern
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card mb-3">
                  <div class="card-header bg-light">Buchung und Zahlungsverarbeitung</div>
                  <div class="card-body">
                    <ul>
                      <li>System zur sicheren Verarbeitung von Buchungen, Zahlungen, Zahlungen in Raten und Vorauszahlungen</li>
                      <li>Integration von Akzeptanzmethoden wie Kreditkarten, Paypal und Bitcoin (falls benötigt)</li>
                      <li>Benutzer können Verfügbarkeiten prüfen und Buchungen durchführen, ohne die Plattform zu verlassen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="card mb-3">
                  <div class="card-header bg-light">Datenanalysen und Berichte</div>
                  <div class="card-body">
                    <ul>
                      <li>Analyse von Traffic und Finanztransaktionen</li>
                      <li>Analytische und Berichtsfunktionen, um die Nachverfolgung von Geschäftsleistung zu erleichtern</li>
                      <li>ROI-Tracking für Marketing- und Vertriebsstrategien</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header bg-success text-white">
            <h2>Strategien bezüglich Marketing und Aufbau des Geschäftsmodell</h2>
          </div>
          <div class="card-body">
            <h3>Marketing-Strategien</h3>
            <div class="row mb-4">
              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Pay-per-click-Werbung</div>
                  <div class="card-body">
                    <p>
                      Nutzen von Werbeanzeigen auf Google, Facebook oder anderen Social-Media-Plattformen, um Ihre Plattform einer breiten
                      Zielgruppe bekannt zu machen.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Content-Marketing</div>
                  <div class="card-body">
                    <p>
                      Erstellen von Inhalten auf Ihrer Plattform, die auf die Bedürfnisse und Interessen Ihrer Zielgruppe abzielen. Dies
                      könnte z.B. ein Leitfaden zur Planung von Veranstaltungen oder Tipps zum Eventmarketing sein.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Influencer-Marketing</div>
                  <div class="card-body">
                    <p>
                      Identifizieren von Influencer in der Eventbranche und arbeiten wir mit ihnen zusammen, um Ihre Plattform bekannt zu
                      machen. Sie könnten z.B. einen bekannten Eventplaner bitten, Ihre Plattform zu nutzen und darüber auf seinen
                      Social-Media-Kanälen zu berichten.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">PR</div>
                  <div class="card-body">
                    <p>
                      Wir suchen Möglichkeiten, unsere Marke und Plattform in der Presse zu platzieren, z.B. durch Interviews in Event
                      Magazinen oder einer werbewirksamen Teilnahme an einer großen Veranstaltung.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3>Geschäftsmodell</h3>
            <div class="row">
              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Provisionen</div>
                  <div class="card-body">
                    <p>
                      Erheben von einer kleinen Gebühr von Verkäufern und Dienstleistern, die ihre Produkte oder Dienstleistungen auf Ihrer
                      Plattform anbieten.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Transaktionsgebühren</div>
                  <div class="card-body">
                    <p>Erheben eine geringe Gebühr für jede Buchung, die über Ihre Plattform abgewickelt wird.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Werbung</div>
                  <div class="card-body">
                    <p>Erhalten von Einnahmen durch das Schalten von Anzeigen von Veranstaltern oder Lieferanten auf Ihrer Plattform.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card mb-3 h-100">
                  <div class="card-header bg-light">Premium-Abonnements</div>
                  <div class="card-body">
                    <p>
                      Bieten wir Premium-Abonnements an, mit denen Nutzer zusätzliche Funktionen und Vorteile nutzen können, wie z.B.
                      Rabatte auf Tickets, bevorzugten Zugang zu bestimmten Veranstaltungen oder erweiterte Nutzungsmöglichkeiten.
                    </p>
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
export class CreateYourEventsComponent {
  constructor() {}
}
