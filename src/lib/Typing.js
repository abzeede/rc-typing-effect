import React from 'react'
import { string, number } from 'prop-types'
import './typing.css'

let timeout
class Typing extends React.Component {
  propTypes = {
    message: string,
    delay: number,
    cpms: number,
  }
  defaultProps = {
    message: '',
    /** Delay in millisecond */
    deplay: 0,
    /** Character per millisecond */
    cpms: 125,
  }
  state = {
    totalVisibilityChar: 1,
  }
  
  componentDidMount() {
    timeout = setInterval(()=> {
      this.setState((state, {message, delay, cpms}) => ({
        totalVisibilityChar: state.totalVisibilityChar <= (message.length + (delay / cpms)) ? 
          state.totalVisibilityChar + 1 : 1
      }))
    }, this.props.cpms)
  }

  componentWillUnmount() {
    clearInterval(timeout)
  }

  renderMessage = () => (
    this.props.message.substring(0, this.state.totalVisibilityChar -1)
  )

  shouldBlink = () => (
    this.state.totalVisibilityChar - 1 > this.props.message.length
  )

  render () {
    return (
      <div>
        {this.renderMessage()}
        <span className={`keyboard-cursor ${this.shouldBlink() ? 'blink' : ''}`}>|</span>
      </div>
    )
  }
}

export default Typing
