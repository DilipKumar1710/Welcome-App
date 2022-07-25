import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  changeButtonText = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state

    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button
          className="button"
          type="button"
          onClick={this.changeButtonText}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
