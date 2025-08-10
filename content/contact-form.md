---
# Contact Section Configuration
enabled: true
header: "Get in Touch"
description: |
  If you would like to reach out about my music, scores, performances, lessons, or any other questions, please fill out the following contact form.

# Layout Options
layout: "side-by-side" # side-by-side, form-only, split
formPosition: "right" # left, right, center
showContactInfo: true
showSocialLinks: true

# Form Configuration
form:
  enabled: true
  fields:
    name:
      enabled: true
      required: true
      label: "Full Name"
      placeholder: "Enter your full name"
    email:
      enabled: true
      required: true
      label: "Email Address"
      placeholder: "your@email.com"
    phone:
      enabled: true
      required: true
      label: "Phone Number"
      placeholder: "(555) 123-4567"
    subject:
      enabled: false
      required: false
      label: "Subject"
      placeholder: "What is this regarding?"
    message:
      enabled: true
      required: true
      label: "Message"
      placeholder: "Tell us about your project, event, or inquiry..."
      rows: 6

# Button Configuration
submitButton:
  text: "Send Message"
  icon: "send"
  style: "primary"
  loadingText: "Sending Message..."

# Success/Error Messages
messages:
  success: "Thank you! Your message has been sent successfully."
  error: "Sorry, there was an error sending your message. Please try again."

# Contact Information Display
contactInfo:
  email: ""
  phone: ""
  address: ""
  hours: ""

# Background Options
backgroundColor: "solid" # solid, gradient, image
backgroundStyle: "white"
darkBackgroundStyle: "gray-900"
---
