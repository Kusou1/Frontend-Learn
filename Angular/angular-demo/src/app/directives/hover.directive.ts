import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core'

// 接收参的数类型
interface Options {
  bgColor?: string
}

@Directive({
    selector: '[appHover]'
})
export class HoverDirective implements AfterViewInit {
    element: HTMLElement
    // 接收参数
    @Input('appHover') appHover: Options = {}
    constructor(private elementRef: ElementRef) {
        this.element = this.elementRef.nativeElement
    }
    // 组件模板初始完成后设置元素的背景颜色
    ngAfterViewInit() {
        this.element.style.backgroundColor = this.appHover.bgColor || 'skyblue'
    }
    // HostListener绑定事件
    // 为元素添加鼠标移入事件
    @HostListener('mouseenter') enter() {
        this.element.style.backgroundColor = 'pink'
    }
    // 为元素添加鼠标移出事件
    @HostListener('mouseleave') leave() {
        this.element.style.backgroundColor = 'skyblue'
    }
}
