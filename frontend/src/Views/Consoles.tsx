import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectConsolesDidMount } from "../modules/Redux/stateSelector";
import { set } from "../modules/Redux/store";
import xboxConsole from "../../assets/xboxConsole.jpg";

export function Consoles() {
  const didMount: boolean = useSelector(selectConsolesDidMount);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(componentDidUnmount, []);

  const dispatch = useDispatch();
  return (
    <>
      <main>
        <img
          title="PS5"
          alt="consoles"
          width="100%"
          height="100px"
          src="https://cdn.glitch.global/484456c7-95c6-4c6d-8254-08d84585b7a3/8ea6b726-4ea9-405a-98a6-3bef3603b87d.image.png?v=1722103725076"
        />
        <h1>Gaming Consoles</h1>
        <article style={{ padding: "3vw" }}>
          <a id="playstation5"></a>
          <div className="card text-bg-dark">
            <img
              style={{
                width: "50vw",
                height: "30vw",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://media.direct.playstation.com/is/image/sierialto/PS5-Disc-Slim-New-Hero-1?$Background_Large$"
              className="card-img"
              alt="PS5"
            />

            <div className="card-img-overlay">
              <h3 className="card-title" style={{ color: "gold" }}>
                Playstation 5
              </h3>
              <div className="card-text" style={{ color: "gold" }}>
                The PlayStation 5 (PS5) is Sony’s ninth-generation home video
                game console, launched in November 2020 as the successor to the
                PlayStation 4. Designed to deliver a transformative gaming
                experience, the PS5 combines cutting-edge hardware, immersive
                features, and a bold futuristic design to redefine what console
                gaming can be.
              </div>
              <div
                className="card-text"
                style={{ color: "gold", fontSize: "auto" }}
              >
                <small>
                  Powerful Performance: Equipped with an 8-core AMD Zen 2 CPU
                  and RDNA 2 GPU, the PS5 supports up to 4K resolution at 120
                  FPS, with ray tracing for lifelike lighting and reflections.
                  <div>
                    Backward Compatibility: Supports most PS4 games and
                    accessories, making the transition smoother for longtime
                    fans.
                    <br />
                    <span>
                      Ultra-Fast SSD: The custom 825GB NVMe SSD drastically
                      reduces load times and enables seamless open-world
                      exploration.
                    </span>
                    The PS5 boasts a growing library of exclusive titles like
                    Demon’s Souls, Ratchet & Clank: Rift Apart, and Spider-Man:
                    Miles Morales. With support for PlayStation VR and
                    integration with streaming services like Netflix and
                    Disney+, it’s more than just a gaming console—it's a full
                    entertainment hub.
                  </div>
                </small>
              </div>
            </div>
          </div>
        </article>
        <article style={{ padding: "3vw" }}>
          <a id="playstation5"></a>
          <div className="card text-bg-dark">
            <img
              style={{
                width: "50vw",
                height: "30vw",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={xboxConsole}
              className="card-img"
              alt="PS4"
            />

            <div className="card-img-overlay">
              <h3
                className="card-title"
                style={{ color: "gold", fontSize: "auto" }}
              >
                Xbox Series X
              </h3>
              <div className="card-text" style={{ color: "gold" }}>
                The Xbox Series X is Microsoft's flagship gaming console,
                released in November 2020. It's a powerful machine designed for
                high-fidelity gaming
                <div>
                  Processing Power: It boasts a custom AMD Zen 2 CPU and RDNA 2
                  GPU, enabling 4K resolution gaming at up to 120 frames per
                  second. This means incredibly detailed graphics and smooth
                  gameplay.
                </div>
              </div>
              <div className="card-text" style={{ color: "gold" }}>
                <small>
                  <div>
                    Storage: It features a 1TB custom NVMe SSD, which
                    drastically reduces loading times for games and allows for
                    features like Quick Resume, letting players switch between
                    multiple games almost instantly.
                  </div>
                  <div>
                    Backward Compatibility: A major selling point is its
                    extensive backward compatibility, allowing players to play
                    thousands of games from previous Xbox generations (Xbox One,
                    Xbox 360, and original Xbox) often with improved
                    performance.
                  </div>
                  <div>
                    Game Pass: Xbox Game Pass is a subscription service that
                    offers a large library of games, including new first-party
                    titles on day one, which is a significant value proposition
                    for players.
                  </div>
                </small>
              </div>
            </div>
          </div>
        </article>
        <article style={{ padding: "3vw" }}>
          <a id="playstationvr"></a>
          <div className="card text-bg-dark">
            <img
              style={{
                width: "50vw",
                height: "30vw",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://th.bing.com/th/id/OIP.y_Z4aw_Mlmv2zwIpOshDcwHaEK?w=202&h=113&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="card-img"
              alt="PS5"
            />

            <div className="card-img-overlay">
              <h3 className="card-title" style={{ color: "gold" }}>
                Virtual Reality
              </h3>
              <div className="card-text" style={{ color: "gold" }}>
                Virtual Reality (VR) gaming headsets are immersive devices that
                transport players into interactive 3D environments. By combining
                visual, auditory, and motion-tracking technologies, they create
                a sense of presence—making users feel like they're truly inside
                the game world.
              </div>
              <div className="card-text" style={{ color: "gold" }}>
                <small>
                  <div>
                    Displaying stereoscopic 3D visuals: Separate images for each
                    eye simulate depth.
                  </div>
                  <div>
                    Tracking head and body movement: Using gyroscopes,
                    accelerometers, and sometimes external sensors.
                    <br />
                    Providing spatial audio: Sounds come from specific
                    directions to match the virtual environment.
                  </div>
                </small>
              </div>
            </div>
          </div>
          ;
        </article>

        <br />
        <br />
        <hr />
      </main>
      <footer>
        <div>
          <div className="row">
            <div className="col">
              <a href="#playstation5">PlayStation 5</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="#playstation4">PlayStation 4</a>
            </div>
          </div>
          <div>
            <div className="col">
              <a href="#playstationvr">PlayStation VR2</a>
            </div>
          </div>
        </div>
        <div className="creatorName">Website created by David Billiot</div>
      </footer>
    </>
  );

  function componentDidMount() {
    document.title = "Playstation - Console Page";
    console.log("Title mounted");
    let action = set.consolesDidMount(true);
    dispatch(action);
  }
  function componentDidUpdate() {
    if (didMount) {
      console.log("this is the update phase");
    }
  }
  function componentDidUnmount() {
    return () => {
      console.log("Homepage has unmounted");
    };
  }
}
