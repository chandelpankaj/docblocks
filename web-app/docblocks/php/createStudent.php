<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>DocBlocks</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    

    <link rel="stylesheet" type="text/css" media="screen" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
       
    <link href="//cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/e8bddc60e73c1ec2475f827be36e1957af72e2ea/build/css/bootstrap-datetimepicker.css" rel="stylesheet">
	<script type="text/javascript" src="//code.jquery.com/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
        
    <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js"></script>
        
    <script src="//cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/e8bddc60e73c1ec2475f827be36e1957af72e2ea/src/js/bootstrap-datetimepicker.js"></script>
    
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>


<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">DocBlocks</a>
        </div>
        <ul class="nav navbar-nav">
        <li><a href="../index.php">Home</a></li>
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
            <li class="active"><a href="#">Create Document</a></li>
            <li><a href="#">Create Certificate Issuer</a></li>
            <li><a href="#">Create Institute Admin</a></li>
            <li><a href="#">Create Authenticator</a></li>
            <li><a href="php/createInstitute.php">Create Institute</a></li>
            <li><a href="#">Create Student</a></li>
            </ul>
        </li>

        </ul>
    </div>
</nav>


<div class="container">
  <h2>Create Student</h2>
  <form action="">
    <div class="form-group">
      <label for="participantId">Student ID:</label>
      <input type="text" class="form-control" id="participantId" placeholder="Enter Student ID" name="participantId">
    </div>

    <div class="form-group">
      <label for="firstName">First Name:</label>
      <input type="text" class="form-control" id="firstName" placeholder="Enter First Name" name="firstName">
    </div>
    
    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name" name="lastName">
    </div>
    
    <div class="form-group">
        <label for="gender">Gender:</label>
        <select class="form-control" id="gender" name="gender">
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
        </select>
    </div>

    <div class="form-group">
      <label for="state">State:</label>
      <input type="text" class="form-control" id="state" placeholder="Enter State" name="state">
    </div>
    <div class="form-group">
      <label for="city">City:</label>
      <input type="text" class="form-control" id="city" placeholder="Enter City" name="city">
    </div>
    <div class="form-group">
      <label for="address">Address:</label>
      <input type="text" class="form-control" id="address" placeholder="Enter Address" name="address">
    </div>
    
    <div class="form-group">
      <label for="address">DOB:</label>
        <div class='input-group date' id='datetimepicker'>
            <input type='text' class="form-control" id="dob"/>
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
            </span>
        </div>
    </div>


    <button type="submit" class="btn btn-default" onclick="return createStudent()">Submit</button>
  </form>
</div>

<script type="text/javascript">
        $(function () {
            $('#datetimepicker').datetimepicker({
                viewMode: 'years',
                format: 'DD-MM-YYYY',
                maxDate: new Date()
            });
        });
</script>

<script src="../js/createStudent.js"></script>
<script src="../js/script.js"</script>
</body>
</html>

