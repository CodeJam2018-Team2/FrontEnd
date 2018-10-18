import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  doMagic() {
    var magicDiv = document.getElementById("magic");
    var formDiv = document.getElementById("form");
    magicDiv.classList.remove("hidden");
    formDiv.classList.add("hidden");
  }
}

