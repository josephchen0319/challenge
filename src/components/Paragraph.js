import React from "react";

const Paragraph = ({ textArray }) => {
  if (textArray.length > 0) {
    let cards = textArray.map((text, i) => {
      return (
        <div className="card col-12" key={i}>
          <div className="card-body">{text}</div>
        </div>
      );
    });
    return <React.Fragment>{cards}</React.Fragment>;
  } else {
    return (
      <div className="card col-12">
        <div className="card-body">Empty</div>
      </div>
    );
  }
};

export default Paragraph;
