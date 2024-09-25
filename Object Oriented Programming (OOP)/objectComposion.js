class Character {
  constructor(name, health, position) {
    this.name = name;
    this.health = health;
    this.position = position;
  }

  canMove() {
    console.log(`${this.name} moves to another position!`);
  }
}

function canAttack() {
  return {
    attack: function () {
      console.log(`${this.name} attacks with a weapon!`);
    },
  };
}

function canDefend() {
  return {
    defend: function () {
      console.log(`${this.name} defends with a shield!`);
    },
  };
}

function canCastSpell() {
  return {
    castSpell: function () {
      console.log(`${this.name} casts a spell!`);
    },
  };
}

function createMonster(name) {
  const character = new Character(name, 100, "position");
  return Object.assign(character, canAttack.call(character));
}

function createGuardian(name) {
  const character = new Character(name, 100, "position");
  return Object.assign(character, canDefend.call(character));
}

function createWizard(name) {
  const character = new Character(name, 100, "position");
  return Object.assign(character, canCastSpell.call(character));
}

function createWarrior(name) {
  const character = new Character(name, 100, "position");
  return Object.assign(
    character,
    canAttack.call(character),
    canDefend.call(character),
  );
}

const monster = createMonster("Monster");
monster.canMove();
monster.attack();

const guardian = createGuardian("Guardian");
guardian.canMove();
guardian.defend();

const wizard = createWizard("Wizard");
wizard.canMove();
wizard.castSpell();

const warrior = createWarrior("Warrior");
warrior.canMove();
warrior.attack();
warrior.defend();
