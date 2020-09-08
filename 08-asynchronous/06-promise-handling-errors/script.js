/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run");
    run.addEventListener("click", getPersons);

    function getPersons(){
        let promisePerson= Promise.resolve(window.lib.getPersons())
        promisePerson.then(person=>{console.log(person)});
        promisePerson.catch(error=>{console.error(error)})

    }

/*  function getAsyncData(someValue){
      return new Promise(function(resolve, reject){
          getData(someValue, function(error, result){
              if(error){
                  reject(error);
              }
              else{
                  resolve(result);
              }
          })
      });
  }*/

})
();
