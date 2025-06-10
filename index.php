<?php

// for example with HTML "form" tag & PHP
if($_POST){

  if(isset($_POST['btn-submit'])) {

    echo "<h1>" . $_POST['input-text'] . "</h1>";

  }
}

?>

<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://frissbee.de/images/logos/FrissBee-Logo_01.png" rel="icon" type="image/x-icon" />
    <title>Web Component - confirm delete</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
    />

    <!-- The confirm-delete file -->
    <script src="./assets/js/confirm-delete_v.1.0.0.js"></script>

    <!-- Your JavaScript file  -->
    <script src="./assets/js/my-script.js" defer></script>

    <style>
      /* Example for the styling with ::part() */
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
        background-color:rgb(238, 238, 238);
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
    </style>
  </head>
  <body>
    <main class="mb-5">
      <div class="bg-light border-bottom">
        <div class="container py-4">
          <h3>Web Component - confirm delete</h3>
          <div>
            Download and documentation on
            <a href="https://github.com/FrissBee/confirm-delete" target="_blank" rel="noopener noreferrer">GitHub</a><br />
            Created by <a href="https://frissbee.de/" target="_blank" rel="noopener noreferrer">FrissBee.de</a>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <h5>Submit button left</h5>
        <p>default</p>
        <confirm-delete>
          <button slot="left" class="btn btn-danger me-3 btn-submit-1" type="submit" value="submit button one">delete</button>
        </confirm-delete>

        <h5 class="mt-5">Submit button right</h5>
        <p>default</p>
        <confirm-delete>
          <button slot="right" class="btn btn-danger ms-3 btn-submit-2" type="submit" value="submit button two">delete</button>
        </confirm-delete>

        <h5 class="mt-5">Submit button right</h5>
        <p>style with attribute & CSS ::part & JavaScript</p>
        <p>closing after submit</p>
        <confirm-delete class="demo-1" text-cancel="abort">
          <button slot="right" class="btn btn-danger mt-3 btn-submit-3" type="submit" value="submit button three">confirm</button>
        </confirm-delete>

        <h5 class="mt-5">Submit button right</h5>
        <p>default</p>
        <p>with HTML "form" tag & PHP</p>
        <form method="post">
          <input type="text" class="form-control mb-3" name="input-text" value="<?= isset($_POST['input-text']) === true ? $_POST['input-text'] : '' ?>" style="width: 200px">
          <confirm-delete>
            <button slot="right" class="btn btn-danger btn-submit-3" type="submit" name="btn-submit" value="submit button three">confirm</button>
          </confirm-delete>
        </form>
      </div>
    </main>
  </body>
</html>
