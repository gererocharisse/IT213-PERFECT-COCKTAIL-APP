class CocktailDB {

    // Save the recipes into local storage
    saveIntoDB(drink) {
        const drinks = this.getFromDB();

        drinks.push(drink);

        // Add the new array into the local storage
        localStorage.setItem('drinks', JSON.stringify(drinks));
    }

    // Removes element from the local storage
    removeFromDB(id) {
        const drinks = this.gerFromDB();

        // Loop
        drinks.forEach((drink, index) => {
            if(id === drink.id) {
                drinks.splice(index, 1);
            }
        });
        // Set the array into local storage
        localStorage.setItem('drinks', JSON.stringify(drinks));
    }

    getFromDB() {
        let drinks;
        // Check from local storage

        if(localStorage.getItem('drinks') === null) {
            drinks = [];
        } else {
            drinks = JSON.parse( localStorage.getItem('drinks') );
        }
        return drinks;
    }
}