import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';

class BookDetail extends Component {
  constructor() {
    super()
    console.log('o que tem no state', this.state)
  }

  render() {
    if(!this.props.book){
      return <div>Select a book to get started.</div>
    }

    console.log('o que ainda tem ', this.state)
    return ( 
      <div>
        <div><h3> Details for: </h3></div>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('executou o maptoprops', state)
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);