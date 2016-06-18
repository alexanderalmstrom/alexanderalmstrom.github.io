export default class Glitch {
  constructor() {
    this.init()
  }

  init() {
    let glitches = []

    glitches = [].slice.call(document.querySelectorAll('.glitch-text, .glitch-svg'))

    for (let i = 0; i < glitches.length; i++) {
      let glitch = glitches[i]
      this.draw(glitch)
    }
  }

  draw(glitch) {
    setTimeout(function() {
      glitch.classList.add('play')

      setTimeout(function() {
        glitch.classList.remove('play')

        this.draw(glitch)
      }, 5000)

    }, 3000 + Math.floor(Math.random() * 2000) + 0)
  }
}