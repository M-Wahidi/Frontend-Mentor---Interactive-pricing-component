const slider = document.querySelector('.slider');
const pageViews = document.querySelector('.page-views');
const peymentToggle = document.querySelector('.toggle-price');
const peymentToggleCircle = document.querySelector('.toggle-circle');
const price = document.querySelector('.price');


// set default slider background Color 
document.addEventListener('DOMContentLoaded', () => {
    slider.style.background = 'linear-gradient(90deg ,hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%)';
})


// set slider background Color on change
slider.addEventListener('change', () => {
    let val = slider.value;
    let color = 'linear-gradient(90deg,  hsl(174, 77%, 80%)' + val + '%, hsl(224, 65%, 95%)' + val + '%)';
    slider.style.background = color;
    setPageViews(price)
    payemntTerm();


})


// event listenr on toggle
peymentToggle.addEventListener('click', () => {
    peymentToggleCircle.classList.toggle('active')
    peymentToggle.classList.toggle('active')
    payemntTerm();

})


// Get Page Price
function getPriceValue(price) {
    switch (slider.value) {
        case '0': {
            price = `8`
            return price;

        };
        case '25': {
            price = `12`
            return price;
        };
        case '50': {
            price = `16`
            return price;
        };
        case '75': {
            price = `24`
            return price;
        };
        case '100': {
            price = `36`
            return price;
        };
    }
}

// Set Page Views
function setPageViews(price) {
    const priceValue = getPriceValue(price)
    priceValue == '8' ? pageViews.innerHTML = '10k pageviews' :
        priceValue == '12' ? pageViews.innerHTML = '50k pageviews' :
            priceValue == '16' ? pageViews.innerHTML = '10k pageviews' :
                priceValue == '24' ? pageViews.innerHTML = '500k pageviews' :
                    priceValue == '36' ? pageViews.innerHTML = '1m pageviews' : ''
}





// Set Monthly Pirce
function setMonthlylPrice() {
    const priceValue = getPriceValue(price);
    price.innerHTML = priceValue + '.00';
}
// Set Yearly Pirce
function setyearlylPrice() {
    const priceValue = getPriceValue(price);
    price.innerHTML = (priceValue * 12) * (25 / 100) + '.00';
}


// Set Payment Term
function payemntTerm() {
    if (peymentToggle.classList.contains('active')) {
        setyearlylPrice()
    }
    else {
        setMonthlylPrice();
    }
}
