import React from 'react';

export default class Comentario extends React.Component {
    render() {
        return(
            <div className="comentarios">
            <p className="Infeliz">{this.props.text}</p>
            </div>
        )
    }
}