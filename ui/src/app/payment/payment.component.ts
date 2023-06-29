import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  public payPalConfig?: IPayPalConfig;

  constructor() {}

  ngOnInit() {
    this.initPayPalConfig();
  }

  private initPayPalConfig(): void {
    this.payPalConfig = {
      clientId: 'YOUR_CLIENT_ID',
      createOrderOnClient: (data: any) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: '39.99',
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: '39.99'
                  }
                }
              },
              items: [
                {
                  name: 'Muscle Map Membership',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value: '39.99'
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'pay',
        layout: 'vertical',
    
        
      },
      onApprove: (data: any, actions: any) => {
        console.log('Payment successful');
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
       // this.showSuccess = true;
      },
      onError: (error: any) => {
        console.log('Error occurred:', error);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
