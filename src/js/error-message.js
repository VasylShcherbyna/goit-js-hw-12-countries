import { error } from "@pnotify/core";
import getRefs from "./get-refs.js";

function matchesError() {
  error(
    `Знайдено забагато збігів.
    Введіть більш конкретний запит!`,
    1000
  );
}

function onFetchError() {
  error(`Жодної такої країни. Введіть ще один запит!`, 1000);
}

function hideError() {
  const errorMsg = document.querySelector(".pnotify-container");
  if (errorMsg) {
    errorMsg.classList.add("hidden");
  }
}

export default { matchesError, onFetchError };
