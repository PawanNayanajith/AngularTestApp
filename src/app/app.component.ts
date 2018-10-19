import { Component } from '@angular/core';
import {RoleService} from './role.service';
import {Role} from './role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Test App';
  name = 'First Test';
  roles : Role[];
  roleObj = new Role();

  constructor(private roleService:RoleService){}

  
  ngOnInit(){
    this.getRole();
  }

  getRole(){
    this.roleService.getAllRoles().subscribe(data=>{
      this.roles=data;
      console.log(data);
    });
  }

  addRole(){
    this.roleService.addRole(this.roleObj).subscribe(data=>{
      console.log(data);
      this.getRole();
    });
  }


}
