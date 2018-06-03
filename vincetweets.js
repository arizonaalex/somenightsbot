module.exports = {
  tweet: getTweet()
};

// 2/22/2018. couldn't get this to work. index.js kept getting the same
// value from the array over and over and tweeting the same thing.

function getTweet() {
  var vinceTweets = [
    "Hey Vinny G! It's your pal Mambo Goose!",
    "Hey Buddy, how many mustards are there?",
    "ayyyeeeee la ma ooooo (cest oui francais, baybee)",
    "It's probably not a good idea if you come over",
    "Lemme get a couple of those tortwillas",
    "reeeeeeeeee!!!",
    "Hey, do you have John Harden's phone number? he seems like a cool guy.",
    "Why do so many people watch this washed up player? He is so bad at this game. Why is his hair so long? Does hair length have a connection to a players skill?  Is that why girls are so bad at league?"
  ];
  return vinceTweets[Math.floor(Math.random() * vinceTweets.length)];
};
