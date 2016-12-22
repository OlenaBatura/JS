exports.config = {
   capabilities: { 'browserName': 'chrome' },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./src/test/LegoTest.js'],
    
    onPrepare: function () {
        browser.manage().window().maximize();
    }
};