### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**? we use getElementByid to access/read the specific element from DOM by ID.
   getElementsByClassName->we get the all the element that have same class name.
   querySelector -> get the first element that matches the CSS selector
   querySelectorAll -> get the all element that matches the css selector
2. How do you **create and insert a new element into the DOM**?
   > const p = document.createElement("p")
   > p.innerText = "Hi everyone"
3. What is **Event Bubbling** and how does it work? it is a method where you can set the target point and bubbling up step by step to the top parent.
4. What is **Event Delegation** in JavaScript? Why is it useful? with this method you can set an event to a parent and can handle to that parents children.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   preventDefault() > it stops the default behavior of the event.
   stopPropagation > If you set this method in the event it stops propagate to that specific point and event will not bubbling up to the next step parent
