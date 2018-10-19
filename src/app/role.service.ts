import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from './role';

const httpOptions ={
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  private roleUrl = "http://localhost:8080/hrm_system/role";

  public getAllRoles(){
    return this.http.get<Role[]>(this.roleUrl);
  }

  public addRole(role){
    return this.http.post<Role>(this.roleUrl,role);
  }

}
