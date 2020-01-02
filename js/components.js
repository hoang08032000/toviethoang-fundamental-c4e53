const components = {};

components.register = `
    <section class="register-container">
      <form action="" id="register-form" class="register-form">
        <div class="form-header">
          <h3>Mindx Chat</h3>
        </div>
        <div class="form-content">
          <div class="name-wrapper">
            <div class="input-wrapper">
              <input type="text" name="firstName" placeholder="First Name" />
              <div id="first-name-error" class="message-error"></div>
            </div>
            <div class="input-wrapper">
              <input type="text" name="lastName" placeholder="Last Name" />
              <div id="last-name-error" class="message-error"></div>
            </div>
          </div>
          <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email" id="email" />
            <div id="email-error" class="message-error"></div>
          </div>
          <div class="input-wrapper">
            <input type="password" name="password" placeholder="Password" id="password" />
            <div id="password-error" class="message-error"></div>
          </div>
          <div class="input-wrapper">
            <input type="password" name="confirmPassword" placeholder="Confirm Pasword" id="confirmPassword"/>
            <div id="confirm-password-error" class="message-error"></div>
          </div>
          <div id="register-error" class="message-error"></div>
          <div id="register-success" class="message-success"></div>
        </div>
        <div class="form-footer">
          <a id="register-link" href="#" >Already have an account? Login</a>
          <button type="submit" id="register-btn">Register</button>
        </div>
      </form>
    </section>
`;

components.logIn = `
<section class="log-in-container">
<form action="" id="log-in-form" class="log-in-form">
  <div class="form-header">
    <h3>Mindx Chat</h3>
  </div>
  <div class="form-content">
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email" id="email" />
      <div class="message-error" id="email-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" name="password" placeholder="Password" id="password" />
      <div id="password-error" class="message-error"></div>
    </div>
      <div id="log-in-error" class="message-error"></div>
      <div id="log-in-success" class="message-success"></div>
  </div>
  <div class="form-footer">
    <a id="log-in-link" href="#">Create new account</a>
    <button type="submit" id="log-in-button">Log In</button>
  </div>
</form>
</section>
`;

components.chat = `
<section class="chat-container">
<!-- <div class="aside-left"></div> -->
<div class="current-conversation">
  <div class="list-messages">
  </div>
  <form action="" class="form-add-message">
    <div class="input-wrapper">
      <input type="text" name="message" placeholder="Enter your message" />
    </div>
    <button type="submit">Send</button>
  </form>
</div>
<!-- <div class="aside-right"></div> -->
</section>
`;

components.lodaing = `
<div>
  Loading
</div>
`;
