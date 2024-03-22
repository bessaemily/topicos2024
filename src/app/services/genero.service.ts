import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../models/genero.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private baseUrl = 'http://localhost:8080/generos';

  constructor(private httpClient: HttpClient) {  }

  findAll(): Observable<Genero[]> {
    return this.httpClient.get<Genero[]>(this.baseUrl);
  }

  
}
