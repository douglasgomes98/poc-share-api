const shareButton = document.querySelector("button");

const shareData = {
  title: "MDN",
  text: "Aprenda desenvolvimento web no MDN!",
  url: "https://developer.mozilla.org",
};

shareButton.addEventListener("click", async () => {
  await navigator.share(shareData);
});
