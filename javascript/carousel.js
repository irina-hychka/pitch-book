(function() {
    const carousel = document.querySelector("[data-target='carousel']");
    const card = carousel.querySelector("[data-target='slide']");
    const leftButton = document.querySelector("[data-action='slideLeft']");
    const rightButton = document.querySelector("[data-action='slideRight']");
    const carouselWidth = carousel.offsetWidth;
    console.log(card);
    const cardWidth = card.offsetWidth;
    const cardStyle = card.currentStyle || window.getComputedStyle(card)
    const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

    const cardCount = carousel.querySelectorAll("[data-target='slide']").length;
    let offset = 0;
    const maxX = -((cardCount / 3) * carouselWidth +
        (cardMarginRight * (cardCount / 3)) -
        carouselWidth - cardMarginRight);


    // Add the click events
    leftButton.addEventListener("click", function () {
        if (offset !== 0) {
            offset += cardWidth + cardMarginRight;
            carousel.style.transform = `translateX(${offset}px)`;
        }
    })

    rightButton.addEventListener("click", function () {
        if (offset !== maxX) {
            offset -= cardWidth + cardMarginRight;
            carousel.style.transform = `translateX(${offset}px)`;
        }
    });
 })();