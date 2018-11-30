/*
    One of the hot methodologies in the JavaScript world is event delegation, and for good reason. Event delegation allows 
you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event 
listener analyzes bubbled events to find a match on child elements.JavaScript event delegation is a simple technique 
by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple 
child elements.
    Event bubbling is a term you might have come across on your JavaScript travels. It relates to the order in which 
event handlers are called when one element is nested inside a second element, and both elements have registered a 
listener for the same event (a click, for example).
*/