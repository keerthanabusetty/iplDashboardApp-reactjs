// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getIplDetails()
  }

  getIplDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const iplData = await response.json()
    const data = iplData.teams
    const updatedData = data.map(eachIpl => ({
      id: eachIpl.id,
      name: eachIpl.name,
      teamImageUrl: eachIpl.team_image_url,
    }))
    this.setState({iplTeams: updatedData, isLoading: false})
  }

  render() {
    const {iplTeams, isLoading} = this.state
    return (
      <div className="ipl-bg-container">
        <div className="ipl-dashboard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl"
          />
          <h1 className="ipl-heading">IPL DASHBOARD</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <ul className="ipl-list-container">
            {iplTeams.map(eachItem => (
              <TeamCard key={eachItem.id} iplDetails={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
