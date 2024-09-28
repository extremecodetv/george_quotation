$(async function () {

    async function fetchBlob(url) {
        const response = await fetch(url);
    
        // Here is the significant part 
        // reading the stream as a blob instead of json
        return response.arrayBuffer();
    }

    var meme = new Image()
    meme.src = 'https://raw.githubusercontent.com/extremecodetv/george_quotation/refs/heads/master/template.png'
    meme.onload = function () {
        var imgInfo = {
            url:'https://raw.githubusercontent.com/extremecodetv/george_quotation/refs/heads/master/template.png',
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