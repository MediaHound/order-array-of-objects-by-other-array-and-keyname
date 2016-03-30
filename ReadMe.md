#order-array-of-objects-by-other-array-and-keyname

This module exposes a function that returns an array of ordered objects.

The parameters are:

1. *arrayOfObjects*
2. *arrayOfStrings*
3. *keyName*

```
var movies = [
    {
      "name": "Wild at Heart",
      "likesPercentage": 29.2,
      "mhid": "mhmovpgdYwEDqcYCPIVhCLWzV0Ymsx1BUVQLMcALvErT",
      "likes": 73,
      "dislikes": 5,
      "dislikesPercentage": 2
    },
    {
      "name": "Kill Bill: Vol. 2",
      "likesPercentage": 88.8,
      "mhid": "mhmovyTWy388Xn26rQ5PRVYXR79MCuPV4CHvsqFJA7W9",
      "likes": 222,
      "dislikes": 8,
      "dislikesPercentage": 3.2
    },
    {
      "name": "The Wild Bunch",
      "likesPercentage": 31.2,
      "mhid": "mhmovZrNWXR8FJ7V0dwD5wZepj1WnODkDUfP7EsA8JJD",
      "likes": 78,
      "dislikes": 3,
      "dislikesPercentage": 1.2
    },
    {
      "name": "Badlands",
      "likesPercentage": 25.6,
      "mhid": "mhmovRXDgO9ViZvgzCtiwovJlqWPkA6EukdQLaG6cCZQ",
      "likes": 64,
      "dislikes": 2,
      "dislikesPercentage": 0.8
    },
    {
      "name": "Bonnie and Clyde",
      "likesPercentage": 34.8,
      "mhid": "mhmovPpIpiRrqOOYlFqjePPLMvGQCWsJEYwG2ts6NnDq",
      "likes": 87,
      "dislikes": 2,
      "dislikesPercentage": 0.8
    },
    {
      "name": "End Game",
      "likesPercentage": 0.4,
      "mhid": "mhmovQV9NzX3cSBJTJSNhWKueWQZR59MYAte61EXfGca",
      "likes": 1,
      "dislikes": 1,
      "dislikesPercentage": 0.4
    },
    {
      "name": "Oldboy",
      "likesPercentage": 75.2,
      "mhid": "mhmov9CYu3bYQwcP7blcrXKTzcBywLoKWZPkjqWSONhf",
      "likes": 188,
      "dislikes": 6,
      "dislikesPercentage": 2.4
    },
    {
      "name": "L.A. Confidential",
      "likesPercentage": 78.4,
      "mhid": "mhmovjxFAKu6B9mx6l3HudC4WMI7fR0hNyCtg6viOsuq",
      "likes": 196,
      "dislikes": 0,
      "dislikesPercentage": 0
    },
    {
      "name": "Spartacus",
      "likesPercentage": 38,
      "mhid": "mhmov0Q5ozarYBJEyl8K9dQAw9cMBkkjWSlgxKtqfqWg",
      "likes": 95,
      "dislikes": 2,
      "dislikesPercentage": 0.8
    },
    {
      "name": "Trainspotting",
      "likesPercentage": 82,
      "mhid": "mhmovw2WzjDPJ4fjLjIl3igZZPPiStK4zQAl8u19P4Q8",
      "likes": 205,
      "dislikes": 4,
      "dislikesPercentage": 1.6
    },
    {
      "name": "Reservoir Dogs",
      "likesPercentage": 93.2,
      "mhid": "mhmovLCTG52lSTQbLNpvFn09hFVlc8vSzxoPoeQypIW8",
      "likes": 233,
      "dislikes": 0,
      "dislikesPercentage": 0
    },
    {
      "name": "Once Upon a Time in the West",
      "likesPercentage": 53.6,
      "mhid": "mhmovbKdqF8DfzGrDpo55E4COtE27AqrNvygYOTMxn1B",
      "likes": 134,
      "dislikes": 4,
      "dislikesPercentage": 1.6
    }
];

var order = [
    'mhmovw2WzjDPJ4fjLjIl3igZZPPiStK4zQAl8u19P4Q8',
    'mhmovLCTG52lSTQbLNpvFn09hFVlc8vSzxoPoeQypIW8',
    'mhmovPpIpiRrqOOYlFqjePPLMvGQCWsJEYwG2ts6NnDq',
    'mhmovjxFAKu6B9mx6l3HudC4WMI7fR0hNyCtg6viOsuq',
    'mhmovyTWy388Xn26rQ5PRVYXR79MCuPV4CHvsqFJA7W9',
    'mhmov0Q5ozarYBJEyl8K9dQAw9cMBkkjWSlgxKtqfqWg',
    'mhmov9CYu3bYQwcP7blcrXKTzcBywLoKWZPkjqWSONhf',
    'mhmovZrNWXR8FJ7V0dwD5wZepj1WnODkDUfP7EsA8JJD',
    'mhmovpgdYwEDqcYCPIVhCLWzV0Ymsx1BUVQLMcALvErT',
    'mhmovRXDgO9ViZvgzCtiwovJlqWPkA6EukdQLaG6cCZQ',
    'mhmovbKdqF8DfzGrDpo55E4COtE27AqrNvygYOTMxn1B',
    'mhmovQV9NzX3cSBJTJSNhWKueWQZR59MYAte61EXfGca'
];

var reorder = require('order-array-of-objects-by-other-array-and-keyname');
var result = reorder(movies, order, 'mhid')
```

Note: This module is written for a very specific use-case (you might have guessed so from the repository/npm name) and as such doesn't need to be very robust (for us). But you're more than welcome to fork this repository and improve the module.
