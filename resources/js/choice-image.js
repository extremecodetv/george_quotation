$(function () {
    const reader = new FileReader()
    reader.onload = function () {
        var meme = new Image()
        meme.src = 'https://github.com/extremecodetv/george_quotation/blob/master/template.png?raw=true'
        meme.onload = function () {
            var imgInfo = {
                url: reader.result,
                height: meme.height,
                width: meme.width,
            }
            $('.choice-section').trigger('choice-done', imgInfo)
        }
    }
    reader.readAsDataURL('https://github.com/extremecodetv/george_quotation/blob/master/template.png?raw=true')
})