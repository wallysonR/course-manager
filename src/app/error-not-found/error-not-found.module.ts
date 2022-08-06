import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorNotFoundComponent } from './error-not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ErrorNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports:[ErrorNotFoundComponent]
})
export class ErrorNotFoundModule { }
