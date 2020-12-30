import avatars from "./avatars.js";
import { renderLessons } from "./lessons/index.js";

const avatarElement = document.querySelector(".avatar img");

export default function setUser(){if (!localStorage.getItem("user")) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        avatar: `/images/avatars/${
          avatars[Math.floor(Math.random() * avatars.length)]
        }.svg`,
        lessons: [],
      })
    );
  } else {
    renderLessons(JSON.parse(localStorage.getItem("user")));
  }
  avatarElement.setAttribute(
    "src",
    JSON.parse(localStorage.getItem("user")).avatar
  );
}