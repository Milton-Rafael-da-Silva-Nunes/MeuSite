import React, { Component } from "react";

class Feed extends Component {
    render() {
        return (
            <div key={this.props.id}>
                <h3> {this.props.username} </h3>

                <a>
                    {this.props.likes} 
                    {this.props.likes >= 2 ? ' Curtidas' : ' Curtida'}
                    /
                    {this.props.comentarios} 
                    {this.props.comentarios >= 2 ? ' Comentários' : ' Comentário'}
                </a>
                <hr />
            </div>
        );
    }
}

export default Feed;