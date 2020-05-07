import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile;
  

  constructor() { 
    this.profile = {
      studentid: "B6001186",
      name: 'Atcharaporn Okrathok',
      gender: 'Female',
      birthyear: 0,
      email: 'b6001186@g.sut.ac.th',
      phone: '0821300459',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
    this.profile.studentid;
    this.profile.name;
    this.profile.gender;
    this.profile.birthyear;
    this.profile.email;
    this.profile.phone;
    this.profile.img;
    this.profile.address;
    this.profile.comment;
  }

}
