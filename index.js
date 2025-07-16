// const eventScroll = document.querySelectorAll(".horizontal-scroll");
// for (card of eventScroll) {
//     card.addEventListener("wheel", (event) => {
//         event.preventDefault();
//         card.scrollBy({
//             left: event.deltaY < 0 ? -30 : 30,
//         });
//     });
// }

document.addEventListener("scroll", update);

function update() {
  const elem = document.querySelector(".horizontal-scroll");
  const rect = elem.getBoundingClientRect();

  if (rect.top < 530) {
    const updates = document.querySelectorAll(".update-card");
    for (card of updates) {
        card.classList.add("fade-in")
    }
  }
}