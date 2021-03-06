import { Component } from "@angular/core";
import { Response } from "@angular/http";

import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
 constructor(private dataStorageService: DataStorageService,
    public authService: AuthService) {}
 onSaveData(){
     this.dataStorageService.storeRecipe()
     .subscribe(
         (response: Response) => {
             console.log(response);
         }
     );
 }

 onFetchData(){
    this.dataStorageService.getRecipe();
}

onLogOut(){
  this.authService.logOut();
}
}