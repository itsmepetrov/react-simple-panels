import React, { Component, PropTypes } from 'react';

export default class Panel extends Component {
    static propTypes = {
        children: PropTypes.node,
        index: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        activeIndex: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    }

    render() {
        const { children, index, activeIndex, ...rest } = this.props;

        return activeIndex !== index ? null : (
           <div {...rest}>
                {children}
           </div>
        );
    }
}
