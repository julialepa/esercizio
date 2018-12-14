import React, { Component } from 'react';
import './App.css';

class Post extends Component {

    render() {
        return (
            <div className="App">
                <div className="post">
                    <h5 className="post-title">{this.props.id}</h5>
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }
}

export default Post;
