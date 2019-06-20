import React from 'react';
import Post from './Post';
import Comentario from './Comentario';

export default class App extends React.Component {
    render() {
        return (
            <main className="MyApp">
            <h1>React App</h1>
            <Post className="Post" title="Comenta aqui cara !" />
            <Post className="Post" title="E aqui também !" />
            </main>
        )
    }
}