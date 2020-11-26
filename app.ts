const person :{
    name:string;
    age:string;
    hobbies:string[];
    role:[number,string]
} = {
    name:'keerthi',
    age:'20',
    hobbies: ['singing','writing'],
    role:[2,'author']
}

person.role.push('admin');
person.role[1] = 10;

let myhobbies : string[];
myhobbies = ['violin'];
console.log(person.hobbies);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}