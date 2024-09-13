import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent implements OnInit{

  incomeForm:any;
  selectedMonth:any;

  januaryIncomes:any[]=[
    {source:'Salary',amount:'2341k',investments:'430k'},
    {source:'Freelancing',amount:'241k',investments:'4k'},
  ]
  FebruaryIncomes:any[]=[
    {source:'Salary',amount:'241k',investments:'30k'},
    {source:'Freelancing',amount:'21k',investments:'455k'},
  ]
  marchIncomes:any[]=[
    {source:'Salary',amount:'2341k',investments:'40k'},
    {source:'Marchlancing',amount:'21k',investments:'56k'},
  ]

  constructor(public fb:FormBuilder){
    const curentDate= new Date();
    this.selectedMonth=curentDate.toLocaleString('default',{month:'long'});
  }

  ngOnInit(): void {

    this.incomeForm=this.fb.group({
      month:['',[Validators.required]],
      source:['',[Validators.required]],
      amount:['',[Validators.required]],
      investments:['',[Validators.required]]
    });
    
  }

  onChange(event:any){
    this.selectedMonth=event.target.value;
    this.getFilteredIncome();

  }

  calculateTotalIncome(month :string): number {
    let totalIncome=0;
    for(const income of this.getIncomesForMonth(month)){
      totalIncome+=income.amount;
    }
    return totalIncome;

  }

  getIncomesForMonth(month :string):any[]{
  
    switch(month){
      case 'January':
      return this.januaryIncomes;
     

      case 'February':
      return this.FebruaryIncomes;
      
      case 'March':
      return this.marchIncomes;
      default :
      return [];
    }
    

  }


  getFilteredIncome(){
    let filteredIncomes:any[]=[];
    switch(this.selectedMonth){
      case 'January':
      filteredIncomes=[...this.januaryIncomes];
      break;

      case 'February':
      filteredIncomes=[...this.FebruaryIncomes];
      break;
      case 'March':
      filteredIncomes=[...this.marchIncomes];
      break;
    }
    return filteredIncomes;

  }
  onSubmit(){

  }



}
