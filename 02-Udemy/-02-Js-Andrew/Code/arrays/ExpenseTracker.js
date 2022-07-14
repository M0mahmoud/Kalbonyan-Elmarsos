const account = {
  name: "mahmoud",
  exp: [],
  income: [],
  addExp: function (description, amount) {
    this.exp.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getSummary: function () {
    let total = 0;
    let totalIncome = 0;
    let totalBalance = 0;
    this.exp.forEach(function (expense) {
      total = total + expense.amount;
    });
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });
    totalBalance = totalIncome + this.income.amount;
    return `${this.name} has a balance of  $${totalBalance}. $${totalIncome} in come $${total} in EXP`;
  },
};

account.addExp("Rent", 1050);
account.addExp("Coffee", 335);
account.addIncome("Job", 134);

console.log(account.getSummary());

console.log(account);
