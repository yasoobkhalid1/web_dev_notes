# Web Development Bootcamp <!-- omit in toc -->

Personal notes taken from [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/) by Colt Steele. I wrote this while taking the bootcamp to reinforce my learning and to develop a single repository that contained all the important information, summarized for my reference.

> Disclaimer: I don't own any of this information! This wonderful course was developed by Colt Steele and all intellectual property belongs to him. I am simply creating this document for my _personal_ reference, if you wish to truly learn whatever is described below, please take Colt's course.

- [HTML](#html)
  - [Entity Codes](#entity-codes)
  - [Semantic Markup](#semantic-markup)
  - [Forms](#forms)
- [CSS](#css)
  - [Fonts](#fonts)
  - [Selectors](#selectors)
  - [Specificity](#specificity)
  - [CSS Box Model](#css-box-model)
  - [FlexBox](#flexbox)
  - [Responsive Design & Media Queries](#responsive-design--media-queries)
  - [Bootstrap](#bootstrap)
- [JavaScript](#javascript)
- [Miscellaneous](#miscellaneous)
- [Compiled Tips](#compiled-tips)
  - [HTML Tips](#html-tips)
  - [CSS Tips](#css-tips)
  - [JS Tips](#js-tips)
  - [Misc Tips](#misc-tips)

## HTML

- HTML deals with the **structure** of the web page, providing us with the content the page contains. We use _tags_ to define the HTML elements we are implementing to specify the type of our content.

- _Tip: A great reference guide for HTML, CSS, Javascript and other technologies is [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/). You can use it not only for reference, but it will also provide you with best practices and common industry methodologies for specific things._

### Entity Codes

- When using reserved characters or unique symbols that aren't predefined (such as various emoji's), refrain from directly using the character even if they render correctly in the web browser (for example, typing `2 < 6` might show up correctly in the browser but your editor and a crawler will not understand it since they will be looking for the closing bracket). Instead, use the predefined entity codes that are provided online (search for them using Google) since they will tell the web browser exactly what to display.

- _Tip: Use the entity codes available online (that start with an `&` and end with a `;`) to render reserved or unique characters correctly._

### Semantic Markup

- A recent development, semantic markup allows us to provide _meaning_ to the tags we employ when writing HTML. For example, rather than simply using `div` as a blanket, catch-all term for all of our generalized containers, we can use various similar tags like `nav`, `header`, `footer`, etc. While they perform the exact same function as `div`, they encapuslate much greater meaning within them, which is helpful not just for human code-readability, but also SEOs and other tracking services.

- _Tip: Make sure to use **semantic markup** to create meaningful generalized containers like `nav`, `header`, etc. rather than using the catch-all `div` tag._

### Forms

- When writing forms, make sure to follow best practices by using the `label` tag rather than writing your labels within a `span` or `p` tag. This is especially important because if you do it correctly, you allow the user to click on the label to get the same result as clicking on the form element itself.

- _Tip: Make sure to use the `label` tag for labeling your form elements, such as `Username:` or `Password:` etc._

## CSS

- CSS allows us to style and visualize the HTML contents of our website. CSS can seem pretty daunting upfront due to how varied the number of changeable properties gets. Rather than getting lost in the weeds trying to memorize or keep track of all of them, just make sure to liberally use the MDN reference docs since they are an excellent resource to find whatever you need to know regarding CSS.

- _Tip: Make sure not to implement CSS into your documents by styling inline or using the `style` element. This drastically reduces reproducibility and is considered bad practice. Almost always, use an external stylesheet that you link to your HTML document._

### Fonts

- CSS has various properties that you can modify regarding your font. Most of them use various _units_ to specify the amount, so it's important to understand what each of these units mean. Here are the most common ones:
  - **Name**: Various common names like `large`, `x-large`, `medium`, etc. which generally aren't used due to a lack of granularity
  - **Pixel**: By far the most commonly used absolute unit. 10px in one part of your page will be the exact same as 10x in another part. However, they are not recommended for responsive websites.
  - **Em**: Relative unit. With font-size, 1em equals font-size of the parent. 2em is twice, etc. With other properties, 1em is equal to the computed font-size of the element itself.
  - **Rems**: Root ems, relative unit. Relative to the root html element's font-size. Often easier to work with (especially in nested tags where ems can grow very fast).
  - **Percentage**: Percentage value is always relative to some other value. Sometimes, it's a value from the parent (`width: 50%` is half the width of the parent) while other times it's a value from the element itself (`line-height: 50%` is half the font-size of the element itself)
  - and many other relative (vh, vw, etc.) and absolute (pt, cm, in, mm) measurement units
- If you aren't specifying any custom fonts and linking them to your document, check the availability of the browser font you have chosen [here](https://www.cssfontstack.com/) and choose a widely available one.
- _Tip: When using browser fonts rather than custom fonts, make sure to specify a **font stack** so that your browser has fall-back options if the preferred choice is unavailable._

### Selectors

- There are various selectors you can use to let the browser know which specific content you want styled a certain way in CSS. Here are the most common ones:
  - **Element**: This selects all the content with the same element (e.g. `img` selects all images)
  - **ID**: Select the element with a specific ID (e.g. `#logout` selects element with ID `logout`). Make sure that there is only one ID in a page (since it's a unique identifier for a specific element)
  - **Class**: One of the most commonly used, selects all elements with a specific class (e.g. `.complete` selects all elements with class `complete`). We can apply class to multiple elements to group them together. Use IDs judiciously (only a handful per page).
  - **Descendants**: Using `li a` selects all `<a>` that are nested within an `<li>`. Different from using a comma, _no_ `<li>` tag itself will be styled, only the nested anchor tags within them.
  - **Attributes**: Selecting elements based on their attributes (e.g. `input[type='text']` selects all inputs that are set to the text attribute).
  - **Pseudo-Classes**: Keyword added to a selector to specify a special state of the selected elements (e.g. `a:hover` selects all anchor tags when they are being hovered over).
  - We can select multiple things by using commas (e.g. `h1, h2` selects all h1 and h2 headings)

### Specificity

- Specificity helps us understand what happens when we have conflicting styles targeting the same elements in our CSS document. It measures how specific a given selector is. The more specific selector wins and has its style implemented.
- Here's the general formula for how specific the selector is, in descending order: `ID > Class/Attribute/Pseudo-Class > Element/Pseudo-Element`.
- Moreover, when two selectors are tied for specificity, be aware that the selector that comes _later_ will be chosen.
- Generally, you can 'eyeball' the specificity of your selector, but if you're confused and want to observe the actual formula to compare, [here](https://specificity.keegan.st/) is a good resource that calculates it for you.
- You can use the important tag like this `color:firebrick !important` to indicate to the browser that this is _the_ most important thing and should be prioritized above all selectors. It is generally not recommended to use the important tag.
- _Tip: Make sure to use Chrome's Inspect tool to observe the order of specificity for an element._

### CSS Box Model

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
- _Tip: Consider using a CSS Reset like [here](https://meyerweb.com/eric/tools/css/reset/) to get rid of all the pre-provided styling built-in to the browser. This makes sure you start with a completely blank slate._

### FlexBox

- Flexbox is a recent addition to CSS that allows us to layout items in a page. Rather than hardcoding values to arrange items inside containers, we can dynamically lay them out using FlexBox to ensure that the spacing adjusts as our screen gets resized
- When we set a container to use Flexbox (by setting `display: flex;`), our container has two axes: the main axis (default is left to right) and the cross axis (default is top to bot).
  - **Main Axis:** We space our content along the main axis using `justify-content`
  - **Cross Axis:** We space our content along the cross axis using `align-items`. `flex-wrap` changes the direction of the cross axis.
- We can also dynamically change the size of the content in our container using `flex-basis`, `flex-grow`, `flex-shrink`

### Responsive Design & Media Queries

- The goal is to create a single device that looks good for all screens (from small phone screens to large monitors).
- **Media Queries:** These allow us to change our style or add new styles depending on specific parameters (most commonly, screen width or device type).
- _Tip: Use Chrome Dev Tools `Toggle Device` button to view your website in different sizes to make sure it's responsive and looks good for all of them._
- We can add media queries using `@media` followed by the property we want to observe. E.g. `@media (max-width: 800px) { styles }`

### Bootstrap

- Bootstrap is a really popular CSS framework, that allows you to quickly create nice-looking, modern websites by providing you with **prebuilt components** (that you can include in your own website) and a **grid system** (that helps you construct your own custom, responsive layout)

## JavaScript

- Make sure to use `defer` (default preference) or `async` when linking your script file to ensure that it loads in the correct oder alongside the HTML it's manipulating. Use `async` when you have a bunch of background scripts to load in, and you want to get them in place as soon as possible (the order in which they are loaded isn't reliable). `defer` will ensure that order is respected, and they won't run until all the page contents are loaded, which is useful if your scripts depend on the DOM being in place (modifying one or more elements on the page).

## Miscellaneous

- Here are some best practices regarding file structure and naming:
  - Make sure to create a single folder with all the related files, that mirrors your published site's file structure on the server.
  - Name your files in lower-case (since some servers are case-sensitive) with no spaces (since browsers/servers don't handle spaces well). For word seperation, use hyphens (-) rather than underscores (\_) since the former is not a word and has better SEO on Google. A good example is `test-site/my-file.html`
  - Here are some common files you will almost always have in your website structure:
    - `index.html`: This file contains the homepage and should be the page people see when they first open your site
    - `images` folder: This folder will contain all the images that you use on your site.
    - `styles` folder: This folder will contain the CSS code used to style your content. Default file name is `style.css`.
    - `scripts` folder: This folder will contain all the JS code used to add interactivity to your site. Default file name is `main.js`.
- Here are some best practices regarding the use of file paths:
  - If you're linking to a file in the same directory, just use the file name e.g. `my-image.jpg`
  - If it's in a subdirectory, then do something like `images/my-image.jpg`
  - If it's in a parent directory, then use `../my-image.jpg`

## Compiled Tips

### HTML Tips

- A great reference guide for HTML, CSS, Javascript and other technologies is [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/). You can use it not only for reference, but it will also provide you with best practices and common industry methodologies for specific things.
  Use the entity codes available online (that start with an `&` and end with a `;`) to render reserved or unique characters correctly.
- Make sure to use **semantic markup** to create meaningful generalized containers like `nav`, `header`, etc. rather than using the catch-all `div` tag.
- Make sure to use the `label` tag for labeling your form elements, such as `Username:` or `Password:` etc.

### CSS Tips

- Make sure not to implement CSS into your documents by styling inline or using the `style` element. This drastically reduces reproducibility and is considered bad practice. Almost always, use an external stylesheet that you link to your HTML document.
- When using browser fonts rather than custom fonts, make sure to specify a **font stack** so that your browser has fall-back options if the preferred choice is unavailable
- Make sure to use Chrome's Inspect tool to observe the order of specificity for an element.
- Consider using a CSS Reset like [here](https://meyerweb.com/eric/tools/css/reset/) to get rid of all the pre-provided styling built-in to the browser. This makes sure you start with a completely blank slate.
- Use Chrome Dev Tools `Toggle Device` button to view your website in different sizes to make sure it's responsive and looks good for all of them.

### JS Tips

- Make sure to use `defer` or `async` when linking your script file to ensure that it loads in the correct oder alongside the HTML it's manipulating.

### Misc Tips

- Make sure you're following the file structure, naming conventions, and file path conventions mentioned in the misc. section
