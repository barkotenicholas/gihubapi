import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { User } from '../user';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  private githubUserQuery!:string;
  private user!:User;
  constructor(private httpService : HttpService ,private activateddRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.activateddRoute.params.subscribe((params:Params)=>{
      if(params['git-search']){
        this.httpService.getProfileInfo(params["git-search"]).subscribe((profile:User)=>{
          this.user = profile;
          console.log(this.user);
        });
      
      }
      else{
        this.httpService.getProfileInfo("barkotenicholas").subscribe((profile:User)=>{
          this.user = profile;
          console.log(this.user);
        });     
       }
    });
  }


  public searchUser(){
    this.httpService.getProfileInfo(this.githubUserQuery).subscribe((profile:User)=>{
      this.user = profile;
      console.log(this.user);
    });

  }

}
