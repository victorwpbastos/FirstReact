import React from 'react';
import Comentario from './Comentario';

export default class Post extends React.Component {

    constructor(props) {
    super(props);

    this.state = {
        comment: [],
        NewCommentText: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            comment: [
                ...this.state.comment,
                {text: this.state.NewCommentText}
            ]
        });

        this.setState({ NewCommentText: ''});

        e.preventDefault();
    }

    handleTextChange(e) {
        this.setState({ NewCommentText: e.target.value})
    }

    render() {
        return (
            <div className="Post">
            <h2>{this.props.title}</h2>
            <form onSubmit={this.handleSubmit}>
            <div className="campos">
                <input placeholder="Comentário" value={this.state.NewCommentText}
                onChange={this.handleTextChange}
                ></input>
                <button type="submit">Comentar</button>
            </div>
            </form>
            <div className="comment">
           {this.state.comment.map((comment, index) => {
              return(
              <Comentario key={index} text={comment.text}/>
            );
           })}
           </div>
           
            </div>
        )
    }
}
