import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tick-tac-toe-angular';
  count: number = 0;
  onClick(event: string) {
    document.getElementById(event)?.classList.add('open');
    this.count++;
    if (this.count % 2 == 0) {
      document.getElementById(event)?.setAttribute('src', 'assets/circle.png');
    } else {
      document.getElementById(event)?.setAttribute('src', 'assets/cross.png');
    }
    if (this.count == 9) {
      toastr.warning("Game Over! It's a draw!", 'Warning');
      this.count = 0;
      location.reload();
    }

    var a = document.getElementById('img1')?.getAttribute('src');
    var b = document.getElementById('img2')?.getAttribute('src');
    var c = document.getElementById('img3')?.getAttribute('src');
    var d = document.getElementById('img4')?.getAttribute('src');
    var e = document.getElementById('img5')?.getAttribute('src');
    var f = document.getElementById('img6')?.getAttribute('src');
    var g = document.getElementById('img7')?.getAttribute('src');
    var h = document.getElementById('img8')?.getAttribute('src');
    var i = document.getElementById('img9')?.getAttribute('src');
    if (this.count > 0) {
      if (
        (a === 'assets/cross.png' &&
          e === 'assets/cross.png' &&
          i === 'assets/cross.png') ||
        (a === 'assets/circle.png' &&
          e === 'assets/circle.png' &&
          i === 'assets/circle.png')
      ) {
        toastr.success('Player 1 wins!', 'Success');
        document.getElementById('square1')?.classList.add('blink');
        document.getElementById('square5')?.classList.add('blink');
        document.getElementById('square9  ')?.classList.add('blink');
      }
      //horizontal
      if (
        (a === 'assets/cross.png' &&
          b === 'assets/cross.png' &&
          c === 'assets/cross.png') ||
        (a === 'assets/circle.png' &&
          b === 'assets/circle.png' &&
          c === 'assets/circle.png')
      ) {
        document.getElementById('square1')?.classList.add('blink');
        document.getElementById('square2')?.classList.add('blink');
        document.getElementById('square3')?.classList.add('blink');
      }

      if (
        (d === 'assets/cross.png' &&
          e === 'assets/cross.png' &&
          f === 'assets/cross.png') ||
        (d === 'assets/circle.png' &&
          e === 'assets/circle.png' &&
          f === 'assets/circle.png')
      ) {
        document.getElementById('square4')?.classList.add('blink');
        document.getElementById('square5')?.classList.add('blink');
        document.getElementById('square6')?.classList.add('blink');
      }

      if (
        (g === 'assets/cross.png' &&
          h === 'assets/cross.png' &&
          i === 'assets/cross.png') ||
        (g === 'assets/circle.png' &&
          h === 'assets/circle.png' &&
          i === 'assets/circle.png')
      ) {
        document.getElementById('square7')?.classList.add('blink');
        document.getElementById('square8')?.classList.add('blink');
        document.getElementById('square9')?.classList.add('blink');
      }

      //vertical
      if (
        (a === 'assets/cross.png' &&
          d === 'assets/cross.png' &&
          g === 'assets/cross.png') ||
        (d === 'assets/circle.png' &&
          a === 'assets/circle.png' &&
          g === 'assets/circle.png')
      ) {
        document.getElementById('square1')?.classList.add('blink');
        document.getElementById('square4')?.classList.add('blink');
        document.getElementById('square7')?.classList.add('blink');
      }
      if (
        (b === 'assets/cross.png' &&
          e === 'assets/cross.png' &&
          h === 'assets/cross.png') ||
        (b === 'assets/circle.png' &&
          e === 'assets/circle.png' &&
          h === 'assets/circle.png')
      ) {
        document.getElementById('square2')?.classList.add('blink');
        document.getElementById('square5')?.classList.add('blink');
        document.getElementById('square8')?.classList.add('blink');
      }

      if (
        (c === 'assets/cross.png' &&
          f === 'assets/cross.png' &&
          i === 'assets/cross.png') ||
        (c === 'assets/circle.png' &&
          f === 'assets/circle.png' &&
          i === 'assets/circle.png')
      ) {
        document.getElementById('square3')?.classList.add('blink');
        document.getElementById('square6')?.classList.add('blink');
        document.getElementById('square9')?.classList.add('blink');
      }
    }
  }
}
