let data = {red: 'レッド', yellow: 'イエロー'};
var proxy = new Proxy(data, {
  get(target, prop) {
    return prop in target ? target[prop] : '?';
  }
});

console.log(proxy.red); 
console.log(proxy.nothing);
