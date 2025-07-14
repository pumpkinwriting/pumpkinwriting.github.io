const eventScroll = document.querySelectorAll(".horizontal-scroll");
for (card of eventScroll) {
    card.addEventListener("wheel", (event) => {
        event.preventDefault();
        card.scrollBy({
            left: event.deltaY < 0 ? -30 : 30,
        });
    });
}