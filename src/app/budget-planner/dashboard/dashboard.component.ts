import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule,LoginComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router:Router){}

  lastMonthsIncome=['January:$1000','February:$1300','March:$2000'];
  currentMonthIncome='$2300';

  lastMonthsExpense=['January:$1040','February:$1370','March:$2980'];
  currentMonthExpense='$4300';

  todoTransactions=[
    {description:'pay electric bill'},
    {description:'submit monthly report'},
    {description:'pay rent'},
    {description:'submit chanda'}
  ];

  totalCurrentMonthIncome=2000;
  totalCurrentMonthExpense=1500;
 

  get totalCurrentMonthSavings():number{
 return this.totalCurrentMonthIncome-this.totalCurrentMonthExpense;
  }

  onIncome(){
    this.router.navigate(['/budget-planner/income'])
  }
  onExpense(){
    this.router.navigate(['/budget-planner/expense'])
  }

}
