import { Controller } from "@hotwired/stimulus"
import consumer from "channels/consumer"

// Connects to data-controller="room"
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!");
    this.sub = this.createActionCableChannel();

    console.log(this.sub);
  }

  createActionCableChannel() {
    return consumer.subscriptions.create("RoomChannel", {
      connected() {
        // Called when the subscription is ready for use on the server
      },

      disconnected() {
        // Called when the subscription has been terminated by the server
      },

      received(data) {
        // Called when there's incoming data on the websocket for this channel
      }
    });
  }
}
