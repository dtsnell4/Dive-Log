TODO:

+ View all your dives on a map, select pin to view dive details.
 + you already have a dive nymber N woudl you like to view it?
        Change to link with warning losing data, use validation instead of on save.
 + Search for dives by number, location
 + Add moment.js npm and calc time in
+ get rid of metric radios, ask once at top of add dive.



There are two key points for avoiding mutations in Redux:

Using concat(), slice(), and …spread for arrays
Using Object.assign() and …spread for objects

Side note: the first argument for connect must be nullwhen mapStateToProps is absent like in the Form example. Otherwise you’ll get TypeError: dispatch is not a function.

