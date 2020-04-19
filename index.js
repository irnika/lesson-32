


// ------------------------------------------------------------------------------------------------

/*
* Найти пользователя по идентификатору (_id)
* @param {String} id - идентификатор пользователя
* @return {Object} - объект пользователя
*/

/*function getUserById(id) {
    let newUsers = users.filter(function exp(val, index){

      return users[index]._id === id
    })
    console.log(newUsers)
}

getUserById("5a58d21ccb3c3f594dab0afc")*/



// ------------------------------------------------------------------------------------------------

/*
* Определить средний возраст пользователей
* @return {Number} - средний возраст
*/


/*function getAverangeUsers() {
    let ageSumm = 0;
    let count = 0;
    users.forEach(function(item, i, arr) {
        ageSumm = ageSumm + users[i].age
        count = count + 1
      });
      let number = ageSumm/count
      console.log(number)
      
}
getAverangeUsers()*/



// ------------------------------------------------------------------------------------------------

/*
* Определить количество активных пользователей
* @return {Array} - список активных пользователей
*/
/*function getActiveUsers() {
    let activeUsers = users.filter(function exp(val, index){

        return users[index].isActive 
      })
      console.log(activeUsers)
}
getActiveUsers()
*/


    



// ------------------------------------------------------------------------------------------------

/*
* Определить сколько пользователей мужского и женского пола
* @return {Object} - { male: 10, female: 20 }
*/

/*function getUsersGender() {
    
    let result = {male: 0, female: 0};

    for(let i = 0; i < users.length; i++)
    {
        if(users[i].gender =="male"){

            result.male = result.male + 1
        }
        else{
            result.female =  result.female + 1
        }
    }
    console.log(result)
}

getUsersGender()*/



// ------------------------------------------------------------------------------------------------

/*
* Определить самого старшего пользователя
* @return {Number} - возраст самого старшего пользователя
*/
/*function getOldestUser() {

    let number = 0;
    users.forEach(function(item, i, arr) {

        if(number < users[i].age){
            
            number = users[i].age
        }
      });
     
      console.log(number)
}

getOldestUser()*/



// ------------------------------------------------------------------------------------------------

/*
* Определить самого младшего пользователя
* @return {Number} - возраст самого младшего пользователя
*/

/*function getYoungestUser() {

    let number = users[0].age;
    for(let i = 0; i < users.length; i++) {

        if(number > users[i].age){
            
            number = users[i].age
        }
      };
     
      console.log(number)
}

getYoungestUser()*/




// ------------------------------------------------------------------------------------------------

/*
* Сортировать пользователей по возрасту
* @param {String} order - указываться asc или desc (по возростанию / по убыванию)
* @return {Array} - список сортированных пользователей
*/

/*function sortUsersByAge(order) {

  if (order === 'asc'){
    function comp(a, b) {
 
        if (a.age < b.age)
          return -1;
        if (a.age > b.age)
          return 1;
          return 0;
      }
    }
      else{
        function comp(a, b) {

        if (a.age > b.age)
        return -1;
      if (a.age < b.age)
        return 1;
        return 0;  
      }
    }
      
      users.sort(comp);
  
 }
    sortUsersByAge('desc')

    console.log(users)*/


// ------------------------------------------------------------------------------------------------

/*
* Определить количество пользователей, которые любят определенный фрукт
* @param {String} fruitName - название фрукта (apple)
* @return {Array} - список пользователей, кто люит этот фрукт
*/

/*function getFavoriteFruit(fruitName) {

    let fruitUsers = users.filter(function exp(val, index){

        return users[index].favoriteFruit === fruitName
      })
      console.log("яблоки любят: ", fruitUsers.length, "пользователей")
      console.log(fruitUsers)
      
}
getFavoriteFruit('apple')
*/




// ------------------------------------------------------------------------------------------------

/*
* Создать новых список пользователей на основе указаных аргументов
* @param {Array} fields - список свойств(ключей) по которым нужно брать поля, 
* например ["name", "email", "phone", balance]
*
* @return {Array} - список активных пользователей
*/


function mapUsersByFields() {}

    
let result = users.map(function(element){
   
  let arr = {
  name: element.name,
  phone: element.phone,
  email: element.email,
  balance: element.balance,
}
   
  
return arr
})
console.log(result) 






// ------------------------------------------------------------------------------------------------

/*
* Поиск пользователей по тегам
* @param {Array} tags - список тегов(ключей) по которым выполняем, 
* @return {Array} - список пользователей у которых есть хотя бы один тег
*/
function getUsersByTags(tags) {
for( let i = 0; i < users.length; i++){
  if(users[i].tags){
    console.log(users[i])
  }
}
}

getUsersByTags (users.phone)


// ------------------------------------------------------------------------------------------------

/*
* Какой общий баланс всех пользователей
* @return {String} - $23,4344.10
*/

/*function getBalanceUsers() {
  let userBalance = 0;
  let options = { style: 'currency', currency: 'USD' };
  for(let i = 0; i < users.length; i++){
    
    

  let a = users[i].balance.replace('$','');
  let b = a.replace(',','');
  userBalance = userBalance + (+ b)
    
  }
  console.log(new Intl.NumberFormat('en-US', options).format(userBalance ));
}
getBalanceUsers() */