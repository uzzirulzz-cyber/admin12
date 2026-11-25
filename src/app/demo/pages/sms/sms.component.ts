import { Component, OnInit } from '@angular/core';
import { SmsService } from '../sms.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  phoneNumber = '';
  message = '';
  loading = false;
  success = false;
  sid = '';
  status = '';

  constructor(public sms: SmsService) {}

  ngOnInit() {}

  async send() {
    this.loading = true;
    this.success = false;
    const result = await this.sms.sendSms(this.phoneNumber, this.message);
    this.loading = false;
    this.success = result.success;
    this.sid = result.sid;
    this.status = '';
    if (result.success) {
      this.status = 'SMS sent successfully';
      setTimeout(() => this.status = '', 5000);
    } else {
      this.status = 'Failed to send SMS';
      setTimeout(() => this.status = '', 5000);
    }
  }
}