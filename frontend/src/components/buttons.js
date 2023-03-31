import React from "react";
import { Link } from "react-router-dom";
import "./buttons.css";

export function BannerButton(props) {
  return (
    <div>
      <Link className="bannerButton" to={props.nav}>
        {props.name}
      </Link>
    </div>
  );
}

export function OtherButton(props) {
  return (
    <div>
      <Link className="otherButton" to={props.nav}>
        {props.name}
      </Link>
    </div>
  );
}
