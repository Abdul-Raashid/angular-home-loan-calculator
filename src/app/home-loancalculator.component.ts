import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fixed-deposit-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-loan-calculator.component.html',
  styleUrl: './home-loan-calculator.component.css'
})
export class HomeLoanCalculatorComponent {
  loanAmount = signal<number | null>(null);
  interestRate = signal<number | null>(null);
  tenureYears = signal<number | null>(null);

  emi = signal<number | null>(null);
  totalPayment = signal<number | null>(null);
  totalInterest = signal<number | null>(null);

  calculateEMI(): void {
    const p = this.loanAmount();
    const r = this.interestRate();
    const t = this.tenureYears();

    if (p === null || r === null || t === null || p <= 0 || r <= 0 || t <= 0) {
      this.emi.set(null);
      this.totalPayment.set(null);
      this.totalInterest.set(null);
      return;
    }

    const monthlyRate = r / 100 / 12;
    const n = t * 12;

    const emiValue = (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    const totalPay = emiValue * n;
    const totalInt = totalPay - p;

    this.emi.set(emiValue);
    this.totalPayment.set(totalPay);
    this.totalInterest.set(totalInt);
  }
}
