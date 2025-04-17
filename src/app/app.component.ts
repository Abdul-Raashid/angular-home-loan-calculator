
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeLoanCalculatorComponent } from './home-loancalculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeLoanCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Home-Loan-calculator';
}
