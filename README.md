1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById used to get a single element.
    getElementsByClassName used to get an HTML collection.
    querySelector used to get first searching element.
    querySelectorAll used to get all searching element.

2. How do you create and insert a new element into the DOM?

    Ans. 1. creating element using .createElement
         2. add content using innerText / innerHTML etc.
         3. add to DOM using append / appendChild.

3. What is Event Bubbling? And how does it work?

    Ans: It is a system where an event starts from the targeted element and effects goes upward through its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?

    Ans: Event Delegation is a system using a single event listener to its parent element to handle events for its child elements. 
    It improves performance and works well to add elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

    Ans:preventDefault() stops the browser’s default action.
    Where as stopPropagation() stops the event from bubbling up or down of DOM.