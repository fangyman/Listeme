import React from "react";
import "./button.css";

export default function Button(props) {
	return <button onClick={props.handler}>{props.children}</button>;
}
