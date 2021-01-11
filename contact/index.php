<?php include 'sendemail.php'; ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name ="veiwport" content="width=device-width,initial-scale=1.0">
    <title>Responsive Contact Form</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>

    <!--alert messages start-->
    <?php echo $alert; ?>
    <!--alert messages end-->

    <!--contact section start-->
    <section class="contact-section">
      <div class="content">
        <h2>INFO</h2>
        <p>This is a open source software for gaining the knowlegde of speech recognition chatbot.<br>
        </p>
      </div>
      <div class="container">
        <div class="contactinfo">
          <div class="box">
                    <div class="icon">
                        <i class="fa fa-map-marker text-blue"></i>
                    </div>
                    <div class="text">
                        <h3>Address</h3>
                        <p>For all enquries, please email us  using the form below,<br> Pune-411014</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon">
                        <i class="fa fa-envelope text-blue"></i>
                    </div>
                    <div class="text">
                        <h3>Email</h3>
                        <p>rohan.katta19@vit.edu</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon">
                        <i class="fa fa-phone text-blue"></i>
                    </div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>xxx-xxx-xxx</p>
                    </div>
                </div>
        
          </div>    
        <div class="contact-form">
        <form class="contact" action="" method="post">
          <h2>Send messages</h2>
          <input type="text" name="name" class="text-box" placeholder="Your Name" required>
          <input type="email" name="email" class="text-box" placeholder="Your Email" required>
          <textarea name="message" placeholder="Your Message" required></textarea>
          <input type="submit" name="submit" class="send-btn" value="Send">
        </form>
      </div>
    </section>
    <!--contact section end-->

    <script type="text/javascript">
    if(window.history.replaceState){
      window.history.replaceState(null, null, window.location.href);
    }
    </script>
    

  </body>
</html>