import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   ReactiveFormsModule,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }
