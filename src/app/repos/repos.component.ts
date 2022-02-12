import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { repo } from '../repository';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  username!:string;
  repo!:repo
  constructor(private httpService : HttpService ,private activateddRoute:ActivatedRoute) { }

  ngOnInit(): void {

      this.activateddRoute.params.subscribe((params:Params)=>{
        this.username = params["git-id"];
        this.httpService.getRepos(this.username).subscribe((repo:repo)=>{
          this.repo = repo;
          console.log("This is repo" + repo);
        });
      });


  }

}
