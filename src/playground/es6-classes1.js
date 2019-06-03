class Person {
 constructor(name='anonymous', age=0){
     this.name = name;
     this.age=age;
 }
 getGretting(){
     return`Hi.. Welcome to this Page ${this.name}`;
 }
 gerDescription(){
     return `Name: ${this.name} Age ${this.age}`
 }
}


class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    gerDescription(){
        let description = super.gerDescription();
        if(this.hasMajor()){
            description+= ` This person has opted for the major  ${this.major}`;
        }
        return description;
    }
}


class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }

    gerDescription(){
        let description = super.gerDescription();
        if(this.hasHomeLocation()){
            description+= ` Home location for this user is: ${this.homeLocation}`;
        }
        return description;
    }
}
const traveller = new Traveller('naveen', 29, 'New delhi');
console.log('Naveen=>', traveller.gerDescription());

const othertraveller = new Traveller('Kuldeep', 28);

console.log('Kuldeep=>', othertraveller.gerDescription());