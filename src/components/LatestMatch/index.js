// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  console.log(matchDetails)
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails
  return (
    <div className="latest-match-card">
      <div className="team-card">
        <div className="competing-team-details">
          <p className="team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="seperator" />
      <div className="match-result-details">
        <h1 className="innings">First Innings</h1>
        <p className="text">{firstInnings}</p>
        <h1 className="innings">Second Innings</h1>
        <p className="text">{secondInnings}</p>\
        <h1 className="innings">Man Of The Match</h1>
        <p className="text">{manOfTheMatch}</p>
        <h1 className="innings">Umpires</h1>
        <p className="text">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
