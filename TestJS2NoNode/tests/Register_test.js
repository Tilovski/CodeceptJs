const { Accessibility } = require("puppeteer");

Feature('DemoNop');

Scenario('Ttesting DemoNopRegister adn log in', ( { I , locatorsPage } ) => {

    I.amOnPage('https://demo.nopcommerce.com');
    

    
    function RandomEmail ()
    {

      var test = Math.floor(Math.random() * 1000);
      return "m.tilovski" + test + "@gmail.com";


    }
    
    

    locatorsPage.RegisterUser('Martin','Tilovski',RandomEmail(),'REK','123456789','123456789');



    

})