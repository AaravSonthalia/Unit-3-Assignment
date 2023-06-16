// creating a character class
class Character
{
    // creating a constructor
    constructor(name, strength, health, defense)
    {
        // creating the attributes
        this.name = name;
        this.strength = strength;
        this.health = health;
        this.defense = defense;
    }

    // creating a function to take damage
    takeDamage(damage)
    {
        // changing values accordingly
        let damageTaken = damage - this.defense;
        this.health -= damageTaken;
        // no return type in function header
        return damageTaken;
    }

    // creating a function to attack a target character
    attack(target)
    {
        // dealing damage and returning
        let damage = this.strength * 2;
        let damageDealt = target.takeDamage(damage);
        return damageDealt;
    }

    // creating a function to check the health of a character
    isAlive()
    {
        // if they have <= 0 health, they are not alive
        return this.health > 0;
    }
}

// creating a rogue class
// inheritance works like in java
class Rogue extends Character
{
    // creating a constructor
    constructor()
    {
        // super works the same way like in java
        super();
        // creating the attributes
        this.name = "Latte";
        this.strength = 8;
        this.health = 100;
        this.defense = 4;
    }

    // overriding the attack method
    attack(target)
    {
        // changing the damage method
        let dexterity = 20;
        let criticalHit = Math.floor(Math.random() * 101) < dexterity;
        let damage = this.strength * 2;

        // checking if critical hit
        if (criticalHit)
        {
            // changing variables and printing
            damage = damage * 2;
            console.log("*** Critical Hit ***");
        }

        // actually dealing the damage and returning
        let damageDealt = target.takeDamage(damage);
        return damageDealt;
    }
}

// creating an object of the characterclass
let player1 = new Character("Cheetah", 10, 100, 2);
// prints in a set format, like arrays and objects
console.log(player1);

// creating an object of the rogue class
let player2 = new Rogue();
console.log(player2);

// beggingin the battle
console.log(player1.name + " vs " + player2.name);
console.log(player1.health + " vs " + player2.health);

// while both players are alive
while(player1.isAlive() && player2.isAlive())
{
    // printing each player's stats
    console.log(player1.name + ": " + player1.health);
    console.log(player2.name + ": " + player2.health);

    let damage;

    // player 1 attacks player 2
    damage = player1.attack(player2);
    console.log(player1.name + " hits " + player2.name + " for " + damage);

    // player 2 attacks player 1
    damage = player2.attack(player1);
    console.log(player2.name + " hits " + player1.name + " for " + damage);
}

// if player 1 is alive
if (player1.isAlive())
{
    // player 1 wins
    console.log(player1.name + " wins!");
}
// if player 2 is alive
else if (player2.isAlive())
{
    // player 2 wins
    console.log(player2.name + " wins!");
}
// if both players are not alive
else
{
    console.log("It's a draw!");
}