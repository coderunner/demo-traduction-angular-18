import { CurrencyPipe, DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslocoDirective, TranslocoModule, TranslocoService } from "@jsverse/transloco";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [CurrencyPipe, DatePipe, FormsModule, TranslocoDirective],
})
export class AppComponent {
  FR_CA = "fr-CA";
  EN_CA = "en-CA";
  LOCALE_KEY = "locale";

  amount = 123.34;
  date = new Date();
  selectedLocale = this.FR_CA;

  constructor(private translocoService: TranslocoService) {
    this.selectedLocale = localStorage.getItem(this.LOCALE_KEY) ?? this.FR_CA;
    this.translocoService.setActiveLang(this.selectedLocale);
  }

  selectChange() {
    localStorage.setItem(this.LOCALE_KEY, this.selectedLocale);
    this.translocoService.setActiveLang(this.selectedLocale);
  }
}
