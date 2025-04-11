import React, { useEffect, useState } from "react";
import { ImageMap } from "./ImageMap";
import gamePic1 from "../../assets/gamePic1.jpg";
import gamePic2 from "../../assets/gamePic2.jpg";
import gamePic3 from "../../assets/gamePic3.jpg";
import "./Home.scss";

// import styles directly
export function Home() {
  const [didMount, setDidMount] = useState(false);
  // didMount is set to false

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(componentDidUnmount, []);

  return (
    <>
      <main id="homeMain">
        <img
          title="Playstation"
          alt="playstation title"
          width="100%"
          height="100px"
          src="https://cdn.glitch.global/484456c7-95c6-4c6d-8254-08d84585b7a3/f83b7c7f-1593-465d-bd43-6e8becdd04a4.image.png?v=1722101474400"
        />
        <section>
          <article className="backgroundColor">
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <h1>
                    <u>PlayStation</u>
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h3 id="consoles">
                    <img
                      title="PS5 & Controller"
                      alt="playstation5"
                      width="50%"
                      height="30%"
                      src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-dualsense-image-block-01-en-16nov23?$1600px--t$"
                    />
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col titleColor">
                  <h3>Consoles</h3>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3">
                <div className="col">
                  <p>
                    Experience an all-new generation of incredible PlayStation
                    games. Lightning Speed. Breath-taking Immersion. Stunning
                    Gameplay
                  </p>
                </div>
                <div className="col">
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Habitasse tristique ridiculus tristique dictum risus augue
                    nibh. Quisque purus pretium a fames vulputate auctor sit
                    ligula. Ridiculus posuere consequat facilisis commodo nulla
                    senectus egestas integer. Penatibus in fermentum parturient
                    morbi at varius. Sit aliquet clasds inceptos ligula blandit
                    mi neque tempus. Vitae molestie fusce tempus ridiculus
                    mollis lacinia vehicula. Purus platea viverra ac egestas
                    hac?
                  </p>
                </div>
                <div className="col">
                  <p>
                    Clasds dis ad sed donec est. Vehicula torquent mauris
                    posuere praesent, tortor ridiculus pulvinar erat. Vel
                    porttitor praesent aliquam litora varius egestas. Ante
                    consequat luctus praesent sit hac aliquam maximus. Vulputate
                    sociosqu lacus mauris erat venenatis aptent. Netus aliquet
                    augue vulputate maecenas finibus vulputate massa montes. Sit
                    montes aptent eleifend ac elementum felis erat quisque enim.
                    Conubia volutpat adipiscing ac luctus eget metus sapien
                    elit. Augue eros ligula sodales elementum vivamus semper
                    pellentesque ligula.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div className="container text-center">
              <div className="row">
                <div className="col" id="games">
                  <img
                    title="Baldur's Gate 3"
                    alt="Baldur's Gate 3"
                    width="100%"
                    height="100%"
                    src={gamePic1}
                  />
                </div>
                <div className="col">
                  <img
                    title="Skull & Bones"
                    alt="Skull & Bones"
                    width="100%"
                    height="100%"
                    src={gamePic2}
                  />
                </div>
                <div className="col">
                  <img
                    title="Final Fantasy XIV"
                    alt="Final Fantasy XIV"
                    width="100%"
                    height="100%"
                    src={gamePic3}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col titleColor">
                  <h3>
                    Games<div className="spinner-grow text-success"></div>
                    <div className="badge bg-success">ON SALE</div>
                  </h3>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3">
                <div className="col">
                  <p>
                    Discover the games you want, from exclusive blockbusters to
                    innovative indies, all brought to life with the power of the
                    PS5™ console.
                  </p>
                </div>
                <div className="col">
                  <p>
                    Natoque mus curae leo ut commodo, sapien interdum. Dui vel
                    risus erat magna at dui fusce. Malesuada praesent litora
                    vulputate tempor accumsan adipiscing? Dictum quisque
                    suscipit aptent vestibulum ipsum semper ad ultrices. Est dui
                    diam ipsum penatibus lacinia posuere metus dui mus.
                    Ultricies praesent elementum primis elementum sollicitudin
                    mus. Sollicitudin torquent magnis fames cubilia eros quis
                    sem. Habitasse consectetur ipsum ultricies inceptos
                    vestibulum per sagittis. Massa enim fringilla; rutrum clwass
                    quis consectetur eros.
                  </p>
                </div>
                <div className="col">
                  <p>
                    Sapien libero mi vehicula mauris; feugiat auctor accumsan.
                    Placerat habitant suspendisse elit donec sed curae phasellus
                    tempus. Congue fermentum consectetur praesent cursus, aenean
                    lobortis tristique. Aliquet ac ac proin condimentum
                    suspendisse a at. Morbi malesuada massa eget id suspendisse.
                    Elit maximus hac montes leo semper varius. Senectus ac
                    aenean taciti penatibus posuere accumsan nullam. Etiam
                    finibus risus neque urna dis tortor. Laoreet turpis dictum
                    clrass sociosqu mi at molestie.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div className="container text-center">
              <div className="row row-cols-1">
                <div className="col">
                  <h4 id="accessories">
                    <ImageMap />
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h3 className="titleColor">
                    Accessories <i className="bi bi-controller"></i>
                  </h3>
                </div>
              </div>
              <div className="row row-cols-sm-1 row-cols-lg-3">
                <div className="col">
                  <p>
                    Build your perfect gaming setup with controllers, headsets
                    and other accessories for your PS5® or PS4™ console.
                  </p>
                </div>
                <div className="col">
                  <p>
                    Diam montes euismod orci lobortis hac eleifend mus
                    ridiculus. Proin accumsan phasellus in maximus magna
                    adipiscing sagittis. Venenatis tristique elit malesuada
                    hendrerit inceptos. Malesuada diam suspendisse sollicitudin
                    quisque felis. Montes diam felis elit ipsum quis lectus
                    consectetur ullamcorper. Tempus donec lacinia mus suscipit
                    dignissim et dignissim inceptos? Ad varius nibh iaculis
                    pellentesque lacus cubilia.
                  </p>
                </div>
                <div className="col">
                  <p>
                    Mattis facilisis potenti venenatis magna cubilia ligula
                    venenatis. Consequat tortor fermentum id conubia, primis
                    cras. Dolor maximus enim claswad posuere vivamus nam
                    volutpat. Sagittis eget laoreet tristique primis, sit massa
                    vehicula. Libero natoque lobortis orci, velit dictumst
                    luctus non. Egestas magnis nulla nulla pharetra massa platea
                    porttitor scelerisque. Hendrerit donec eget; nunc gravida
                    suscipit hac et pretium. Morbi odio clasdw dis; dolor
                    consequat condimentum convallis. Tempor odio odio lacus
                    ligula in lacinia fusce efficitur parturient.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <hr />
      </main>
      <footer>
        <nav>
          <div>
            <div>
              <a href="#consoles">Consoles</a>
            </div>
          </div>

          <div>
            <div>
              <a href="#games">Games</a>
            </div>
          </div>
          <div>
            <div>
              <a href="#accessories">Accessories</a>
            </div>
          </div>
        </nav>
        <p className="creatorName">Website created by David Billiot</p>
      </footer>
    </>
  );
  // componentDidMount will run and mount the title in the tab
  function componentDidMount() {
    document.title = "Unofficial Playstation Site";
    console.log("Homepage mounted");
    setDidMount(true);
  }

  function componentDidUpdate() {
    if (didMount) {
      // if !didMount and is still false, setDidMount changes it to true and will log into the console
      console.log("this is the update phase");
    }
  }
  function componentDidUnmount() {
    return () => {
      console.log("Homepage has unmounted");
    };
  }
}
