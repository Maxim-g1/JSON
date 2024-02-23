let person={
  name:'Ivan',
lastName: 'Petrov'
}

console.log(person)
person=JSON.stringify(person)
console.log(person)

const friends=[{
    name:'Kostya',
  lastName: 'Kukov',
  },
  {
    name:'Nikolai',
  lastName: 'Abobav'
  }
]

//JSON.parse()- принимает строку json в качестве параметра и возвращает соответсвующий структуру данных JS
//JSON.stringify()- принимает объект в качестве параметра и возращает эквивалентную строковую строку JSON

let json =`
[
    {
    "name": "Kostya",
  "lastName":"Kukov"
  },
  {
    "name": "Nikolay",
  "lastName": "Abobov"
  }
]
`

console.log(json)

let arr= JSON.parse(json)
console.log(arr)

const list=document.querySelector('#list')

let mas='["user1","user2","user3","user4","user5"]'

mas= JSON.parse(mas)
console.log(mas)

for(let el of mas){
    let li = document.createElement('li')
    li.textContent = el
    list.appendChild(li)
}