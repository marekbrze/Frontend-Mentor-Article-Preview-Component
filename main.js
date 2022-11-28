const sharePanel = document.querySelector(".share-panel");

const shareButton = document.querySelector(".share-button");

const showSharePanel = () => {
  shareButton.style.color = "#fff";
  shareButton.style.backgroundColor = "#6d7f97";
  sharePanel.style.opacity = 1;
  sharePanel.style.zIndex = 1;
};

const hideSharePanel = () => {
  shareButton.style.color = "#6d7f97";
  shareButton.style.backgroundColor = "#ecf2f8";
  sharePanel.style.opacity = 0;
  sharePanel.style.zIndex = -1;
};

const toogleSharePanel = (e) => {
  if (e.key === "Enter") {
    return sharePanel.style.opacity === 1
      ? console.log("Works")
      : showSharePanel();
  }
};

shareButton.addEventListener("mouseover", showSharePanel);
// TODO: Add toggle to the button
shareButton.addEventListener("keypress", toogleSharePanel);
sharePanel.addEventListener("mouseover", showSharePanel);

sharePanel.addEventListener("mouseout", hideSharePanel);
