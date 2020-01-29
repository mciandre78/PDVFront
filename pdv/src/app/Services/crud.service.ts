import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Images } from "../Models/placeholder.model";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  constructor(private http: HttpClient) {}

  public getPhotos(): Observable<Images[]> {
    return this.http.get<Images[]>(
      `https://jsonplaceholder.typicode.com/photos`
    );
  }
}
