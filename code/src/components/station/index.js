import React from "react"
import "./index.css"

import StationItem from '../station-item'

class Station extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      channels: []
    }
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        channels: json.channels
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.channels
          .map(item =>
            <StationItem
              image={item.image}
              color={item.color}
              name={item.name}
              url={item.liveaudio.url}
            />
          )}
      </div>
    )
  }
}
export default Station
