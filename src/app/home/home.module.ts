import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatSelectModule, MatAutocompleteModule, MatOptionModule, MatFormFieldModule, MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [],
  providers: [],
  entryComponents: [],
})
export class HomeModule {}
