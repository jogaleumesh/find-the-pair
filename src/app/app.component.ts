import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fungame: any = [
    { id: 1, src: "../../assets/imgs/img1.jpg" },
    { id: 2, src: "../../assets/imgs/img2.jpg" },
    { id: 3, src: "../../assets/imgs/img3.jpg" },
    { id: 4, src: "../../assets/imgs/img4.jpg" },
    { id: 5, src: "../../assets/imgs/img5.jpg" },
    { id: 6, src: "../../assets/imgs/img6.jpg" },
    { id: 7, src: "../../assets/imgs/img7.jpg" },
    { id: 8, src: "../../assets/imgs/img8.jpg" }
  ]

  public newCards = [];
  public checkCount;
  
  public win;
  constructor() {
    this.newArray();
  }

  newArray() {
    this.checkCount = 0;
    this.fungame.map(card => {
      this.fungame.push(Object.assign({}, card));
    });
    this.shuffle(this.fungame);
  }

  checkCards(card) {
    this.newCards.push(card);
    card.flip = true;
    this.checkCount++;
  }

  checkWin(array){
    for(var card in array)
          if(!array[card].flip) return false;                                             
      return true;
  }

  flipCard(card) {
    if (this.checkCount == 0) {
      this.checkCards(card)
    } else if (this.checkCount == 1) {
      this.checkCards(card)
    }

    setTimeout(() => {
      if (this.checkCount == 2) {
        if (this.newCards[0].id == this.newCards[1].id) {
          this.newCards = [];
          this.checkCount = 0;
          this.win = this.checkWin(this.fungame);
        }else {
          this.newCards[0].flip = false;
          this.newCards[1].flip = false;
          this.newCards = [];
          this.checkCount = 0;
        }
      }
    }, 500);
  }

  shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }

}
