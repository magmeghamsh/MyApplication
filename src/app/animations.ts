import {animate, animation, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';

export let bounceInAnimation = animation(
    animate('2000ms cubic-bezier(.03,.57,.74,.45)',
        keyframes([
            style({
                offset: .2,
                opacity: 1,
                transform: 'translateX(150px)'
            })
        ])
    )
);

export let fade = trigger('fade', [
    state('void', style({opacity: 0})),
    transition(':enter, :leave',
        useAnimation(bounceInAnimation)
    )
]);
