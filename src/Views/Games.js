import React from "react";
import { handleClick } from "../controllers/gamesHtml/handleClick";
import { TFD } from "./Videos/TFD";
import { GoW } from "./Videos/GoW";
import { StellarBlade } from "./Videos/StellarBlade";
import { Carousel } from "./Carousel";

export function Games() {
  return (
    <>
      <main>
        <img
          alt="various games"
          width="100%"
          height="100px"
          src="https://cdn.glitch.global/484456c7-95c6-4c6d-8254-08d84585b7a3/212acd83-fe07-4065-a857-c108902a12af.image.png?v=1722101559396"
        />
        <h1>Video Games</h1>
        <div style={{ width: "65%", margin: "auto" }}>
          <div>
            <Carousel />
          </div>
        </div>

        <article>
          <h3 id="thefirstdesendant" className="titleColor">
            The First Desendant
          </h3>
          <TFD src="https://www.youtube.com/embed/wv5L9U_TUHQ?si=c2BUIg5_6cbfykx7" />
          <div className="bold">About The First Desendant</div>
          <dialog open className="alert alert-success">
            Free Limited Time!!
            <button
              className="btn-close"
              data-bs-dismiss="alert"
              role="alert"
              aria-label="Close"
            ></button>
          </dialog>
          <span className="badge bg-success italic">FREE LIMITED TIME!!</span>
          <br />
          <p>
            Leo porttitor diam sollicitudin; elementum luctus commodo! Commodo
            velit class porttitor elit accumsan luctus nibh porta. Facilisis
            suscipit egestas penatibus taciti non venenatis consectetur.
            Volutpat cursus mi pulvinar venenatis lobortis per lacus. Nunc enim
            efficitur porta at libero nunc. Praesent vitae amet pretium vehicula
            mattis pretium potenti. Quis suspendisse dis curae arcu facilisis
            porta libero. Tincidunt risus integer aptent augue etiam dui
            bibendum gravida. Nibh a porttitor morbi facilisis faucibus orci.
          </p>
        </article>
        <article>
          <h3 id="godofwar" className="titleColor">
            God of War Ragnarok
          </h3>
          <GoW />
          <p className="bold">About God of War Ragnarok</p>
          <p>
            Torquent donec vehicula suspendisse nostra integer id parturient
            tristique. Volutpat nibh elit primis dictum imperdiet dolor
            pharetra. Habitasse magna adipiscing ridiculus ridiculus varius
            dolor diam porttitor. Augue pharetra eleifend varius egestas eros;
            ornare porttitor facilisi. Parturient ultricies praesent ullamcorper
            et pharetra tortor mollis accumsan. Eros nam viverra adipiscing
            tempus nulla eros etiam congue in.
          </p>
        </article>
        <article>
          <h3 id="stellarblade" className="titleColor">
            Stellar Blade
          </h3>
          <StellarBlade />
          <p className="bold">About Stellar Blade</p>
          <p>
            Posuere ullamcorper ornare vitae vitae nisl lacinia condimentum
            fames. Viverra posuere erat eleifend nulla ante velit. Felis porta
            est elit a tempus netus faucibus eget nam. Urna tempor ad taciti
            non, mus duis montes. Scelerisque ornare platea orci sit consequat
            accumsan erat taciti. Proin felis suscipit platea augue ut
            pellentesque metus. Eleifend lacinia pretium sodales facilisis, nibh
            elit nullam nisl. Etiam molestie conubia nascetur faucibus
            penatibus. Maecenas suscipit praesent phasellus mattis odio? Porta
            neque quisque porta odio rutrum, nullam suspendisse. Porttitor dis
            fusce maximus aenean ex elit scelerisque in. Potenti non dapibus
            odio purus amet aliquam sodales. Orci nunc finibus penatibus; donec
            amet ullamcorper. Neque cursus penatibus purus porttitor fames
            nascetur tristique. Dignissim vehicula tempor vehicula ex dictum.
            Sit bibendum dignissim non proin tortor placerat semper. Condimentum
            nullam elit erat mauris iaculis enim pharetra est aptent.
          </p>
        </article>
        <h3 className="titleColor">Game Trivia</h3>
        <p>How well do you know your video game???</p>
        <button onClick={handleClick}>Click here to get questions</button>
        <div id="myTag"></div>
      </main>
      <footer>
        <p className="creatorName">Website created by David Billiot</p>
      </footer>
    </>
  );
}
