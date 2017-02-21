import { Directive, ElementRef, Input } from '@angular/core';
declare var ImgCache: any;

@Directive({
    selector: '[lazyload]'
})
export class Lazyload {
    @Input() lazyload;

    constructor(private el:ElementRef) {
    }

    ngAfterViewInit() {
        var loadRandomBackground = ["#D8DAD3","#A4C2A5","#967D69","#92B9BD","#A8D4AD","#E58C8A","#87A878","#B0BC98","#C7CCB9","#CAE2BC"];
        var getBackground = this.getRandomIntInclusive(0,loadRandomBackground.length - 1);
        //console.log(getBackground);
        this.el.nativeElement.style.backgroundColor = loadRandomBackground[getBackground];
       // var height = this.el.nativeElement.clientWidth / 2;
        //this.el.nativeElement.height = height;
        let image = new Image();
        image.addEventListener('load', () => {
            this.el.nativeElement.src = this.lazyload;
        });
        image.src = this.lazyload;
    }
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}