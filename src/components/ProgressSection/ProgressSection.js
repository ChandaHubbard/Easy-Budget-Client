import React from "react";
import progress from "../../images/marathon.png"

export default class ProgressSection extends React.Component {
  render() 
  {
    return (
    <div>
      <h3>Visible Progress</h3>
      <h5>Easy Budget Dashboard</h5>
      <br /> <img
        src={progress}
        alt="#"
        className="left"
        height="250em"/> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum
      nunc aliquet bibendum enim facilisis gravida neque. Enim blandit volutpat
      maecenas volutpat blandit aliquam etiam erat velit. Facilisi cras
      fermentum odio eu. Et malesuada fames ac turpis egestas.
    </div>
  )
}
}