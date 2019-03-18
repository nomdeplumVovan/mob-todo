import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  popup = false;
  overflow=true;
  center = true;
  left = false;
  right = false;

  constructor() { }

  ngOnInit() {
  }
  
  deleteTask() {

  }
  completeTask() {

  }
  showDeleteButton() {
    this.center = false;
    this.left = true;
    this.right = false;
  }
  showCompleteButton() {
    this.center = false;
    this.left = false;
    this.right = true;
  }
  showTask() {
    this.center = true;
    this.left = false;
    this.right = false;
  }
}
