const sharePanel = document.querySelector(".share-panel");

const shareButton = document.querySelector(".share");

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

shareButton.addEventListener("mouseover", showSharePanel);
sharePanel.addEventListener("mouseover", showSharePanel);

sharePanel.addEventListener("mouseout", hideSharePanel);
