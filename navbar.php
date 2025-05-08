<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./kion.css">
</head>
<body>
    <div id="nav-bar">
        <h1>Drinks</h1>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About Us</a></li>
                <li><a onclick="showHide()">Checkout</a></li>
            </ul>
        </nav>
    </div>
    <div class="checkout"  id="hide-show">
        <div class="ch-box">
            <div id="reader-cart">
                <img src="./assets/cacocola001.png" alt="Error">
                <p>Name</p>
                <p>Price</p>
                <button type="button" id="dele-cart">Delete</button>
            </div>
        </div>
        <div id="ch-result">
            <h1 id="total">Total:$0.00</h1>
            <button type="button" id="btn">Checkout</button>
        </div>
    </div>
    <script src="./javascript.js"></script>
</body>
</html>