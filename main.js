const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(productObject) {
        for (const item of this.items) {
            if (item.name === productObject.name) {
                item.quantity += 1;
                return
            }
        }
        const newProduct = {
            ...productObject,
            quantity:1,
        }
       
        this.items.push(newProduct)
        // добавлять карточки: 1 вызов- 1 карточка
    },
    remove(productObject) {
       
        for (const product of this.items) {
            // console.log(product.name)
            
            // console.log(this.items.indexOf(product))
            if (product.name === productObject.name) {
                this.items.splice(this.items.indexOf(product), 1)
            }
            
            for (const product of this.items) {
                     if (product.name === productObject.name) {
                
                this.items.splice(this.items.indexOf(product), 1)
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

        for (const product of this.items) {

            totalPrice+=product.price * product.quantity
        }

        return totalPrice
    },
     
    increaseQuantity(productObject) {
        for (const product of this.items) {
            if (product.name === productObject) {
                product.quantity += 1;
                return
            }

       }
     },
    decreaseQuatity(productObject) {
        for (const product of this.items) {
    
            if (product.name === productObject) {
                if (product.quantity !==1) {
                    console.log('da')
                product.quantity -= 1;
                    return
                }
                else {
                    this.items.splice(this.items.indexOf(product),1)
                }
                
            }
        }
             
        }
        // удаляет 1 значение
    

}
cart.add({ name: 'tomato', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'tomato', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 50 });
cart.remove('lemon');
// cart.clear();
// console.log(cart.counTotalPrice());
cart.increaseQuantity('tomato');
// console.log(cart.counTotalPrice());
cart.decreaseQuatity('strawberry');
console.log(cart.getItems());


