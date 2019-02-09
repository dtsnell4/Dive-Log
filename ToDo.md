TODO:

+ View all your dives on a map, select pin to view dive details.
+ Toastr to enforce validation.
+ Use settings icon to change later.
+ visibility: range slider
+ Utilities: 
    * new FormData
    * LocalForage.iterate

There are two key points for avoiding mutations in Redux:

Using concat(), slice(), and …spread for arrays
Using Object.assign() and …spread for objects

Side note: the first argument for connect must be nullwhen mapStateToProps is absent like in the Form example. Otherwise you’ll get TypeError: dispatch is not a function.

