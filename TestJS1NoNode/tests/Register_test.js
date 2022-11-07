const { Accessibility } = require("puppeteer");

Feature('DemoNop');

Scenario('Ttesting DemoNopRegister adn log in', ( { I , locatorsPage } ) => {

    I.amOnPage('https://demo.nopcommerce.com');
    

    
    function RandomEmail ()
    {

      function generateRandomEmail()
      {
          $char = "0123456789qwertyuiopasdfghjklzxcbnm";
      }
          $ulen = mt_rand(5, 10);
          $a = "";
          for ( $i = 1; $i <= $ulen; $i++ )
          {
              $a = substr($char,mt_rand(0,strlen($char)), 1);
          }
          $a  = "@gmail.com";
          return $a; 

    }
    
    

    locatorsPage.RegisterUser('Martin','Tilovski',RandomEmail(),'REK','123456789','123456789');



    

})