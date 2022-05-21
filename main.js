const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW:'withdraw',
}

const account = {
  //текущий баланс
  balance: 0,
  //история транзакция
  transactions: [],
  
  //метод создает и возвращает обьект транзакции.
  //принимает сумму и тип транзакции.
  createTransaction(type, amount) {
    return {
      type,
      amount,
    }
  },
  // метод отвечающий за добавление суммы к балансу.
  // принимает сумму транзакции.
  // вызывает createTransaction для создания обьекта
  // транзакции
  // после чего добавляет его в историю транзакций.
  deposit(amount) {
    this.balance += amount
    const transactionType = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push(transactionType)
  },
  // метод отвечающий за снятие суммы с баланса.
  // принимает сумму транзакции.
  // вызывает createTransaction для создания обьекта транзнакции.
  // после чего добавляет его в историю транзакций.
  // если amount больше чем текущий баланс, выводи сообщение 
  // о том, что снятие такой суммы не возможно.
  // недостаточно средств
  withdraw(amount) {
    if(this.balance>amount){
    this.balance -= amount;
    const transactionType = this.createTransaction(Transaction.WITHDRAW, amount);
      this.transactions.push(transactionType)
    }
    else { 
      return alert('Баланс слишком маленький')
    }
  },
  // метод возвращает текущий баланс
  getBalance() {
    return alert(`${this.balance} - ваш баланс`)
  },
  // метод ищет и возвращает транзакции по ид
  getTransactionDetails(id) {
    for (const [index, transaction] of this.transactions.entries()) {
      if (index === id) {
        return transaction
      }
    }
  },
//   метод возвращает количество
//  опрделенного типа транзакции из всей истории транзакций
 getTransactionTotal(type) {
   let sum = 0;
   for (const transaction of this.transactions) {
     if(transaction['type'] === type){
       sum +=transaction['amount']
     }
   }
   return sum
  },
};

account.deposit(1000);
account.withdraw(10);
account.deposit(1000);
account.withdraw(10);
// account.getBalance();
// console.log(account.getTransactionDetails())
console.log(account.getTransactionTotal(Transaction.DEPOSIT))
console.log({balance:account.balance, transactions:account.transactions})