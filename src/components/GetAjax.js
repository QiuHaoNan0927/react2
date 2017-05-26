import React, {Component} from 'react'

class GetAjax extends Component {
  constructor() {
    super()
  }
  state = {
    username: '',
    lastGistUrl: ''
  }
  mounted = true
  componentDidMount() {
    $.getJSON(this.props.url, data => {
      let lastGist = data[0]
      this.setState({username: lastGist.owner.login, lastGistUrl: lastGist.html_url})
    })
  }

  render() {
    return (
      <div>
        <a href={this.state.lastGistUrl}>{this.state.username}</a>
      </div>
    )
  }
}

export default GetAjax
