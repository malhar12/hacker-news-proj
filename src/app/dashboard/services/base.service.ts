import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class BaseService {

  private BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  /*
   * Gets all the list items for the specific page
   * @param Page Number */
  getItemsForPage(no: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}search?page=${no}`);
  }
}
