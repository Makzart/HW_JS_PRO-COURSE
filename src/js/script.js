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

const myBind = function (func, ctx, args) {
  return function () {
    myApply(func, ctx, args);
  };
};

const bindedFunc = myBind(printName, user, ['Mr.']);
console.log(bindedFunc);
bindedFunc();
