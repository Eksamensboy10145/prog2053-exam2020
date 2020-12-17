import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  // Adding text-fields for user information
  // Availability to click registered names to add firstname and lastname
  // Inspired by imt2291-eksamen2020 https://bitbucket.org/HermanDyrkorn/, Herman Andersen Dyrkorn

  render() {
    return html`
    <form onsubmit="javascript: return false;" id="userForm" method="POST">
    <div class="Edit-user pt-1 ml-5" style="width: 12rem;">
      <label for="firstName">First Name</label>
      <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
    </div>
    <div class="Edit-user pt-1 ml-5" style="width: 12rem;">
      <label for="lastName">Last Name</label>
      <input class="form-control" id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
    </div>
    <div class="Edit user pt-1 ml-5" style="width: 12rem;">
      <label for="pwd">Password</label>
      <input type="password" class="form-control" id="pwd" name="pwd" type="text" value="">
    </div>
    <div class="Edit-user pt-1 ml-5" style="width: 12rem;">
      <label for="newpwd">New Password</label>
      <input type="password" class="form-control" id="pwd" name="pwd" type="text" value="">
  </div>
  <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn btn-info mt-4 ml-2" value="Edit User"></input>
</form>
    `;
  }

  // Checks if the input was correct or not
  updateUser(e) {
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("The user was updated");
        } else {
            console.log("The user was not updated");
        }
      })
  }
}
customElements.define('edit-user', EditUser);
