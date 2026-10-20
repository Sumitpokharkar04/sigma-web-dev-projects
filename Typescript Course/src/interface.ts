// Now lets learn interfaces so it is somewhat confusing topic. 

//lets say make a type

type Tearecipie = {
    water:number;
    sugar : number;
}

function tea(xyz:Tearecipie)
{
    xyz.water = 23
    xyz.sugar = 22
}

class teaa implements Tearecipie{
    water = 100
    sugar =10
}

type Cupize = {size:"small"|"large"|"medium"}

class Chai implements Cupize
{
    size: "small" | "large" | "medium"  = "large";
}

type teatype = "masala"|"ginger"|"lemon"

function orderChai (t:teatype)
{
    console.log(t);
}

//now lets see union or intersection whatever they call it

type masalachai = {
    masala:number;
}

type sweetness = {
    sugar:number;
}

//so when we do something like 

type Masala_Sugar = masalachai & sweetness

function Masala_and_sugar (MS:Masala_Sugar)
{
    MS.masala = 20;
    MS.sugar = 10;
}

//this is call a intersection of a types.

//lets now see readonly.

type letslearn = {
    readonly masala : string;
}

function LL (XYZ:letslearn)
{
    // XYZ.masala = 20;
}