import React, { useEffect } from "react";
import { TFD } from "./Videos/TFD";
import { GoW } from "./Videos/GoW";
import { StellarBlade } from "./Videos/StellarBlade";
import { Carousel } from "./Carousel";
import { CouponGame } from "./CouponGame";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGameComponent1,
  selectGameComponent2,
  selectGameComponent3,
  selectGameComponent4,
  selectGameComponent5,
  selectGamesDidMount,
} from "../modules/Redux/stateSelector";
import { set } from "../modules/Redux/store";

export function Games() {
  const didMount: boolean = useSelector(selectGamesDidMount);
  let CarouselComponent: any = useSelector(selectGameComponent1);
  let tfdComponent: any = useSelector(selectGameComponent2);
  let gowComponent: any = useSelector(selectGameComponent3);
  let sbComponent: any = useSelector(selectGameComponent4);
  let triviaComponent: any = useSelector(selectGameComponent5);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(componentDidUnmount, []);

  const dispatch = useDispatch();

  if (CarouselComponent === "Carousel") CarouselComponent = <Carousel />;
  if (tfdComponent === "TFD") tfdComponent = <TFD />;
  if (gowComponent === "GoW") gowComponent = <GoW />;
  if (sbComponent === "StellarBlade") sbComponent = <StellarBlade />;
  if (triviaComponent === "CouponGame") triviaComponent = <CouponGame />;

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
          <div>{CarouselComponent}</div>
        </div>

        <article>
          <h3 id="thefirstdesendant" className="titleColor">
            The First Desendant
          </h3>
          <div>{tfdComponent}</div>
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
          {gowComponent}
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
          {sbComponent}
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
        {triviaComponent}
      </main>
      <footer>
        <p className="creatorName">Website created by David Billiot</p>
      </footer>
    </>
  );

  function componentDidMount() {
    document.title = "Playstation - Games Page";
    console.log("Title mounted, Carosel mounted");
    let action = set.consolesDidMount(true);
    dispatch(action);
    action = set.gameComponent1("Carousel");
    dispatch(action);
    action = set.gameComponent2("TFD");
    dispatch(action);
    action = set.gameComponent3("GoW");
    dispatch(action);
    action = set.gameComponent4("StellarBlade");
    dispatch(action);
    action = set.gameComponent5("CouponGame");
    dispatch(action);
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("this is the update phase");
    }
  }

  function componentDidUnmount() {
    return () => {
      console.log("Component has unmounted");
    };
  }
}
