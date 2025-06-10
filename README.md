# Confirm delete

This repo consists of a web component to confirm a process, e.g. if something is to be deleted and confirmation is still required.

The repo contains the confirm-delete file and an example of the implementation.

The confirm-delete web component can be easily and quickly integrated into your own website.

## Preview

[You can view the demo here.](https://confirm-delete.frissbee.de)

## Implementation

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web Component - confirm delete</title>

    <!-- The confirm-delete file -->
    <script src="./assets/js/confirm-delete_v.1.0.0.js"></script>

    <!-- Your JavaScript file  -->
    <script src="./assets/js/my-script.js" defer></script>

  </head>
  <body>
    <main>

      <!-- The "confirm-delete" tag with your submit button within -->
      <confirm-delete>
        <!-- set the attribute "slot" to "left" if you want it on the left-hand side -->
        <button slot="left" class="btn btn-danger me-3 btn-submit-1" type="submit" value="submit button one">delete</button>
      </confirm-delete>

      <confirm-delete>
        <!-- set the attribute "slot" to "left" if you want it on the right-hand side -->
        <button slot="right" class="btn btn-danger ms-3 btn-submit-2" type="submit" value="submit button two">delete</button>
      </confirm-delete>

      </div>
    </main>
  </body>
</html>

```

## Attribute

- `text-cancel`

  Text for the Cancel button. Example: `<confirm-delete text-cancel="abort"></confirm-delete>`

## Functions

**close()**

To close the submit section.

## Design with CSS

If you want to have more influence on the design, you can do this in your CSS file with the pseudo-element `::part()`.

You can design:

- `container`
- `btn-delete`
- `btn-delete`
- `container-submit-delete`
- `btn-cancel`
- `btn-cancel`

Here a simple example:

```css
confirm-delete.demo-1::part(container) {
  background-color: rgb(235, 235, 235);
  border: 1px solid #8f8f8f;
  padding: 10px;
  width: 114px;
  border-radius: 8px;
  -webkit-box-shadow: 5px 5px 30px -15px #000000;
  box-shadow: 5px 5px 30px -15px #000000;
}
confirm-delete.demo-1::part(btn-delete) {
  border: 1px solid red;
  margin: auto;
  color: red;
  background-color: #ffffff;
  padding: 0.4rem 1rem;
}
confirm-delete.demo-1::part(btn-delete):hover {
  background-color: #ffffff;
}
confirm-delete.demo-1::part(container-submit-delete) {
  background-color: rgb(67, 151, 34);
  padding: 5px;
  border-radius: 8px;
  display: grid;
  border: 1px solid #5c5c5c;
}
confirm-delete.demo-1::part(btn-cancel) {
  background-color: #3282a1;
  color: #fff;
}
confirm-delete.demo-1::part(btn-cancel):hover {
  background-color: #2c657c;
}
```
