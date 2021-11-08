const TruckOnClick = () => {
    $(".home-page").fadeOut();
    $(".third-page").fadeOut();
    $(".second-page").fadeIn(200);
}

const TrailerOnClick = () => {
    $(".home-page").fadeOut();
    $(".third-page").fadeOut();
    $(".second-page").fadeIn(200);
}

const BackOnClick = () => {
    $(".second-page").fadeOut();
    $(".third-page").fadeOut();
    $(".home-page").fadeIn(200);
}

const NextOnClick = () => {
    $(".second-page").fadeOut();
    $(".home-page").fadeOut();
    $(".third-page").fadeIn(200);
}