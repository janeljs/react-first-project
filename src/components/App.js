import * as React from 'react';
import '../assets/App.css';
import * as API from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Jane',
      posts: []
    }
  }

  async componentDidMount() {
    await API.getPost(1) // id를 가진 post만 반환
    await API.getPosts()
    await API.modifyPost(1, { title: "new title", content: "new content" })
    await API.createPost({ title: "created post", content: "created content" }) // 포스트 생성
    await API.deletePost(3)
    await API.getPosts()
  }

  render() {
    return (
      <div className="main">
        <div className="post-list"></div>
        <div className="post-body">
          <p><h1>First React Project</h1></p>
          <p>published by {this.state.name}</p>
        </div>
      </div>
    );
  }
}

export default App;
