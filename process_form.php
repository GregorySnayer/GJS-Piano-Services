<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  // Email recipient
  $to = "your.email@example.com";
  // Email subject
  $subject = "New Contact Form Submission from $name";
  // Email headers
  $headers = "From: $email";
  
  // Compose the email content
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message:\n$message";
  
  // Send the email
  if (mail($to, $subject, $email_content, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Error sending email.";
  }
}
?>
