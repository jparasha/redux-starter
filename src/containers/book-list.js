import React,  { Component } from 'React';

export default class BookList extends Component{
    renderList(){
        return this.props.books.map((map)=> {
            return(
                <li className ="list-group-item" key ="book.title">{book.title}</li>
            )
        });
    }
    
    render(){
        <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
    }
}