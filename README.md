# Web Development Bootcamp

Personal notes taken from [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/) by Colt Steele. I wrote this while taking the bootcamp to reinforce my learning and to develop a single repository that contained all the important information, summarized for my reference.

> Disclaimer: I don't own any of this information! This wonderful course was developed by Colt Steele and all intellectual property belongs to him. I am simply creating this document for my _personal_ reference, if you wish to truly learn whatever is described below, please take Colt's course.

## HTML

HTML deals with the **structure** of the web page, providing us with the content the page contains. We use _tags_ to define the HTML elements we are implementing to specify the type of our content.

_Tip: A great reference guide for HTML, CSS, Javascript and other technologies is [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/). You can use it not only for reference, but it will also provide you with best practices and common industry methodologies for specific things._

### Entity Codes

When using reserved characters or unique symbols that aren't predefined (such as various emoji's), refrain from directly using the character even if they render correctly in the web browser (for example, typing `2 < 6` might show up correctly in the browser but your editor and a crawler will not understand it since they will be looking for the closing bracket). Instead, use the predefined entity codes that are provided online (search for them using Google) since they will tell the web browser exactly what to display.

_Tip: Use the entity codes available online (that start with an `&` and end with a `;`) to render reserved or unique characters correctly._

### Semantic Markup

A recent development, semantic markup allows us to provide _meaning_ to the tags we employ when writing HTML. For example, rather than simply using `div` as a blanket, catch-all term for all of our generalized containers, we can use various similar tags like `nav`, `header`, `footer`, etc. While they perform the exact same function as `div`, they encapuslate much greater meaning within them, which is helpful not just for human code-readability, but also SEOs and other tracking services.

_Tip: Make sure to use **semantic markup** to create meaningful generalized containers like `nav`, `header`, etc. rather than using the catch-all `div` tag_

## Compiled Tips

- [[1]](#HTML) A great reference guide for HTML, CSS, Javascript and other technologies is [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/). You can use it not only for reference, but it will also provide you with best practices and common industry methodologies for specific things.
- Use the entity codes available online (that start with an `&` and end with a `;`) to render reserved or unique characters correctly.
- Make sure to use **semantic markup** to create meaningful generalized containers like `nav`, `header`, etc. rather than using the catch-all `div` tag
