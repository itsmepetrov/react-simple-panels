import { Children } from 'react';
import Panel from './Panel';

export default function childrenPropTypes(props, propName) {
    let error;
    Children.forEach(props[propName], child => {
        if (child.type !== Panel) {
            error = new Error(
                'Expected `Panel` but found `' + (child.type.displayName || child.type) + '`'
            );
        }
    });
    return error;
}
