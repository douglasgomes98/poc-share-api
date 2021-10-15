import sliceImage from "./slice.png";

const shareTextButton = document.querySelector("#button-text");
const shareImageButton = document.querySelector("#button-img");

const textareaText = document.querySelector("textarea");

shareTextButton.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Web Share API",
        text: textareaText.value,
      })
      .then(() => {
        console.log("Shared successfully.");
      })
      .catch((error) => {
        console.log("There was an error sharing:", error);
      });
  } else {
    console.log("The Web Share API is not supported in your browser.");
  }
});

shareImageButton.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Web Share API",
        files: [sliceImage],
      })
      .then(() => {
        console.log("Shared successfully.");
      })
      .catch((error) => {
        console.log("There was an error sharing:", error);
      });
  } else {
    console.log("The Web Share API is not supported in your browser.");
  }
});
