const shareButton = document.querySelector("button");

const textareaText = document.querySelector("textarea");

shareButton.addEventListener("click", () => {
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
