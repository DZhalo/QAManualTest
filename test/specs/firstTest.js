const assert = require('assert');

 describe('Website', function () {
     it('should be alive', function () {
         browser.url('/')
         const img = $('img[src="https://assets.ithillel.ua/assets/school/images/logo-intro.svg"]')
         assert(img.isExisting(), 'Website should be opened, and logo displayed')
         browser.pause(1000)
     })
 })