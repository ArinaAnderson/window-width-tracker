# useEffect demonstration

Generally, useEffect runs only after DOM is painted (both the first render and updates).


In this example useEffect runs once - only after the first render of the component WindowWidthTracker, which is

    <h1 className="width-info">Window width: {windowWidth}</h1>.

In this case, useEffect runs once because the second argument passed to useEffect is an empty arrow.

In this example React hook useEffect is used to set up window innerWidth tracker.
It shows that we need to run 

By toggling off the Window Width Tracker, we let React know that the life cycle of WindowWidthTracker component came to the end and it needs to be removed from the DOM. But the listener to watch window's resize does not go away. For that reason, we need to remove that listener too. We do it by providing a clean up function in useEffect (our effect which we passed to useEffect returns a function, which is the clean up function to remove listener to watch for window's resize).

By toggling on back the Window Width Tracker, we make React render WindowWidthTracker again, and then useEffect will be run again. 


