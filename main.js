const sharePanel = document.querySelector(".share-panel");
const shareIcon = document.querySelector(".share-icon");
const shareIconCircle = document.querySelector(".share");

const showSharePanel = () => {
  shareIcon.style.color = "#fff";
  shareIconCircle.style.backgroundColor = "#6d7f97";
  sharePanel.style.opacity = 1;
  sharePanel.style.zIndex = 1;
};

const hideSharePanel = () => {
  shareIcon.style.color = "#6d7f97";
  shareIconCircle.style.backgroundColor = "#ecf2f8";
  sharePanel.style.opacity = 0;
  sharePanel.style.zIndex = -1;
};

shareIconCircle.addEventListener("mouseover", showSharePanel);
sharePanel.addEventListener("mouseover", showSharePanel);

sharePanel.addEventListener("mouseout", hideSharePanel);
