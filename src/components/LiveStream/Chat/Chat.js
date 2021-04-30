import React from "react";

export default function Chat() {
  return (
    <div className="right_side">
      <div className="fcrse_3">
        <div className="cater_ttle">
          <h4>Live Chat</h4>
        </div>
        <div className="live_chat">
          <div className="chat1">
            <p>
              <a href="#">John Doe</a>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec aliquet molestie leo ac pellentesque
            </p>
            <p>
              <a href="#">Poonam</a>Class aptent taciti sociosqu ad litora
              torquent per conubia nostra
            </p>
            <p>
              <a href="#">Jass</a>Nulla sollicitudin nec nisi at pellentesque.
              Cras fringilla est et sem tempor
            </p>
            <p>
              <a href="#">Albert Smith</a>Pellentesque ultricies risus sit amet
              congue euismod
            </p>
            <p>
              <a href="#">Jassica William</a>Nullam efficitur tristique
              consequat
            </p>
            <p>
              <a href="#">Joy Dua</a>Proin sed leo eleifend,
            </p>
            <p>
              <a href="#">Zoena Singh</a>Aliquam dignissim elementum sem id
              rutrum
            </p>
            <p>
              <a href="#">Amritpal Singh</a>Fusce a elit at libero sollicitudin
              tincidunt
            </p>
            <p>
              <a href="#">Johnson</a>Ut laoreet lobortis ornare
            </p>
            <p>
              <a href="#">Jashan</a>Sed pretium erat eu turpis condimentum
            </p>
          </div>
        </div>
        <div className="live_comment">
          <input
            className="live_input"
            type="text"
            placeholder="Say Something..."
          />
          <button className="btn_live">
            <i class="fa fa-reply"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
