/*console.log('Hello From Node.js...');

const Person=require('./person');

//console.log(person)

const person1=new Person('Aryamaan Pandey',30)

person1.greeting();*/

const Logger=require('./logger');
const logger=new Logger();
logger.on('message',(data)=>{
    console.log('Called Listener:',data);

})
logger.log('Hello World!');