let image_1 = document.getElementById(`image_1`);

function change_image() {
    if (image_1.outerHTML = `<img id="image_1"
    src="https://images.pexels.com/photos/15327232/pexels-photo-15327232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="foggy city" width="200px">`) {
        image_1.outerHTML = `<img id="image_1"
        src="https://images.pexels.com/photos/5346060/pexels-photo-5346060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Japanese lettering under lamp" width="200px">`
    } else if (image_1.outerHTML = `<img id="image_1"
    src="https://images.pexels.com/photos/5346060/pexels-photo-5346060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Japanese lettering under lamp" width="200px">`) {
        image_1.outerHTML = `<img id="image_1"
    src="https://images.pexels.com/photos/15327232/pexels-photo-15327232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="foggy city" width="200px">`
    }
};

image_1.addEventListener(`click`, change_image);
