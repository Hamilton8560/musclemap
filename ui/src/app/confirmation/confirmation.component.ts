import { Component, ElementRef, ViewChild } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;
  paidFor = false
  product = {
    price : 777.77,
    description: 'Liftime Membership Option',
    img: 'assets/logo.png'
  }

  ngOnInit(){
    paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: 'P-7S660697PY411323AMTAWXTA'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
      }
  }).render('#paypal-button-container-P-7S660697PY411323AMTAWXTA'); // Renders the PayPal button
}


}
