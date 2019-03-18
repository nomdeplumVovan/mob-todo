import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  isCreator = false;
  isEdit: Boolean;
  constructor() { }

  ngOnInit() {
  }

}
