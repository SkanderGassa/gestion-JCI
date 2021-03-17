import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OlmRoutingModule } from './olm-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormulaireComponent } from './membre/formulaire/formulaire.component';
import { RecrutementComponent } from './membre/recrutement/recrutement.component';
import { AjouterContactComponent } from './contact/ajouter-contact/ajouter-contact.component';
import { InfoContactComponent } from './contact/info-contact/info-contact.component';
import { ContactComponent } from './contact/contact.component';
import { DepensesComponent } from './deprev/depenses/depenses.component';
import { RevenusComponent } from './deprev/revenus/revenus.component';
import { OperationsComponent } from './deprev/operations/operations.component';
import { AjouterMembreComponent } from './membre/ajouter-membre/ajouter-membre.component';
import { InfoMembreComponent } from './membre/info-membre/info-membre.component';
import { SuiviMembreComponent } from './membre/suivi-membre/suivi-membre.component';
import { BudgetisationComponent } from './organisation_planification/budgetisation/budgetisation.component';
import { CalendrierComponent } from './organisation_planification/calendrier/calendrier.component';
import { PlanificationComponent } from './organisation_planification/planification/planification.component';
import { ProgrammeAnnuelComponent } from './organisation_planification/programme-annuel/programme-annuel.component';


@NgModule({
  declarations: [DashboardComponent, FormulaireComponent, RecrutementComponent, AjouterContactComponent, InfoContactComponent, ContactComponent, DepensesComponent, RevenusComponent, OperationsComponent, AjouterMembreComponent, FormulaireComponent, InfoMembreComponent, RecrutementComponent, SuiviMembreComponent, BudgetisationComponent, CalendrierComponent, PlanificationComponent, ProgrammeAnnuelComponent],
  imports: [
    CommonModule,
    OlmRoutingModule
  ]
})
export class OlmModule { }
