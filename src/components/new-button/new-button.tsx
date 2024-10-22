import { Component, h,  Prop } from '@stencil/core';

@Component({
  tag: 'new-button',
  styleUrl: 'new-button.css',
  shadow: true,
})
export class NewButton {
  @Prop() text: string; 
  render() {
    return (
      <button>
         {this.text}
      </button>
    );
  }
}
