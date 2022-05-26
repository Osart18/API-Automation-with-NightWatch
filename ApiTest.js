module.exports = {
    before: function (browser) {

        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000
    },

    'API Testing - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(data.copyright, 'Michael Sherick')
            browser.assert.equal(data.media_type, 'image')
            browser.assert.equal(data.service_version, 'v1')
        })
    },

    'API Testing - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(data.copyright, 'My Name')
        })
    },

    'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = {'name':'QA CoE Name', 'job':'Unosquare QA'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'QA CoE Name')
            browser.assert.equal(response.body.job, 'Unosquare QA')
        })
    },

   'API Nasa - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=Cw3chwPdxZkOVJBsl1J0MqEqHCctZV4vOU6Sqod8'
        browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(data.title, 'NGC 4565: Galaxy on Edge')
            browser.assert.equal(data.url, 'https://apod.nasa.gov/apod/image/2205/Needle_Galaxy_4-7-22.jpg')
            browser.assert.equal(data.date, '2022-05-26')            
        })
    },

    'API Nasa - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=Cw3chwPdxZkOVJBsl1J0MqEqHCctZV4vOU6Sqod8'
        browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)           
            browser.assert.equal(data.media_type, 'image')
            browser.assert.equal(response.date, '2022-05-25')  
            browser.assert.equal(response.service_version, 'v2')          
        })
    },

    'API exercise2 - POST': function (browser) {
        var Url = 'https://reqres.in/api/users?page=2'
        var postData = {'name':'Sergio', 'job':'Unosquare QA'}
        browser.apiPost(Url, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'Sergio')
            browser.assert.equal(response.body.job, 'Unosquare QA')
        })
    }
};