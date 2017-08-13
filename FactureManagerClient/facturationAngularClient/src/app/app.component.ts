import { Component }          from '@angular/core';
import { MdSidenavModule }          from '@angular/material';
@Component({
  selector: 'app-root',
  template: `
  <!-- Compiled and minified CSS -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css">
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   <!-- Compiled and minified JavaScript -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js"></script>

  <div class="row">
       <div class="col s3">
         <!-- Grey navigation panel -->
                <div class="row">
                  <a class="waves-effect waves-light btn col s12" routerLink="/customers" routerLinkActive="active">Clients</a>
                  <a class="waves-effect waves-light btn col s12" routerLink="/products">Produits</a>
                  <a class="waves-effect waves-light btn col s12" routerLink="/invoice" >Facture</a>
                </div>

       </div>
       <div class="col s9">
         <!-- Teal page content  -->
           <router-outlet></router-outlet>
       </div>
     </div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion facturation';
}
