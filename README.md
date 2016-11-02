JS Lodash Exercises
=
These exercises will help you to practice and discover some of the most useful functions Lodash provides.

To solve them, please refer to the formal [Lodash documentation](https://lodash.com/) and take a look at the files in the starter code in this repository.

## The Office

<iframe src="//giphy.com/embed/Kcgz655R3kcO4" width="480" height="189" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/disney-computer-the-incredibles-Kcgz655R3kcO4">via GIPHY</a></p>

You work in a taxes office. Boring, right? And suddenly you discover you can use your extra time to learn how to code. An email arrives. Your bosses are sending a satisfaction survey. You decide to model the satisfaction of your coworkers.

- As you have five departments with 10 people working in each department, create a 5x10 array and fill it randomly with numbers from 1 to 20 to model the satisfaction survey results.

:::success
:bulb: **Hint:** Look at the Lodash Array methods. Use `_.times` if you need to repeat an action.
:::

```javascript=
var employeeSatisfaction = function () {
  
  return array;
};
```

## Harry Potter's Birthdays

Navigating through Internet, we found a very messy array with the birthdays of Harry Potter's friends and enemies.


<iframe src="//giphy.com/embed/EcMfpWsYFKDnO" width="480" height="421" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/funny-photo-fanpop-EcMfpWsYFKDnO">via GIPHY</a></p>

Take a look at the `harryPotter.js` array. It is so messy, they can't even remember which date belongs to whom. But we know each date follows each character's name. Turn this array into arrays of pairs.

:::success
:bulb: **Hint:** Look at the Lodash Array methods.
:::


Some of the birthdays are missing. But we found another array with birthdays from the book. Add these birthdays to the array you had before.
```javascript
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];
```

## The Password Problem

Yeah, yeah, to set a password is ALWAYS a big trauma. We will ask for a password to our users and we need to implement validation methods for this password.

![eCard about Passwords](https://i.imgur.com/CJHtpLw.png)


**Different characters:** create a function that receives a password and returns an error if every char in the password is not unique.

:::success
:bulb: **Hint:** Look at the Lodash Array methods. Use `_.times` if you need to repeat an action.
:::

```javascript=
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 //your code goes here
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
```
**Only numbers:** Create a function that receives a password and returns an error if the password has any character different than numbers.


```javascript=
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function () {
 //your code goes here
}
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);
```

**Ten digits only:** Create a function that trim the password and turns it into a 10 digits password. The function should keep the first 10 digits and discard the rest of them.

```javascript=
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 //your code goes here
}
trimPassword(badPsswd);
```

## Abbey Road Studios

Abbey Road Studios opened in 1931. Through all these years, the amount of data they've been collecting is huge. We found a [list of recordings made at Abbey Road Studios](https://en.wikipedia.org/wiki/List_of_recordings_made_at_Abbey_Road_Studios) but we are not sure if it is actually an important place for music or if its fame is just a result of the hype created by The Beatles.

![Abbey Road front door](https://i.imgur.com/1kRBdy4.jpg)

Lodash is a great tool for retrieving information. But first, take a look at the data object located in the `abbeyRoad.js` file in your `lib` folder.

**November looks like a good month:** In the 30's, they use to gather information about the months when the recordings where made. Get the artist who recorded the most on November in Abbey Road.

```javascript=
var novemberArtists = function () {
  //your code
};
//Remember to execute the function to actually assing the value to the var.
```

**Artists like to repeat:** Get the artist who recorded the most times in Abbey Road.

```javascript=
var bestArtist = function () {
  //your code
};
//Remember to execute the function to actually assing the value to the var.
```

**EXTRA: The Beatles and Abbey Road:** When did the four of Liverpool recorded their last song in Abbey Road Studios?

## Summary

Lodash could help you, specially when starting to code, to think in a more functional manner. It is also a good tool to avoid repetition and speed up coding time. Through these exercises you got familiar with the Lodash documentation and some of the over a 100 functions it provides.


## Extra Resources

- [Devdocs.io](http://devdocs.io/lodash~4/)
- [Inside Abbey Road with Google](https://insideabbeyroad.withgoogle.com/en) - Only if you have a lot of spare time... you can find a virtual tour created by Google to the guts of the Abbey Road Studios 🙂