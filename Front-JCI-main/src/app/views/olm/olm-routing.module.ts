import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterContactComponent } from './contact/ajouter-contact/ajouter-contact.component';
import { ContactComponent } from './contact/contact.component';
import { InfoContactComponent } from './contact/info-contact/info-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepensesComponent } from './deprev/depenses/depenses.component';
import { OperationsComponent } from './deprev/operations/operations.component';
import { RevenusComponent } from './deprev/revenus/revenus.component';
import { AjouterMembreComponent } from './membre/ajouter-membre/ajouter-membre.component';
import { FormulaireComponent } from './membre/formulaire/formulaire.component';
import { InfoMembreComponent } from './membre/info-membre/info-membre.component';
import { MembreComponent } from './membre/membre.component';
import { RecrutementComponent } from './membre/recrutement/recrutement.component';
import { SuiviMembreComponent } from './membre/suivi-membre/suivi-membre.component';
import { BudgetisationComponent } from './organisation_planification/budgetisation/budgetisation.component';
import { CalendrierComponent } from './organisation_planification/calendrier/calendrier.component';
import { PlanificationComponent } from './organisation_planification/planification/planification.component';
import { BudgetComponent } from './organisation_planification/programme-annuel/budget/budget.component';
import { ProgrammeAnnuelComponent } from './organisation_planification/programme-annuel/programme-annuel.component';
const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Tableau de bord',
        },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'liste des contacts'
        }
      },
      {
        path: 'ajoutContact',
        component: AjouterContactComponent,
        data: {
          title: 'Ajouter un contact'
        }
      },
      {
        path: 'infoContact',
        component: InfoContactComponent,
        data: {
          title: 'Ajouter un contact'
        }
      },
      {
        path: 'depenses',
        component: DepensesComponent,
        data: {
          title: 'Ajouter des dépenses'
        }
      },
      {
        path: 'revenus',
        component: RevenusComponent,
        data: {
          title: 'Ajouter des revenus'
        }
      },
      {
        path: 'operations',
        component: OperationsComponent,
        data: {
          title: 'faire des operations'
        }
      },
      {
        path: 'ajoutMembre',
        component: AjouterMembreComponent,
        data: {
          title: 'Ajouter un membre'
        }
      },
      {
        path: 'formulaire',
        component: FormulaireComponent,
        data: {
          title: 'Ajouter un formulaire public'
        }
      },
      {
        path: 'infoMembre',
        component: InfoMembreComponent,
        data: {
          title: 'consulter les informations d\'un membre '
        }
      },
      {
        path: 'recrutement',
        component: RecrutementComponent,
        data: {
          title: 'traiter les demandes de recrutement'
        }
      },
      {
        path: 'suiviMembre',
        component: SuiviMembreComponent,
        data: {
          title: 'suivi activités et avancement des membres'
        }
      },
      {
        path: 'membre',
        component: MembreComponent,
        data: {
          title: 'Consulter la liste des membres'
        }
      },
      {
        path: 'budgetisation',
        component: BudgetisationComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'calendrier',
        component: CalendrierComponent,
        data: {
          title: 'Calendrier'
        }
      },
      {
        path: 'planification',
        component: PlanificationComponent,
        data: {
          title: 'trello'
        }
      },
      {
        path: 'programmeAnnuel',
        component: ProgrammeAnnuelComponent,
        data: {
          title: 'programme annuel'
        }
      },
      {
        path: 'budget',
        component: BudgetComponent,
        data: {
          title: 'budget du programme annuel'
        }
      },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OlmRoutingModule { }
