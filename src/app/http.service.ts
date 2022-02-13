import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repos, Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http :HttpClient) {

   }


  getProfileInfo(searchQuery:string):Observable<User>{
    return this.http.get<User>(`${env.BASE_URL}/users/${searchQuery}`);
  }

  getRepos(searchQuery:string):Observable<Array<Repository>>{
    return this.http.get<Array<Repository>>(`${env.BASE_URL}/users/${searchQuery}/repos?client_id=${env.id}&client_secret=${env.secret}`);

  }
}
