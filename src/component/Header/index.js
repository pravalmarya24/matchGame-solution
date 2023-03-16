import './index.css'

const Header = props => {
  const {scores, seconds, intervalId} = props
  if (seconds <= 0) {
    clearInterval(intervalId)
  }
  return (
    <nav className="navbar-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />

      <div className="timer-container">
        <div className="score-container">
          <p className="score-para">
            Score: <span className="span-element">{scores}</span>
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer-logo"
        />
        <p className="sec-count">{seconds} sec</p>
      </div>
    </nav>
  )
}

export default Header
