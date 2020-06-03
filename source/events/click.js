import { raise, preventDefault } from '@javascribble/quantum';

const click = 'click';

export const raiseClick = element => event => {
    preventDefault(event);
    raise(element, new Event(click));
};