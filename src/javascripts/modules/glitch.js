export default class Glitch {
  constructor(glitch) {
    run(glitch)
  }
}

function run(glitch) {
  let delay = 3000 + Math.floor(Math.random() * 2000)

  pause(glitch)

  setTimeout(function() {
    play(glitch)

    setTimeout(function() {
      repeat(glitch)
    }, 5000)
  }, delay)
}

function play(glitch) {
  glitch.classList.add('play')
}

function pause(glitch) {
  glitch.classList.remove('play')
}

function repeat(glitch) {
  run(glitch)
}