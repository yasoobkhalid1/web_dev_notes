# Web Development Bootcamp

Personal notes taken from [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/) by Colt Steele. I wrote this while taking the bootcamp to reinforce my learning and to develop a single repository that contained all the important information, summarized for my reference.

> Disclaimer: I don't own any of this information! This wonderful course was developed by Colt Steele and all intellectual property belongs to him. I am simply creating this document for my _personal_ reference, if you wish to truly learn whatever is described below, please take Colt's course.

## 1. HTML

- HTML deals with the **structure** of the web page, providing us with the content the page contains. We use _tags_ to define the HTML elements we are implementing to specify the type of our content.

- _Tip: A great reference guide for HTML, CSS, Javascript and other technologies is [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/). You can use it not only for reference, but it will also provide you with best practices and common industry methodologies for specific things._

### 1.1 Entity Codes

- When using reserved characters or unique symbols that aren't predefined (such as various emoji's), refrain from directly using the character even if they render correctly in the web browser (for example, typing `2 < 6` might show up correctly in the browser but your editor and a crawler will not understand it since they will be looking for the closing bracket). Instead, use the predefined entity codes that are provided online (search for them using Google) since they will tell the web browser exactly what to display.

- _Tip: Use the entity codes available online (that start with an `&` and end with a `;`) to render reserved or unique characters correctly._

### 1.2 Semantic Markup

- A recent development, semantic markup allows us to provide _meaning_ to the tags we employ when writing HTML. For example, rather than simply using `div` as a blanket, catch-all term for all of our generalized containers, we can use various similar tags like `nav`, `header`, `footer`, etc. While they perform the exact same function as `div`, they encapuslate much greater meaning within them, which is helpful not just for human code-readability, but also SEOs and other tracking services.

- _Tip: Make sure to use **semantic markup** to create meaningful generalized containers like `nav`, `header`, etc. rather than using the catch-all `div` tag._

### 1.3 Forms

- When writing forms, make sure to follow best practices by using the `label` tag rather than writing your labels within a `span` or `p` tag. This is especially important because if you do it correctly, you allow the user to click on the label to get the same result as clicking on the form element itself.

- _Tip: Make sure to use the `label` tag for labeling your form elements, such as `Username:` or `Password:` etc._

## 2. CSS

- CSS allows us to style and visualize the HTML contents of our website. CSS can seem pretty daunting upfront due to how varied the number of changeable properties gets. Rather than getting lost in the weeds trying to memorize or keep track of all of them, just make sure to liberally use the MDN reference docs since they are an excellent resource to find whatever you need to know regarding CSS.

- _Tip: Make sure not to implement CSS into your documents by styling inline or using the `style` element. This drastically reduces reproducibility and is considered bad practice. Almost always, use an external stylesheet that you link to your HTML document._

### 2.1 Fonts

- CSS has various properties that you can modify regarding your font. Most of them use various _units_ to specify the amount, so it's important to understand what each of these units mean. Here are the most common ones:
  - **Name**: Various common names like `large`, `x-large`, `medium`, etc. which generally aren't used due to a lack of granularity
  - **Pixel**: By far the most commonly used absolute unit. 10px in one part of your page will be the exact same as 10x in another part. However, they are not recommended for responsive websites.
  - **Em**: Relative unit. With font-size, 1em equals font-size of the parent. 2em is twice, etc. With other properties, 1em is equal to the computed font-size of the element itself.
  - **Rems**: Root ems, relative unit. Relative to the root html element's font-size. Often easier to work with (especially in nested tags where ems can grow very fast).
  - **Percentage**: Percentage value is always relative to some other value. Sometimes, it's a value from the parent (`width: 50%` is half the width of the parent) while other times it's a value from the element itself (`line-height: 50%` is half the font-size of the element itself)
  - and many other relative (vh, vw, etc.) and absolute (pt, cm, in, mm) measurement units
- If you aren't specifying any custom fonts and linking them to your document, check the availability of the browser font you have chosen [here](https://www.cssfontstack.com/) and choose a widely available one.
- _Tip: When using browser fonts rather than custom fonts, make sure to specify a **font stack** so that your browser has fall-back options if the preferred choice is unavailable._

### 2.2 Selectors

