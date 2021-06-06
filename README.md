# Web Development Bootcamp

Personal notes taken from [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/) by Colt Steele. I wrote this while taking the bootcamp to reinforce my learning and to develop a single repository that contained all the important information, summarized for my reference.

> Disclaimer: I don't own any of this information! This wonderful course was developed by Colt Steele and all intellectual property belongs to him. I am simply creating this document for my _personal_ reference, if you wish to truly learn whatever is described below, please take Colt's course.

## 1. HTML

HTML deals with the **structure** of the web page, providing us with the content the page contains. We use _tags_ to define the HTML elements we are implementing to specify the type of our content.

_Tip: A great reference guide for HTML, CSS, Javascript and other technologies is [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/). You can use it not only for reference, but it will also provide you with best practices and common industry methodologies for specific things._

### 1.1 Entity Codes

When using reserved characters or unique symbols that aren't predefined (such as various emoji's), refrain from directly using the character even if they render correctly in the web browser (for example, typing `2 < 6` might show up correctly in the browser but your editor and a crawler will not understand it since they will be looking for the closing bracket). Instead, use the predefined entity codes that are provided online (search for them using Google) since they will tell the web browser exactly what to display.

_Tip: Use the entity codes available online (that start with an `&` and end with a `;`) to render reserved or unique characters correctly._

### 1.2 Semantic Markup

A recent development, semantic markup allows us to provide _meaning_ to the tags we employ when writing HTML. For example, rather than simply using `div` as a blanket, catch-all term for all of our generalized containers, we can use various similar tags like `nav`, `header`, `footer`, etc. While they perform the exact same function as `div`, they encapuslate much greater meaning within them, which is helpful not just for human code-readability, but also SEOs and other tracking services.

_Tip: Make sure to use **semantic markup** to create meaningful generalized containers like `nav`, `header`, etc. rather than using the catch-all `div` tag._

### 1.3 Forms

When writing forms, make sure to follow best practices by using the `label` tag rather than writing your labels within a `span` or `p` tag. This is especially important because if you do it correctly, you allow the user to click on the label to get the same result as clicking on the form element itself.

_Tip: Make sure to use the `label` tag for labeling your form elements, such as `Username:` or `Password:` etc._

## 2. CSS

CSS allows us to style and visualize the HTML contents of our website. CSS can seem pretty daunting upfront due to how varied the number of changeable properties gets. Rather than getting lost in the weeds trying to memorize or keep track of all of them, just make sure to liberally use the MDN reference docs since they are an excellent resource to find whatever you need to know regarding CSS.

_Tip: Make sure not to implement CSS into your documents by styling inline or using the `style` element. This drastically reduces reproducibility and is considered bad practice. Almost always, use an external stylesheet that you link to your HTML document._

## 3. Compiled Tips

### 3.1 HTML

- [[1](#1-html)] A great reference guide for HTML, CSS, Javascript and other technologies is [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/). You can use it not only for reference, but it will also provide you with best practices and common industry methodologies for specific things.
- [[2](#11-entity-codes)] Use the entity codes available online (that start with an `&` and end with a `;`) to render reserved or unique characters correctly.
- [[3](#12-semantic-markup)] Make sure to use **semantic markup** to create meaningful generalized containers like `nav`, `header`, etc. rather than using the catch-all `div` tag.
- [[4](#13-forms)] Make sure to use the `label` tag for labeling your form elements, such as `Username:` or `Password:` etc.

### 3.2 CSS

- [[5](#2-css)] Make sure not to implement CSS into your documents by styling inline or using the `style` element. This drastically reduces reproducibility and is considered bad practice. Almost always, use an external stylesheet that you link to your HTML document.
