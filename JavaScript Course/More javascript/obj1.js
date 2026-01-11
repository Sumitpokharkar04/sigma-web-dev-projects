class animal{
    constructor(name){
        this.name=name;
    }

    eat(){
        console.log(this.name + " is eating");
    }


}

class dog extends animal{
    constructor(name){
        this.name=name;
        console.log("dog constructor called");
    }
    bark(){
        console.log(this.name + " is barking");
    }

    

};

let dog1 = new dog("tommy");
dog1.eat();
dog1.bark();

let cat1 = new animal("kitty");
cat1.eat();


