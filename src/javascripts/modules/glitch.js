function Glitch() {
  var self = {},
      glitches

  function init() {
    setGlitches()
  }

  function setGlitches() {
    glitches = [].slice.call(document.querySelectorAll('.glitch-text'))

    console.log(glitches)

    glitches.forEach(function(glitch){
      draw(glitch)
    })
  }

  function draw(glitch) {
    setTimeout(function() {
      glitch.classList.add('play')

      setTimeout(function() {
        glitch.classList.remove('play')

        draw(glitch)
      }, 5000)

    }, 3000 + Math.floor(Math.random() * 2000) + 0)
  }

  init()

  return self
}

module.exports = Glitch