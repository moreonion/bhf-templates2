# Snippets

For useful widgets and beautiful styling only some additional html does the trick. Below, there are custom snippets ready-to-use in your EN template. Just copy a snippet of your choice, select "HTML" in the EN editor and paste it there. Once you've pasted the snippet you may change back to "normal" to continue editing. Save and see the magic happen!

## a word about page building in EN

This design is made specifically for a two column layout – so everthing using this template needs to have two columns (including thank you pages, email your friends forms,… everything!) and there needs to be at least one content element in each column.

Also make sure there are no spaces between the elements of each column when building the pages on the "design" editor in EN. Start placing elements at the top and leave no empty fields between them, as this would cause EN to insert extra space elements or even divide the columns into several columns which could produce some really weird effects.

## copy boxes on the left side

### big background image

```html
<div class="background-image">
  your background image
</div>
```

Just upload your image to a copy box and place this wrapper around it. Please make sure the image's dimensions are 785x900px or it's very likely that something is going to look very weird!

### big quote

```html
<div class="quote fixed">
  <blockquote>
    This is the quote
    <cite>the person quoted</cite>
  </blockquote>
</div>
```

Copy-paste this to a copy box and replace the quote and quotee. Perhaps it's necessary to add manual linebreaks within the quote, depending on how you want the text to be displayed.

## copy boxes above the form fields

Everything that comes before the actual form fields in the right column (including the info toggle and the counter) needs to be wrapped in a div like this:

```html
<div class="above-form">
  content
</div>
```

This way your content gets the right colors, e.g. a white background instead of a grey one.

### background info

```html
<a class="info-toggle">More info</a>

<div id="background-info">
  <h2>Background info</h2>
  <p>more more more info</p>
</div>
```

The `info-toggle` element enables the "show more info" logic. A click on the toggle shows the element with the id `background-info` and hides the toggle. Since this depends on the id, you can only use it once per page!

### reduced content on mobile

To hide the intro copy on mobile, we made something similiar to the background info:

```html
<a class="show-intro">Why should I take this action?</a>

<div id="intro-copy">
  <p>part of your intro copy that takes too much space on mobile</p>
</div>
```

All the introductory content that should initially be hidden on mobile goes in the `intro-copy` wrapper. On mobile this gets replaced by the `show-intro` link. A click/tap on the link will hide the link and show the intro copy.

Like the info-toggle, this snippet can only be used once per page!

### progress bar

```html
<div class="pgbar-thermometer" data-target="250" data-start="0">
  <div class="t_body">
    <div class="t_level">&nbsp;</div>
  </div>
  <span class="t_current">0</span> people have taken action
</div>
```

Change the value of data-target according to your needs. Change data-start to add an initial value for the progress bar, e.g. offline supporters. If the data-attributes are missing, the default values shown above will be used instead.

Unfortunately, this is a little tricky because the EN editor keeps deleting all data-tags. To save them, you'll have to disable the editor first by clicking the top left x-button. Feel very welcome to complain to Engaging Networks about it!

### sticky heading

```html
<div id="sticky-target">
  <h1>This is my sticky heading</h1>
</div>
```

## copy boxes below the form fields

Everything that comes below the actual form fields needs this wrapper:

```html
<div class="below-form">
  your content
</div>
```

This wrapper is especially important because it not only sets the right colors but also ensures that the content appears below the submit button!

### disclaimer

To get a disclaimer text with the right styles, wrap it in a div of its own. Assuming the disclaimer is placed below the submit button, it looks like this:

```html
<div class="below-form">
  <div class="disclaimer">
    disclaimer text
  </div>
</div>
```

## thank you page

Since there are no form fields on the thank you page, all the right column content should get this wrapper to look nice (and not at all like form fields):

```html
<div class="no-form">
  your content
</div>
```

### share links

These are social share buttons for Facebook, Twitter and email sharing:

```html
<div class="no-form">
  <ul class="share-links">

    <li class="facebook">
      <a class="button" href="https://www.facebook.com/sharer.php?u={{urlencoded url}}" title="Share this via Facebook!" target="_blank" data-share="facebook">
        <i></i><span>Facebook</span>
      </a>
    </li>

    <li class="twitter">
      <a class="button" href="http://twitter.com/share?text={{urlencoded share text}}&amp;url={{urlencoded url}}" title="Share this via Twitter!" target="_blank" data-share="twitter">
        <i></i><span>Twitter</span>
      </a>
    </li>

    <li class="email last">
      <a class="button" href="{{EN email share url}}" title="Share this via E-Mail!" target="_blank" data-share="email">
        <i></i><span>E-Mail</span>
      </a>
    </li>

  </ul>
</div>
```

Make sure to replace the `{{placeholder parts}}` with the real urls and share texts! The name between `<span>name</span>` is what's displayed on the button itself, the `title` pops up when hovering over the button. (`<i></i>` makes space for the icon, which will be inserted automatically.)

### submission tracking

Place this snippet on the thank you page to track submissions (it's hidden so it doesn't matter if it is inside a wrapper or not):

```html
    <input type="hidden" name="track-submission" value="1">
```
