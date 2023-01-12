<h1 style="color:#33ff55;">TailwindCSS Pseudo-Classes and Functionality Classes</h1>

<h4 style="color:#33ff55;">Below are some examples of how you can use pseudo-classes and functionality classes in Tailwind CSS.</h4>

<h2 style="color:orange">Pseudo-class Example</h2>

<h4  style="color:#d35455"><code lang="html">Utilities for controlling the aspect ratio of an element.</h4>
```html
<a class="text-blue-500 hover:text-blue-800">Hover me</a>
```

When the cursor hovers over the link, the text color changes from blue-500 to blue-800.



Functionality Example:
<button class="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-800">Click me</button>
This will apply different background colors to the button depending on its state, for example, when it is hovered, focused, and active it will have different background color respectively.

Responsive Example:


  <div class="w-full md:w-1/2">
    <p>This text will be full width on small screens and half width on medium screens</p>
  </div>
This class will set the width of the element to full-width on small screens and half-width on medium screens.