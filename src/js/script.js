const user = {
  name: 'Maksym',
  age: 21,
  gender: 'male',
};

const printName = function (prefix) {
  console.log(this, prefix);
  console.log(`${prefix}${this.name}`);
};

const myApply = function (func, ctx, args) {
  ctx.printName = func;
  ctx.printName(args, ...args);
  delete ctx.printName;
};

myApply(printName, user, ['Mr.']);
