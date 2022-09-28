const removesAFieldFromAnObject = ({
  id: 123,
  first_name: 'Ivan',
  last_name: 'Ivanov',
  password: 'Mypwd!23',
  age: 13
  })

const {password,...newObject} = removesAFieldFromAnObject

console.log(newObject)

// Имеется объект пользователя следующего вида
// {
//  id: 123,
//  first_name: ‘Ivan’,
//  last_name: ‘Ivanov’,
//  password: ‘Mypwd!23’,
//  age: 13
// }
// Пользуясь возможностями ES6 синтаксиса 
// получить на основании пользователя новый объект, но без поля password.