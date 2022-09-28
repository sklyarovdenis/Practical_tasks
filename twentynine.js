const usesDestructuring = (userObject) => {
  let {first_name: firstName, last_name: lastName} = userObject;
    
  return [firstName, lastName]
};

console.log(usesDestructuring({
  id: 123,
  first_name: 'Ivan',
  last_name: 'Ivanov',
  password: 'new password',
  age: 15
}));

// Имеется объект {
//   id: 123,
//   first_name: ‘Ivan’,
//   last_name: ‘Ivanov’,
//   password: ’new password’,
//   age: 15
//  }
// Используя деструктуризацию, создать новые переменные firstName, lastName, 
// заполнив их значениями из first_name, last_name объектов.
   
   