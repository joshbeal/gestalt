import React, { Component } from 'react';
import Avatar from '../Avatar';
import { card, doc, ns } from 'devcards';

ns('Avatar');

class PreloadImageContext extends Component {
    static childContextTypes = {
        canPreloadImages: React.PropTypes.bool
    }

    getChildContext() {
        return {
            canPreloadImages: this.props.canPreloadImages
        };
    }

    render(){
        return this.props.children;
    }
}

card('Example',
    doc`A simple avatar to visually represent a person.`,
    <PreloadImageContext canPreloadImages>
        <Avatar
            avatar={{
                size: 74,
                url: 'https://s-media-cache-ak0.pinimg.com/avatars/chrislloyd_1459403984_280.jpg'
            }}
            name='Chris Lloyd'
        />
    </PreloadImageContext>);
