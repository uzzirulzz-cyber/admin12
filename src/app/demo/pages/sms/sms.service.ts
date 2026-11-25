import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SmsService {
  private apiBase = 'https://api.textbee.example.com/v1';

  async sendSms(to: string, message: string): Promise<{ success: boolean; sid: string }> {
    const response = await fetch(`${this.apiBase}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, message })
    });
    const data = await response.json();
    return { success: response.ok, sid: data.sid || '' };
  }

  async checkStatus(sid: string): Promise<{ status: string }> {
    const response = await fetch(`${this.apiBase}/messages/${sid}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    return { status: response.ok ? 'delivered' : 'failed' };
  }
}