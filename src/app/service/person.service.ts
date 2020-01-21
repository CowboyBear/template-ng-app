import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/Person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  public post(person: Person): Observable<any> {    
    return this.http.post('./api/person', this.createPayload(person));
  }

  private createPayload(person: Person){
    return {
      name: person.name,
      email: person.email
    }
  }
}
