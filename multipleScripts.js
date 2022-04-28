module.exports = {
    '@tag':['exercise2'],
   /* before : function(browser) {
      // see https://github.com/nightwatchjs/nightwatch/blob/main/examples/globalsModule.js#L12
      browser.globals.waitForConditionTimeout = 2000;
    },
  */
    'exercise 2' : function (browser) {
      const mainQuery = 'Asserts' ;
      const mainQuerySelector  = '#docsearch > button > span.DocSearch-Button-Container > span';
      const mainQuerySerch ='#docsearch-input';
      const mainQueryBlog = '#navbartop > ul > li:nth-child(5) > a';

      browser
        .url('https://nightwatchjs.org/')               
        .click('#navigation > ul > li:nth-child(2) > a')
        .assert.elementPresent('#guide-container > div > div > div > div.col-md-9 > div > div > div.page-header > h2',"ElementPresent")
        .click(mainQuerySelector) 
        .setValue(mainQuerySerch,mainQuery)                
        .click('#docsearch-item-0 > a > div > div.DocSearch-Hit-content-wrapper')        
        .verify.titleEquals('API Commands')        
        .click(mainQueryBlog)
        .assert.textContains(mainQueryBlog, "Blog") 
        .assert.cssProperty("#navbartop > ul > li:nth-child(5) > a", 'font-size', '14px')
        .moveToElement('body > footer > div > div:nth-child(1) > div.col-md-6 > div > div > p',0,0)    
        .verify.textContains('body > footer > div > div:nth-child(1) > div.col-md-6 > div > div > p', "Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.")
        .assert.urlEquals('https://nightwatchjs.org/blog/')
        .saveScreenshot('tests_output/screenshot.npg')
    },
  
    after : function(browser) {
      browser.end();
    }
  };