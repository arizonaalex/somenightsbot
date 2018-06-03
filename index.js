var http = require('http');
var Twit = require('twit');
var express = require('express');
var config = require('./config');
//var vinceTweets = require('./vincetweets');


var T = new Twit(config);
var stream = T.stream('user');
console.log ("we are streaming to Twitter.");
//stream.on('tweet', tweet);
stream.on('follow', followed);
stream.on('unfollow', unfollow);
stream.on('disconnect', disconnect);

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(100));
}



function followed(eventMsg) {
  console.log('follow function called');
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt(getRandomInt() + ' @' + screenName + ' wow, you are amazing, ' + name + '. Get ready for the ride of your loife!' + getRandomInt());
  console.log("follow event happened with " + screenName);
}

function unfollow(eventMsg) {
  console.log('unfollow function called');
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('.@' + screenName + ' just unfollowed me. I am distraught.');
  console.log("unfollow event happened with " + screenName);
}

function disconnect(eventMsg) {
  console.log('disconnect function called');
}

function tweetIt(txt) {
  var tweet = {
    status: txt
  }
  T.post('statuses/update', tweet, tweeted);
}
var d = Date.now();
//tweet vince once an minute to start, then hourly, then every two hours. 1000millis * 60secs * 120min
setInterval(function(){
//console.log(getVinceTweet())}, 1000);
tweetIt(getLyrics())}, 1000*60*180); //every 3 hours

var currentTweetIndex = -1

function getLyrics() {
    var SomeNightsLyrics = [
      "Some nights I stay up, cashing in my bad luck, some nights I call it a draw",
      "Some nights I wish that my lips could build a castle, some nights I wish they'd just fall off",
      "But I still wake up, I still see your ghost",
      "Oh Lord, I'm still not sure what I stand for",
      "What do I stand for? What do I stand for? Most nights I don't know anymore",
      "This is it boys, this is war, what are we waiting for? Why don't we break the rules already",
      "I was never one to believe the hype, save that for the black and white",
      "Try twice as hard and I'm half as liked, but here they go again to jack my style",
      "And that's alright, I found a martyr in my bed tonight",
      "She stops my bones from wondering just who I am, who I am, who I aaaaaaaaaam. Oh, who am I?",
      "mm mm, mm mm",
      "Well, some nights I wish that this all would end, 'cause I could use some friends for a change",
      "And some nights I'm scared, you'll forget me again, some nights I always win (I always win)",
      "But I still wake up, I still see your ghost",
      "Oh Lord, I'm still not sure what I stand for",
      "What do I stand for? What do I stand for? Most nights I don't know anymore",
      "So this is it? I sold my soul for this?",
      "Washed my hands of that for this? I miss my mom and dad for this?",
      "No, when I see stars, that's all they are, when I hear songs, they sound like a swan so come on",
      "Oh, come on. Oh, come on. Oh, come on!",
      "Well, that is it, guys, that is all. Five minutes in and I'm bored again",
      "Ten years of this, I'm not sure if anybody understands",
      "This one is not for the folks at home. Sorry to leave mom, I had to go",
      "Who the fuck wants to die alone all dried up in the desert sun",
      "My heart is breaking for my sister, and the con that she called \"Love\"",
      "And then I look into my nephew's eyes. Man, you wouldn't believe the most amazing things that can come from some terrible nights",
      "[Auto tune]",
      "The other night, you wouldn't believe, the dream I just had about you and me. I called you up and we both agree",
      "It's for the best you didnt listen. It's for the best we get our distance. It's for the best you didn't listen. It's for the best we get our distance, oh"
      ];

    //it's tweet length -1 because arrays are 0 based
    if (currentTweetIndex == SomeNightsLyrics.length -1){
      //reset index to zero
      currentTweetIndex = 0
    } else {
      //go to next index value
    currentTweetIndex++;
    }

    //tweet current index value
    return SomeNightsLyrics[currentTweetIndex];
  };

function tweeted(err,data,response) {
  if (err) {
    console.log("error during tweeted function")
    console.log(err);
  } else {
    console.log("Tweeted Function Worked!");
  }
}
