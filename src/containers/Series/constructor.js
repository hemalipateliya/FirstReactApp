

/*class Person
{
	
	constructor(name,age)
	{


	this.name=name;
	this.age=age;
	}



	show()
	{
		return `${this.name}'s age is ${this.age}`;
	}


	static print()
	{

			return "hello world";

	}

	set school(school_name)

	{
			this.school_name =school_name;
	
	}

	get schoolName()
	{

		return this.school_name;
	}



		



}

var person1=new Person("hemali",23)
console.log(person1.show()); 
console.log(Person.print());
person1.school = "csueb";
console.log(person1.schoolName);*/


function person(name,age)
{


	this.name=name;
	this.age=age;

}

var p1=new person("hemali",23);
var p2=new person("reena",24);
console.log(p1);





