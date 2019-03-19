import { Component, OnInit } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  popup = false;
  overflow = true;
  center = true;
  left = false;
  right = false;
  description = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in    voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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

// hammertime = new Hammer(document.body, {
//   enable: true,
//   recognizers: [
//       [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]
//   ]
// });

// hammertime.on('swipeleft', function(ev) {
//   // hide menu
// });

// hammertime.on('swiperight', function(ev) {
//   // show menu
// });

}
