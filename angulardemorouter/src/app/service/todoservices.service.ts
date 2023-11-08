import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TodoservicesService {
  todo: Todo = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  };
  private url: any =
    'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(this.url);
  }
}
