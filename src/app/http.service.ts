import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './user';
import { repo } from './repository';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http :HttpClient) {

   }


  getProfileInfo(searchQuery:string):Observable<User>{
    return this.http.get<User>(`${env.BASE_URL}/users/${searchQuery}`);
  }

  getRepos(searchQuery:string):Observable<repo>{
    return this.http.get<repo>(`${env.BASE_URL}/users/${searchQuery}/repos`);

  }
}
