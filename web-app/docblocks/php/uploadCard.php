<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>DocBlocks</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="../js/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>


<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">DocBlocks</a>
        </div>
        <ul class="nav navbar-nav">
        <li><a href="#">Home</a></li>
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Assets <span class="caret"></span></a>
            <ul class="dropdown-menu">
            <li><a href="#">Document</a></li>
            </ul>
        </li>

        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Participants <span class="caret"></span></a>
            <ul class="dropdown-menu">
            <li><a href="#">Network Admin</a></li>
            <li><a href="#">Certificate Issuer</a></li>
            <li><a href="#">Authenticator</a></li>
            <li><a href="#">Institute</a></li>
            <li><a href="#">Institute Admin</a></li>
            <li><a href="#">Student</a></li>
            </ul>
        </li>

        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Transactions <span class="caret"></span></a>
            <ul class="dropdown-menu">
            <li><a href="createDocument.php">Create Document</a></li>
            <li><a href="#">Create Certificate Issuer</a></li>
            <li><a href="#">Create Institute Admin</a></li>
            <li><a href="#">Create Authenticator</a></li>
            <li><a href="createInstitute.php">Create Institute</a></li>
            <li><a href="#">Create Student</a></li>
            </ul>
        </li>

        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Wallet <span class="caret"></span></a>
            <ul class="dropdown-menu">
            <li><a href="#">Get Cards</a></li>
            <li class="active"><a href="uploadCard.php">Upload Card</a></li>
            </ul>
        </li>
        </ul>
    </div>
</nav>



<div class="container">
  <h2>Upload Card</h2>
  <form action="">
    <div class="form-group">
      <label for="cardName">Card Name:</label>
      <input type="text" class="form-control" id="documentId" placeholder="Enter Card Name" name="cardName">
    </div>
    
    <div class="form-group">
      <label for="cardFile">Document:</label>
      <input type="file" class="form-control" id="cardFile" placeholder="Select Card File" name="cardFile">
    </div>
    
    <button type="submit" class="btn btn-default" onclick="return uploadCard()">Submit</button>
  </form>
</div>



<script src="../js/uploadCard.js"></script>

</body>
</html>

