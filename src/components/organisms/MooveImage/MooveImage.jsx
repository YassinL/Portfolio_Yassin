import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import "./MooveImage.scss"; // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 15 - 200}px,${y / 15 + 200}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 15 + 125}px,${y / 15 - 200}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 15 - 350}px,${y / 15 - 0}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 15 + 340}px,${y / 15 + 20}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 15 - 490}px,${y / 15 - 200}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 15 - 180}px,${y / 15 - 250}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 15 + 140}px,${y / 15 + 170}px,0)`;
const trans8 = (x, y) => `translate3d(${x / 15 - 470}px,${y / 15 + 270}px,0)`;
const trans9 = (x, y) => `translate3d(${x / 15 + 450}px,${y / 15 - 260}px,0)`;
const trans10 = (x, y) => `translate3d(${x / 15 + 440}px,${y / 15 + 255}px,0)`;

export default function MooveImage() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      class="container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class="card2"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        class="card2"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        class="card1"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        class="card3"
        style={{ transform: props.xy.interpolate(trans4) }}
      />
      <animated.div
        class="card3"
        style={{ transform: props.xy.interpolate(trans5) }}
      />
      <animated.div
        class="card1"
        style={{ transform: props.xy.interpolate(trans6) }}
      />
      <animated.div
        class="card1"
        style={{ transform: props.xy.interpolate(trans7) }}
      />
      <animated.div
        class="card1"
        style={{ transform: props.xy.interpolate(trans8) }}
      />
      <animated.div
        class="card1"
        style={{ transform: props.xy.interpolate(trans9) }}
      />
      <animated.div
        class="card2"
        style={{ transform: props.xy.interpolate(trans10) }}
      />
    </div>
  );
}
