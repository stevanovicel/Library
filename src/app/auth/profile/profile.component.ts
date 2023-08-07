import { Component, Inject, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  isEditing: boolean = false;
  profileForInput!: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) { }

  ngOnInit(): void {
    this.profileForInput = {
      id: this.data.user.id,
      name: this.data.user.name,
      surname: this.data.user.surname,
      email: this.data.user.email,
      password: this.data.user.password
    };
  }

  finishEditing(form: NgForm) {
    this.data.user.name = this.profileForInput.name;
    this.data.user.surname = this.profileForInput.surname;
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    console.log(this.data.user);
    console.log(UserService.dummyUserList);
    this.isEditing = false;
  }

  changeIsEditing() {
    this.isEditing = !this.isEditing;
  }
}
