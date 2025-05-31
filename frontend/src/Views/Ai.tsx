import React from "react";
import { set } from "../modules/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../modules/getAnswer";
import { selectGlobalAnswer } from "../modules/Redux/stateSelector";

export function Ai() {
  const answer = useSelector(selectGlobalAnswer);
  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Ask you question about the God of War franchise here.
        <br /> <input name="question" />
        <br />
        <br />
        <input type="submit" />
      </form>
      {answer}
    </div>
  );
  async function handleSubmit(event: any) {
    event.preventDefault();
    const context = `The God of War franchise is a critically acclaimed action-adventure video game series developed by Santa Monica Studio and published by Sony Interactive Entertainment. The series debuted in 2005 on the PlayStation 2 and has become a flagship title for the PlayStation brand.

The narrative centers around Kratos, a Spartan warrior who becomes entangled with various mythological pantheons. The series is divided into two main eras:

Greek Mythology Era: Kratos seeks vengeance against the Olympian gods after being deceived into killing his own family by Ares, the original God of War. This journey leads him to confront and defeat numerous gods, including Ares and Zeus, ultimately resulting in the destruction of Mount Olympus.

Norse Mythology Era: Set years later, an older Kratos resides in the Norse realm of Midgard, striving to leave his past behind. Following the death of his second wife, Faye, he embarks on a journey with his son, Atreus, to fulfill her last wish of scattering her ashes from the highest peak in the nine realms. This quest brings them into conflict with Norse gods and reveals deeper truths about Atreus's identity.

The series has expanded beyond games into novels, comics, and an upcoming television adaptation. It has sold over 66 million copies worldwide, making it one of PlayStation's most successful franchises.

God of War (2018)
Released in April 2018 for PlayStation 4 and later for Windows, this installment serves as a soft reboot, transitioning the series from Greek to Norse mythology. Players control Kratos, who, along with his son Atreus, journeys through the Norse realms to honor Faye's final wish. The game introduces a third-person, over-the-shoulder camera perspective and emphasizes a more intimate, character-driven narrative. Combat mechanics were overhauled, featuring the Leviathan Axe and a greater focus on strategy and exploration.

God of War (2018) received universal acclaim for its storytelling, world design, and character development, particularly the dynamic between Kratos and Atreus. It sold over 23 million units, becoming one of the best-selling PlayStation 4 games.

God of War Ragnarök (2022)
Serving as the sequel to the 2018 game, God of War Ragnarök was released in November 2022 for PlayStation 4 and PlayStation 5, with a Windows version following in 2024. The story continues Kratos and Atreus's journey as they confront the impending Ragnarök, the prophesied end of the Norse gods. The game expands on its predecessor's mechanics, offering more realms to explore, refined combat, and deeper character arcs.

Ragnarök achieved critical and commercial success, selling 5.1 million units in its first week and over 15 million within a year. It garnered multiple awards, including several wins at The Game Awards.

Legacy and Cultural Impact
The God of War series is renowned for its blend of mythological storytelling, intense combat, and character evolution. The transformation of Kratos from a vengeance-driven warrior to a reflective father figure has been praised for adding emotional depth to the franchise. The series' success has solidified its place in gaming history, influencing numerous action-adventure titles and storytelling approaches within the medium. `;
    const form = event.target.elements;
    const question = form.question.value;
    const answer = await getAnswer(question, context);
    const action = set.globalAnswer(answer);
    dispatch(action);
  }
}
