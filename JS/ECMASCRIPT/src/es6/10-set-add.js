const list = new Set();

list.add('item1')
list.add('item2').add('item3')

console.log(list)

const arrays = [1,2,3,1,2,3,1,2,3,4,4,5,100,50,20,1]
console.log(arrays)

const lista = new Set(arrays)
// lista.add(...arrays)
console.log(lista)