import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[ccLogo]'
})
export class CcLogoDirective implements OnChanges{

  constructor() { }

  @Input()
  cardNumber: string

  @HostBinding('src')
  imageSource: string

  ngOnChanges(changes: SimpleChanges): void {
    this.imageSource = 'assets/images/' + this.getCardTypeFromNumber() + '.png'

  }

  getCardTypeFromNumber(): CardType {

    const cards = [{value: 5430, type: CardType.AMERICAN_EXPRESS},
      {value: 1234, type: CardType.VISA},
      {value: 2241, type: CardType.MASTER}
    ];

    let result;

    for (let i = 0 ; i < cards.length; i++) {
      if (this.cardNumber.startsWith((cards[i].value).toString())) {
        result = cards[i].type;
        break;
      }
    }
    return result ? result : CardType.UNKNOWN
  }
}

const enum CardType {
  AMERICAN_EXPRESS = 'american-express',
  MASTER = 'mastercard',
  VISA = 'visa',
  UNKNOWN = 'unknown'
}
