import React, { Component } from "react";
import Feed from "./components/Feed";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

            feed: [
                { id: 1, username: 'Rafael', likes: 10, comentarios: 2 },
                { id: 2, username: 'José Campos', likes: 2, comentarios: 0 },
                { id: 3, username: 'Amanda Cassia', likes: 1200, comentarios: 650 },
                { id: 4, username: 'Maria Clara', likes: 15000, comentarios: 1800 },
                { id: 5, username: 'Maria Clara', likes: 0, comentarios: 0 }
            ]

        };
    }

    render() {
        return (
            <div>
                {
                    this.state.feed.map((item) => {
                        return (
                            <Feed id={item.id} username={item.username} likes={item.likes} comentarios={item.comentarios} />
                        );
                    })
                }
            </div>
        );
    }
}

export default App;