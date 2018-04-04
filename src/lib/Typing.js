import React from 'react'
import { string, number } from 'prop-types'
import './typing.css'

let timeout
const SECOND = 1000
class Typing extends React.Component {
  state = {
    totalVisibilityChar: 1,
  }
  
  componentDidMount() {
    timeout = setInterval(()=> {
      this.setState((state, {text, delay, cps}) => ({
        totalVisibilityChar: state.totalVisibilityChar <= (text.length + (delay * cps)) ? 
          state.totalVisibilityChar + 1 : 1
      }))
    }, SECOND * (1 / this.props.cps))
  }

  componentWillUnmount() {
    clearInterval(timeout)
  }

  renderText = (text) => (
    text.substring(0, this.state.totalVisibilityChar -1)
  )

  shouldBlink = () => (
    this.state.totalVisibilityChar - 1 > this.props.text.length
  )

  render () {
    return this.props.text !== '' ? (
      <span>
        {this.renderText(this.props.text)}
        <span className={`keyboard-cursor ${this.shouldBlink() ? 'blink' : ''}`}>|</span>
      </span>
    ) : null
  }
}

Typing.propTypes = {
  text: string,
  delay: number,
  cps: number,
}

Typing.defaultProps = {
  /** Text */
  text: '',
  /** Last blinking duration in second */
  delay: 3,
  /** Character per second */
  cps: 5,
}

export default Typing
