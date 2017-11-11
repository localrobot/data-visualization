import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';

@Injectable()
export class PlotService {

  private SERVER_URL = ENV.serverUrl;

  constructor(private http: HttpClient) { }

  getCases() {
    return this.http.get(`${this.SERVER_URL}/cases/`);
  }

}
