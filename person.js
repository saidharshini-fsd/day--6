//3.
class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const person1 = new Person("sai", "dharshini", 30, "saidharshini13@gmail.com");
  
  console.log(`Full Name: ${person1.getFullName()}`);
  console.log(`Age: ${person1.age}`);
  console.log(`Email: ${person1.email}`);
  // output:
   /* Full Name: sai dharshini
      Age: 21
      Email: saidharshini13@gmail.com
 */
