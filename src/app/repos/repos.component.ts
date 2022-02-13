import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { Repos, Repository } from '../repository';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  username!:string;
  repos!:Array<Repository>;
  constructor(private httpService : HttpService ,private activateddRoute:ActivatedRoute) { }

  ngOnInit(): void {

      this.activateddRoute.params.subscribe((params:Params)=>{
        this.username = params["git-id"];
        console.log(this.username);
        this.httpService.getRepos(params["git-id"]).subscribe((data:Array<Repository>)=>{       
          this.repos = data;
          console.log("This is "+ this.repos[1].name);
        });
      });


  }

}
