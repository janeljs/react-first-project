import * as React from 'react';
import '../assets/App.css';
import * as API from '../api'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'junsoo',
      posts: []
    }
  }

  async componentDidMount(){
    await API.getPost(1)
    await API.getPosts()
    await API.modifyPost(1, {title: "new title", content: "new content"})
    await API.createPost({title: "created post", content: "created content"})
    await API.deletePost(3)
    await API.getPosts()
  }

  render(){
    return (
      <div className="main">
        <div className="post-list"></div>
        <div className="post-body">
          <p>Title</p>
          <p>Content {this.state.name}</p>
        </div>
      </div>
    );
  }
}

export default App;
