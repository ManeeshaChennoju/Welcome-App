import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  onSubscribe = () => {
    const {text} = this.state
    let newText
    if (text === 'Subscribe') {
      newText = 'Subscribed'
    } else if (text === 'Subscribed') {
      newText = 'Subscribe'
    }

    this.setState(prevState => {
      console.log('---------')
      return {text: newText}
    })
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="wishes">Thank you!Happy Learning</p>
        <button onClick={this.onSubscribe} className="button" type="button">
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
