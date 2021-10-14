const shareButton = document.querySelector("button");

shareButton.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Web Share API",
        text: "Sent with the Web Share API",
        url: "https://github.com/douglasgomes98/poc-share-api",
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
