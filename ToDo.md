TODO:

+ View all your dives on a map, select pin to view dive details.
+ Search for dives by number, location
+ Add moment.js npm and calc time in
+ get rid of metric radios, ask once at top of add dive.
+ Cumulative total bottom time
+ Signature Pad on github
+ Current surface interval, calculate curent date, time minus last dive date, out time
+ Pick units on first open.  Use settings icon tro change later.
+ RNT ABT TBT
+ visibility: range slider

There are two key points for avoiding mutations in Redux:

Using concat(), slice(), and …spread for arrays
Using Object.assign() and …spread for objects

Side note: the first argument for connect must be nullwhen mapStateToProps is absent like in the Form example. Otherwise you’ll get TypeError: dispatch is not a function.

