import {animate, animation, state, style, transition, trigger, useAnimation} from '@angular/animations';

export let fadeInAnimation = animation([
    style({transform: 'translateX(-100%)'}),
    animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let fade = trigger('fade', [
    state('void', style({opacity: 0})),
    transition(':enter, :leave', [
        useAnimation(fadeInAnimation)
    ])
]);
