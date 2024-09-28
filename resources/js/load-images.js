$(function () {
    var $memesContainer = $('.memes-container')
    var memesTemplate = $('#meme-template').html()

    function addPhoto(meme) {
        $memesContainer.append(Mustache.render(memesTemplate, meme))
    }
})