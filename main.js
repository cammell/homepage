const name="Pawel", 
        age=44;

console.log(`Hello there, my name is ${name} and im ${age}`);

const date=new Date();
document.querySelector('.navigation-header__date--js').innerHTML=date;


function printNameAge(name, age) {
        //console.log('Hello from function printNameAge. My name is ${name} and im ${age}');
        document.querySelector('.article--js').innerHTML=`<p>Hello from function printNameAge. My name is ${name} and im ${age}</p>`
}