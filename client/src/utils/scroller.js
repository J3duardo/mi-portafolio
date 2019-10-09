export const sectionScroller = (sectionId, action) => {
  const sectionPosition = document.querySelector(sectionId).offsetTop;
  window.scrollTo({
    "behavior": "smooth",
    "left": 0,
    "top": sectionPosition
  });
  
  action(null);
}