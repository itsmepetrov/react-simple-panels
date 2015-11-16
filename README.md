# React Simple Panels

[![build status](https://img.shields.io/travis/itsmepetrov/react-simple-panels/master.svg?style=flat-square)](https://travis-ci.org/itsmepetrov/react-simple-panels)
[![npm version](https://img.shields.io/npm/v/react-simple-panels
A simple React Panels without tabs and internal state

### Installation

```
npm install --save react-simple-panels
```

## Example


```js
import React, { Component } from 'react';
import { PanelList, Panel } from 'react-simple-panels';

const Types = {
    FIRST: 'FIRST',
    SECOND: 'SECOND',
    THIRD: 'THIRD'
}

export default class StatefulPanels extends Component {
    state = {
        activeIndex: Types.FIRTS
    }

    render() {

        return {
            <PanelList activeIndex={this.state.activeIndex}>
                <Panel index={Types.FIRST}>
                    <span onClick={() => this.changeActiveIndex(Types.SECOND)}>
                        This is a first panel
                    </span> 
                </Panel>
                <Panel index={Types.SECOND}>
                    <span onClick={() => this.changeActiveIndex(Types.THIRD)}>
                        This is a second panel
                    </span>
                </Panel>
                <Panel index={Types.THIRD}>
                    <span onClick={() => this.changeActiveIndex(Types.FIRST)}>
                        This is a third panel
                    </span>
                </Panel>
            </PanelList>
        }
    }

    changeActiveIndex(activeIndex) {
        this.setState({ activeIndex });
    }
}
```

## Props

**PanelList**:

- `activeIndex`: Name of the panel index you want to be active.
- anything else you'd like to set on the containing div

**Panel**:

- `index`: a unique name for the panel.
- anything else you'd like to set on the panel's containing div.
