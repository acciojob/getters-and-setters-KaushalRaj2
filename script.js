//complete this code
class Person {
	constructor(name:string,age:number){
		this.name=name;
		this.age=age;
	}
	get name(){
		return this.name;
	}
	set age(age:number){
		this.age=age;
	}
}

class Student extends Person {

	constructor(name,age,study){
		super(name,age);
		this.study=study;
	}

	study(){
		return this.name " is studying"
	}
	
}

class Teacher extends Person {

	constructor(name,age,teach){
		super(name,age);
		this.teach=teach;
	}

	teach(){
		return this.name" is teaching"
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
