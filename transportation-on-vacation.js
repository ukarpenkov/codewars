function rentalCarCost(d) {
    let price = d * 40
    if (d >= 7) {
        return price - 50
    }
    if (d >= 3) {
        return price - 20
    }

    return price


}


rentalCarCost(1)//, 40);
rentalCarCost(2)//, 80);
rentalCarCost(3)//, 100);
rentalCarCost(4)//, 140);
rentalCarCost(5)//, 180);
rentalCarCost(6)//, 220);
rentalCarCost(7)//, 230);
rentalCarCost(8)//, 270);
rentalCarCost(9)//, 310);
rentalCarCost(10)//, 350); 