class Pokemon {
    constructor (name, type) {
      this.name = name;
      this.type = type;
      this.hp = 100;
      this.smallDamage = 5;
      this.damage = 10;
      this.highDamage = 20;
      this.level = 1;
      this.isLive = true;
    }
    smallAttack (pokemon) {
      pokemon.hp = pokemon.hp - pokemon.smallDamage
      console.log(`${this.name} de tipo ${this.type} está atacando a ${pokemon.name} de tipo ${pokemon.type} y le queda de vida ${pokemon.hp}`)
    };
    attack (pokemon) {
      pokemon.hp = pokemon.hp - pokemon.damage
      console.log(`${this.name} de tipo ${this.type} está atacando a ${pokemon.name} de tipo ${pokemon.type} y le queda de vida ${pokemon.hp}`)
    };
    highAttack (pokemon) {
      pokemon.hp = pokemon.hp - pokemon.highDamage
      console.log(`${this.name} de tipo ${this.type} está atacando a ${pokemon.name} de tipo ${pokemon.type} y le queda de vida ${pokemon.hp}`)
    };
  }
  
  
  
class PokemonFuego extends Pokemon {
    constructor (name) {
      super(name, 'Fuego')
    }
    attack (pokemon) {
        if (pokemon.isLive === false){
            console.log('Tu pokemon está muerto...')
        }else{
            if(pokemon.type === 'Fuego'){
                super.smallAttack(pokemon)
            }else if (pokemon.type === 'Planta') {
                super.highAttack(pokemon)
    
            } else {
                super.attack(pokemon)
            }
            if(pokemon.hp == 0){
                pokemon.isLive = false;
                console.log('Perdiste y tu pokemon murió...')

            }
        }
    }
}
  
class PokemonPlanta extends Pokemon {
    constructor (name) {
      super(name, 'Planta')
    }
    attack (pokemon) {
        if (pokemon.isLive === false){
            console.log('Tu pokemon está muerto...')
        }else{
            if(pokemon.type === 'Planta'){
                super.smallAttack(pokemon)
            }else if (pokemon.type === 'Eléctrico') {
                super.highAttack(pokemon)
    
            } else {
                super.attack(pokemon)
            }
            if(pokemon.hp == 0){
                pokemon.isLive = false;
                console.log('Perdiste y tu pokemon murió...')

            }
        }
    }
}

class PokemonElectrico extends Pokemon {
    constructor (name) {
      super(name, 'Electrico')
    }
    attack (pokemon) {
        if (pokemon.isLive === false){
            console.log('Tu pokemon está muerto...')
        }else{
            if(pokemon.type === 'Electrico'){
                super.smallAttack(pokemon)
            }else if (pokemon.type === 'Agua') {
                super.highAttack(pokemon)
    
            } else {
                super.attack(pokemon)
            }
            if(pokemon.hp == 0){
                pokemon.isLive = false;
                console.log('Perdiste y tu pokemon murió...')

            }
        }
    }
}

class PokemonAgua extends Pokemon {
    constructor (name) {
      super(name, 'Agua')
    }
    attack (pokemon) {
        if (pokemon.isLive === false){
            console.log('Tu pokemon está muerto...')
        }else{
            if(pokemon.type === 'Agua'){
                super.smallAttack(pokemon)
            }else if (pokemon.type === 'Fuego') {
                super.highAttack(pokemon)
    
            } else {
                super.attack(pokemon)
            }
            if(pokemon.hp == 0){
                pokemon.isLive = false;
                console.log('Perdiste y tu pokemon murió...')

            }
        }
    }
}


const charizard = new PokemonFuego('Charizard')
const squirtle = new PokemonAgua('Squirtle')
const bulbasur = new PokemonPlanta('Bulbasur')
const pikachu = new PokemonElectrico('Pikachu')

