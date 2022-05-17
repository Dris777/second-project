const cart = {
    items: [],
    getItems() {
        return cart.items;
    },
    add(product) {
        this.items.push(product)
        // добавлять карточки: 1 вызов- 1 карточка
    },
    remove(productName) {
        let colvoDeletetName = 0;
        for (const name of this.items) {

            if (name.name === productName.name) {
                this.items.splice(this.items.indexOf(name), 1)
            }
            for (const name of this.items) {
                     if (name.name === productName.name) {
                
                this.items.splice(this.items.indexOf(name), 1)
            }
                }
        }
        // удаляет такую карточку не важно колво
    },
    clear() {
        this.items = []
    },
    counTotalPrice() {
        let totalPrice = 0;

        for (const value of this.items) {

            totalPrice+=value.price
        }

        return totalPrice
    },
     
    increaseQuatity(productName) {
        for (const product of this.items) {
            if (product.name === productName.name) {
                this.items.push(productName)
               break
            }
        }// должно значение добавлять на + 1 как в магазине выбрал и в корзине + добавляет +1
        //  такое решение верно?   или сначала мы всё таки должны сравнить на наличие или уверены что такое приходит? 
        // this.items.push(productName)   
        // this.items.push(productName)  
     },
    decreaseQuatity(productName) { 
        for (const product of this.items) {
            console.log(product)
            if (product.name === productName.name) {
                
                this.items.splice(this.items.indexOf(product), 1)
            }
             
        }
        // удаляет 1 значение 
    },

}
// cart.add({ name: 'tomato', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 50 });
// cart.remove({ name: 'lemon', price: 60 });
// cart.clear();

// cart.increaseQuatity({ name: 'tomato', price: 50 });
// console.log(cart.counTotalPrice());
// cart.decreaseQuatity({ name: 'lemon', price: 60 });
console.log(cart.getItems());