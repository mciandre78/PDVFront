import { Images } from "./../../Models/placeholder.model";
import { CrudService } from "src/app/Services/crud.service";
import { Component, OnInit } from "@angular/core";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.less"]
})
export class CrudComponent implements OnInit {
  images: Images[] = [];
  erro: any;

  constructor(private crudService: CrudService) {
    this.getter();
  }

  getter() {
    this.crudService.getPhotos().subscribe(
      (data: Images[]) => {
        this.images = data;
        console.log("data: " + data);
        console.log("this.images: " + this.images);
      },
      (error: any) => {
        this.erro = error;
        console.log("erro: " + error);
      }
    );
  }

  ngOnInit() {}
}
