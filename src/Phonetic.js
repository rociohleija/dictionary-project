import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  let audioLink = props.phonetic.audio;

  return (
    <div className="Phonetic">
      {props.phonetic.audio && (
        <ReactAudioPlayer src={audioLink} autoPlay controls />
      )}
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
  }