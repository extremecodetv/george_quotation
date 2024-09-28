$(async function () {

    async function fetchBlob(url) {
        const response = await fetch(url);
    
        // Here is the significant part 
        // reading the stream as a blob instead of json
        return response.arrayBuffer();
    }

    var meme = new Image()
    meme.src = 'https://github.com/extremecodetv/george_quotation/blob/master/template.png?raw=true'
    meme.onload = function () {
        var imgInfo = {
            url:'https://github.com/extremecodetv/george_quotation/blob/master/template.png?raw=true',
            height: meme.height,
            width: meme.width,
        }
        $('.choice-section').trigger('choice-done', imgInfo)
    }

    // Event: Choice was made
    $('.choice-section').on('choice-done', function (e, imgInfo) {
        $('.discription').fadeOut()
        $('.choice-section').fadeOut('normal', function () {
            $('.edit-section').removeClass('d-none').hide().fadeIn()
            $('.fabric-canvas-wrapper').append(`<canvas id="meme-canvas"></canvas>`)
            processMeme(imgInfo)
        })
    })
    
})