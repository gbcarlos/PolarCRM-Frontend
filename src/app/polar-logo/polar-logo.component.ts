import { Component } from '@angular/core';

@Component({
  selector: 'app-polar-logo',
  template: `
  <svg viewBox="-150 -150 300 300"
    style="background-color: #ffffff; width: 30rem; height: 20rem; border-radius: 10px;"
  >
    <defs>

    <path id="white-arrow" d="
        M 0 0
        L -20 -20
        L 0 -100
        Z"
        fill="white" stroke="white" stroke-width="0" />

    <path id="small-white-arrow" d="
        M 0 0
        L -8 8
        L -40 -40
        Z"
        fill="white" stroke="white" stroke-width="0" />

    <path id="black-arrow" d="
        M 0 0
        L 20 -20
        L 0 -100
        Z"
        fill="black" stroke="black" stroke-width="0" />

    <path id="small-black-arrow" d="
        M 0 0
        L 8 -8
        L -40 -40
        Z"
        fill="black" stroke="black" stroke-width="0" />

    <path id="arrow-border" d="
        M -20 -20
        L 0 -100
        L 20 -20
        "
        fill="none" stroke="black" stroke-width="2" />

    <path id="small-arrow-border" d="
        M -10 10
        L -40 -40
        L 8 -8
        "
        fill="none" stroke="black" stroke-width="1.5" />
    
    <circle id="circle"
        cx="0" cy="0" r="50"
        fill="none"
        stroke-width="5"
        stroke="black"
    />

    </defs>

    <text x="-4" y="-112" font-size="14" fill="black" font-weight="bold">N</text>
    <text x="-4" y="120" font-size="14" fill="black" font-weight="bold">S</text>
    <text x="112" y="5" font-size="14" fill="black" font-weight="bold">E</text>
    <text x="-120" y="5" font-size="14" fill="black" font-weight="bold">W</text>

    <use href="#circle"/>
    <use href="#small-white-arrow"/>
    <use href="#small-black-arrow"/>
    <use href="#small-arrow-border"/>

    <use href="#small-white-arrow" transform="rotate(90)"/>
    <use href="#small-black-arrow" transform="rotate(90)"/>
    <use href="#small-arrow-border" transform="rotate(90)"/>

    <use href="#small-white-arrow" transform="rotate(180)"/>
    <use href="#small-black-arrow" transform="rotate(180)"/>
    <use href="#small-arrow-border" transform="rotate(180)"/>

    <use href="#small-white-arrow" transform="rotate(270)"/>
    <use href="#small-black-arrow" transform="rotate(270)"/>
    <use href="#small-arrow-border" transform="rotate(270)"/>

    <use href="#white-arrow"/>
    <use href="#black-arrow"/>
    <use href="#arrow-border"/>

    <use href="#white-arrow" transform="rotate(90)"/>
    <use href="#black-arrow" transform="rotate(90)"/>
    <use href="#arrow-border" transform="rotate(90)"/>

    <use href="#white-arrow" transform="rotate(180)"/>
    <use href="#black-arrow" transform="rotate(180)"/>
    <use href="#arrow-border" transform="rotate(180)"/>

    <use href="#white-arrow" transform="rotate(270)"/>
    <use href="#black-arrow" transform="rotate(270)"/>
    <use href="#arrow-border" transform="rotate(270)"/>
  </svg>
  `,
  styles: [
  ]
})
export class PolarLogoComponent {

}
