<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Beautiful Photo Books | PastBook Website</title>
    <script>
        // rename myToken as you like
        window.token =  <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>


    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>
<body>
    <div class="container"></div>
    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
