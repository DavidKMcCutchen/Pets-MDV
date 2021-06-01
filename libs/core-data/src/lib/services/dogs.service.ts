import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Dog } from "@pets/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  model = 'dogs';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Dog[]>(this.getUrl());
  }

  find(dogId: string) {
    return this.httpClient.get<Dog>(this.getUrlById(dogId));
  }

  create(dogs: Dog) {
    return this.httpClient.post<Dog>(this.getUrl(), dogs);
  }

  update(dogs: Dog) {
    return this.httpClient.patch<Dog>(this.getUrlById(dogs.id), dogs);
  }

  delete({ id }: Dog) {
    return this.httpClient.delete<Dog>(this.getUrlById(id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
