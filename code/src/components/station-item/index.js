import React from "react"

class StationItem extends React.Component {

  render() {
    const { image, color, name, url } = this.props
    return (
      <div className="radio-boxes" style={{ backgroundColor: `#${color}`}}>
        <div className="radio-box">
          <div className="channel-image">
            <img src={image} alt="bild" />
          </div>
          <div className="container">
            <div className="channel-name"><p>{name}</p></div>
            <div className="audio">
              <audio controls className="audio-control">
                <source src={this.props.url} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StationItem
