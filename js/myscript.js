 /* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos */


 $(document).ready(function () {

     var quote = ["I like playing heavy metal music and pretending I\'m a vampire in front of the mirror.",
                 "Pantera revolutionized the sound and the approach to heavy metal. It\'s been regurgitated. Once you up the production on a product and not just the playing but the actual production, then it\'s going to up the ante.",
                 "Deep Purple definitely belongs in the Rock and Roll Hall of Fame. \'Cause they had great songs, great musicianship, they had an impact, and they\'re a huge influence on the heavy metal community as a whole.",
                 "The guitar influence that affected my songwriting came from the New Wave of British Heavy Metal.",
                 "Guns are heavy metal machines, and, at least in my case, it\'s surprising how many hours it takes before it looks like you know what you\'re doing. Releasing and re-loading magazines is difficult when you\'re asked to do it quickly and efficiently."];

     var author = ["Luke Mably",
                  "Phil Anselmo",
                  "Kirk Hammett",
                  "Dave Mustaine",
                  "Trieste Kelly Dunn"];

     $(".nextQuote").on("click", function () {

         var random = Math.floor(Math.random() * quote.length);

         var randomQuote = quote[random];

         var randomAuthor = author[random];


         $(".quote h3").html(randomQuote);
         $(".quote p").html(randomAuthor);
     });

 });
