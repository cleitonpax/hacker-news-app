import { animate, state, style, transition, trigger, query, stagger, keyframes } from '@angular/animations';

export function postsTransition() {
    return staggerPosts();
}

export function staggerPosts() {
    return trigger('posts', [
        transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
            animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(5px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
            ]))]), {optional: true})
        ,
        query(':leave', stagger('300ms', [
            animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(5px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
        ,
        ])
    ]);
}
