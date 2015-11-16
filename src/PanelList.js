import React, { Component, PropTypes, Children, cloneElement } from 'react';
import childrenPropTypes from './childrenPropTypes';

export default class PanelList extends Component {
    static propTypes = {
        children: childrenPropTypes,
        activeIndex: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired
    }

    render() {
        const { children, activeIndex, ...rest } = this.props;
        return (
           <div {...rest}>
                {Children.map(children, child => cloneElement(child, { activeIndex }))}
           </div>
        );
    }
}
