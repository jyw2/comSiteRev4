import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const fadeInTrigger = trigger('spawn', [transition('void => *', [animate(0,style({ 'opacity': '0'})),animate(800)])])