- There are various selectors you can use to let the browser know which specific content you want styled a certain way in CSS. Here are the most common ones:
  - **Element**: This selects all the content with the same element (e.g. `img` selects all images)
  - **ID**: Select the element with a specific ID (e.g. `#logout` selects element with ID `logout`). Make sure that there is only one ID in a page (since it's a unique identifier for a specific element)
  - **Class**: One of the most commonly used, selects all elements with a specific class (e.g. `.complete` selects all elements with class `complete`). We can apply class to multiple elements to group them together. Use IDs judiciously (only a handful per page).
  - **Descendants**: Using `li a` selects all `<a>` that are nested within an `<li>`. Different from using a comma, _no_ `<li>` tag itself will be styled, only the nested anchor tags within them.
  - **Attributes**: Selecting elements based on their attributes (e.g. `input[type='text']` selects all inputs that are set to the text attribute).
  - **Pseudo-Classes**: Keyword added to a selector to specify a special state of the selected elements (e.g. `a:hover` selects all anchor tags when they are being hovered over).
  - We can select multiple things by using commas (e.g. `h1, h2` selects all h1 and h2 headings)

### 2.3 Specificity

- Specificity helps us understand what happens when we have conflicting styles targeting the same elements in our CSS document. It measures how specific a given selector is. The more specific selector wins and has its style implemented.
- Here's the general formula for how specific the selector is, in descending order: `ID > Class/Attribute/Pseudo-Class > Element/Pseudo-Element`.
- Moreover, when two selectors are tied for specificity, be aware that the selector that comes _later_ will be chosen.
- Generally, you can 'eyeball' the specificity of your selector, but if you're confused and want to observe the actual formula to compare, [here](https://specificity.keegan.st/) is a good resource that calculates it for you.
- You can use the important tag like this `color:firebrick !important` to indicate to the browser that this is _the_ most important thing and should be prioritized above all selectors. It is generally not recommended to use the important tag.
- _Tip: Make sure to use Chrome's Inspect tool to observe the order of specificity for an element._

### 2.4 CSS Box Model

- The CSS box model is the idea that everything in CSS is a box. It consists of the inner **content box**, followed by **padding**, then the **border**, and lastly the **margin**.
- For borders, we generally use pixels as our unit since a border is typically small so we can choose an absolute unit to measure it.
- Be aware that you can use the `border` shorthand property to set the width, style, and color in one go rather than using individual properties for each of them.
- Since the `body` has a default margin of `margin: 8px;` you might want to start your work by setting that to `0` so that you don't have a slight whitespace around your whole website.
- **Display Property:** We can use the display property to set in-line elements to act like block elements and vice versa.
  - **Inline:** Width/Height are ignored. Margin/Padding work horizontally but not vertically.
  - **Block:** Breaks document flow. Width/Height/Margin/Padding all work.
  - **Inline-Block:** Behaves like inline but Width/Height/Margin/Padding all work (so rather than having 3 blocks - each on their own line - we have three blocks next to each other with all properties holding)
- **Position Property:** We can use the position property to change the position of the element based on how we used the `top`, `bottom`, `left`, and `right` tags. The default position for elements is `static`. For example, you can use the `fixed` position to create a navbar that moves as you scroll the document.
- **Transitions:** We can introduce transitions to smooth the process of changing our element from one form to another (such as taking 1s to `hover` rather than immediately switching to the hovered state). You can use [this](https://easings.net/) site to find some common timing functions.
- **Transforms:** We can use transforms to perform various transformations on our elements (such as rotating cards, scaling buttons/elements, etc.)

## 3. Compiled Tips

### 3.1 HTML

- [[1](#1-html)] A great reference guide for HTML, CSS, Javascript and other technologies is [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/). You can use it not only for reference, but it will also provide you with best practices and common industry methodologies for specific things.
- [[2](#11-entity-codes)] Use the entity codes available online (that start with an `&` and end with a `;`) to render reserved or unique characters correctly.
- [[3](#12-semantic-markup)] Make sure to use **semantic markup** to create meaningful generalized containers like `nav`, `header`, etc. rather than using the catch-all `div` tag.
- [[4](#13-forms)] Make sure to use the `label` tag for labeling your form elements, such as `Username:` or `Password:` etc.

### 3.2 CSS

- [[5](#2-css)] Make sure not to implement CSS into your documents by styling inline or using the `style` element. This drastically reduces reproducibility and is considered bad practice. Almost always, use an external stylesheet that you link to your HTML document.
- [[6](#21-fonts)] When using browser fonts rather than custom fonts, make sure to specify a **font stack** so that your browser has fall-back options if the preferred choice is unavailable
- [[7](#23-specificity)] Make sure to use Chrome's Inspect tool to observe the order of specificity for an element.
