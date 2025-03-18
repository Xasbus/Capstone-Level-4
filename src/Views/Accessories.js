import React, { useEffect } from "react";
import { handleGame } from "../controllers/handleGame";

export function Accessories() {
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(compontentDidUnmount, []);
  return (
    <>
      <main>
        <article>
          <img
            title="assorted accessories"
            alt="accessories"
            width="100%"
            height="100px"
            src="https://cdn.glitch.global/484456c7-95c6-4c6d-8254-08d84585b7a3/0d914449-73d4-467f-8ea1-27895b0ea027.image.png?v=1722104613870"
          />

          <h1>PlayStation Accessories</h1>
          <section>
            <h3 id="normalcontroller">
              <img
                title="controller"
                alt="controller"
                width="50%"
                height="30%"
                src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-image-block-01-en-21mar23?$1600px$"
              />
            </h3>
            <h3 className="titleColor" id="controllerTitle">
              DualSense® wireless controller
            </h3>
            <p>
              Nibh metus ut,
              <u className="italic bold" id="eleShad">
                vivamus etiam elementum donec massa eu.
              </u>
              Magnis neque blandit non ante convallis; torquent finibus
              habitasse et. Ante scelerisque in sit faucibus lobortis dui mi
              mollis. Curae nam curabitur aliquam congue neque ut nec iaculis.
              Volutpat elementum justo taciti aliquam eros nascetur sollicitudin
              suspendisse. Leo iaculis auctor magna suscipit efficitur? Tempus
              habitasse libero natoque velit; massa dolor leo sodales felis. Hac
              sagittis praesent viverra nec suspendisse. Donec felis turpis
              suspendisse curabitur aptent urna tempus; ultricies viverra. Vitae
              ut placerat libero potenti vel euismod. Senectus montes
              scelerisque lorem tempor porta tristique lobortis. Fames ligula
              velit vehicula varius cras vulputate arcu potenti.
            </p>
            <h3 id="advcontroller">
              <img
                title="pro controller"
                alt="controller"
                width="50%"
                height="30%"
                src="data:image/jpeg;base64,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"
              />
            </h3>
            <h3 className="titleColor">DualSense Edge™ wireless controller</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Proin
              convallis finibus urna metus nec porta tortor vehicula. Magna
              euismod montes inceptos velit cras convallis sagittis. Duis donec
              aptent sodales fames pellentesque luctus? Habitant hac dis curae
              ultricies dui erat. Luctus fringilla habitasse at lectus
              adipiscing consequat sem. Condimentum a gravida malesuada magna,
              blandit convallis aptent. Libero ad elit nec, imperdiet lectus dui
              augue. Mollis aenean consequat litora blandit magna aliquam
              sapien. Commodo pellentesque odio vitae sapien enim. Leo porttitor
              diam sollicitudin; elementum luctus commodo! Commodo velit class
              porttitor elit accumsan luctus nibh porta. Facilisis suscipit
              egestas penatibus taciti non venenatis consectetur. Volutpat
              cursus mi pulvinar venenatis lobortis per lacus. Nunc enim
              efficitur porta at libero nunc. Praesent vitae amet pretium
              vehicula mattis pretium potenti. Quis suspendisse dis curae arcu
              facilisis porta libero. Tincidunt risus integer aptent augue etiam
              dui bibendum gravida. Nibh a porttitor morbi facilisis faucibus
              orci.
            </p>
          </section>

          <section>
            <h3 id="headset">
              <img
                title="headset"
                alt="headset"
                width="50%"
                height="30%"
                src="data:image/jpeg;base64,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"
              />
            </h3>
            <h3 className="titleColor">PULSE Elite™ wireless headset</h3>
            <p>
              Proin fermentum malesuada imperdiet quam hac sit turpis aptent
              nam. Faucibus class quam cubilia potenti dolor felis dis!
              Hendrerit tincidunt ac per, ipsum suscipit consectetur varius
              aenean. Aenean nibh sagittis accumsan mus dolor vel lectus. Class
              odio ac lacus; lacinia pellentesque congue. Lobortis non ipsum
              laoreet taciti mi porta praesent. Quam netus leo morbi eu fames
              dis mollis. Penatibus habitasse cursus sagittis lacus accumsan
              faucibus massa orci. Faucibus felis potenti curabitur porttitor
              torquent aliquet faucibus.
            </p>
            <p>
              Semper maximus ligula hendrerit tincidunt lobortis pharetra.
              Dapibus pellentesque nullam torquent vulputate congue faucibus
              dapibus. Dis ad sapien maximus magna massa duis phasellus. Egestas
              morbi id est nulla sapien ac tempor lobortis. Tristique ridiculus
              habitant montes varius tristique. Netus dignissim per posuere
              dignissim; taciti netus amet. Dis dapibus ultricies habitant amet
              donec cursus. Scelerisque mollis nec tristique nulla nostra
              posuere. Eget egestas adipiscing commodo varius cubilia, nisl
              ultricies convallis. Leo curae consequat curabitur ultrices;
              maecenas metus quam.
            </p>
          </section>

          <p>
            Chance to
            <span className="bold text-primary text-decoration-underline">
              WIN 25% OFF!!
            </span>
            coupon by guessing a number from 0-100.
            <br />
            You have 3 guesses.
          </p>

          <button onClick={handleGame} type="button">
            Click Here to play
          </button>
          <br />
          <output id="outputTag"></output>
          <hr />
        </article>
      </main>
      <footer>
        <div width="100%">
          <div className="row">
            <div className="col">
              <a href="#normalcontroller">DualSense wireless controller</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="#advcontroller">DualSense Edge wireless controller</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="#headset">PULSE Elite wireless headset</a>
            </div>
          </div>
        </div>
        <p className="creatorName">Website created by David Billiot</p>
      </footer>
    </>
  );
  function componentDidMount() {
    document.title = "Playstation - Accessories Page";
    console.log("Title Mounted");
  }
  function componentDidUpdate() {
    setTimeout(console.log("Nothing to update"), 1000);
  }
  function compontentDidUnmount() {
    setTimeout(console.log("Nothing to undate."), 2000);
  }
}
