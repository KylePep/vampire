const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬', '🏦', '🏪'
]

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]

// Assign vampireHunter to a random person at the start of the game

// People move to random locations after each round

// if the user clicks on a location with the vampire hunter the player loses the game unless all other people have already been turned.

// hte turned poeple should have their emoji turned into bats

// if a turned person ends up at the same location as the hunter they will notify the user the hunter is near

// The game ends if all people are turned (wins) or the player is slayed by the hunter (loses)

//Built functions
function randomLocation() {
  people.forEach(person => {
    let randomNumber = Math.floor(Math.random() * locations.length)
    let randomPlace = locations[randomNumber]
    person.location = randomPlace
    //console.log(person)
  });
  drawPeopleLocations();
  checkHunter();
}

function drawPeopleLocations() {
  locations.forEach(locale => {
    let filterPeopleLocations = people.filter(person => person.location == locale)
    //console.log(filterPeopleLocations)

    let personLocation = document.getElementById(locale)

    let template = ''

    filterPeopleLocations.forEach(person => template += person.picture)

    personLocation.innerText = template
  })

}


function createVampireHunter() {
  let randomNumber = Math.floor(Math.random() * people.length)
  let randomPerson = people[randomNumber]
  randomPerson.isHunter = true;
  console.log(randomPerson)
}

function findVampireHunter() {
  let foundHunter = people.find(person => person.isHunter)
  return foundHunter;
}

function attackLocation(underAttack) {
  let targets = people.filter(person => person.location == underAttack);
  console.log(underAttack)
  console.log(targets)
  targets.forEach(victim => victim.picture = '🦇');
  randomLocation();
}

function checkHunter() {
  if (winGame()) { return } else {
    if (loseGame()) { return } else {
      let bats = people.filter(person => person.picture == '🦇');
      console.log(bats)
      let hunter = findVampireHunter();
      if (bats.find(bat => bat.location == hunter.location)) {
        window.alert('a bat has found the hunter')
      }
    }
  }
}

function loseGame() {
  let hunter = findVampireHunter()
  if (hunter.picture == '🦇') {
    window.alert('You lose')
    return true;
  }
}
function winGame() {
  if (people.find(person => person.picture != '🦇')) {
    return false
  } else {
    window.alert('You win')
    return true
  }
}

// function restart() {

// }

//Activated functions

createVampireHunter()
randomLocation()