import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
})
export class starComponent implements OnChanges {

  @Input()
  rating: number = 0

  starCompletedWidth!: number
  starHalf!: number

  ngOnChanges(changes: SimpleChanges): void {
    this.starCompletedWidth = Math.trunc(this.rating)
    this.starHalf = this.rating !== 0 ? this.rating % this.starCompletedWidth : 0
  }
}
