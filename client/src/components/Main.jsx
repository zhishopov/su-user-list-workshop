import AddUserButton from "./AddUserButton";
import Pagination from "./Pagination";
import SearchForm from "./SearchForm";
import Table from "./UserTable";

export default function Main() {
  return (
    <>
      <main className="main">
        {/* Section component  */}
        <section className="card users-container">
          {/* Search bar component */}
          <SearchForm></SearchForm>
          {/* Table component */}
          {/* <Table></Table> */}
          {/* New user button  */}
          <AddUserButton></AddUserButton>
          {/* Pagination component  */}
          <Pagination></Pagination>
        </section>
        {/* User details component  */}
        {/* <div class="overlay">
<div class="backdrop"></div>
<div class="modal">
  <div class="detail-container">
    <header class="headers">
      <h2>User Detail</h2>
      <button class="btn close">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
          class="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
          </path>
        </svg>
      </button>
    </header>
    <div class="content">
      <div class="image-container">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=""
          class="image" />
      </div>
      <div class="user-details">
        <p>User Id: <strong>62bb0c0eda039e2fdccba57b</strong></p>
        <p>
          Full Name:
          <strong> Peter Johnson </strong>
        </p>
        <p>Email: <strong>peter@abv.bg</strong></p>
        <p>Phone Number: <strong>0812345678</strong></p>
        <p>
          Address:
          <strong> Bulgaria, Sofia, Aleksandar Malinov 78 </strong>
        </p>

        <p>Created on: <strong>Wednesday, June 28, 2022</strong></p>
        <p>Modified on: <strong>Thursday, June 29, 2022</strong></p>
      </div>
    </div>
  </div>
</div>
    </div> */}
        {/* Create/Edit Form component  */}
        {/* <div class="overlay">
<div class="backdrop"></div>
<div class="modal">
  <div class="user-container">
    <header class="headers">
      <h2>Edit User/Add User</h2>
      <button class="btn close">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
          class="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
          </path>
        </svg>
      </button>
    </header>
    <form>
      <div class="form-row">
        <div class="form-group">
          <label for="firstName">First name</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-user"></i></span>
            <input id="firstName" name="firstName" type="text" />
          </div>
        </div>
        <div class="form-group">
          <label for="lastName">Last name</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-user"></i></span>
            <input id="lastName" name="lastName" type="text" />
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-envelope"></i></span>
            <input id="email" name="email" type="text" />
          </div>
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone number</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-phone"></i></span>
            <input id="phoneNumber" name="phoneNumber" type="text" />
          </div>
        </div>
      </div>

      <div class="form-group long-line">
        <label for="imageUrl">Image Url</label>
        <div class="input-wrapper">
          <span><i class="fa-solid fa-image"></i></span>
          <input id="imageUrl" name="imageUrl" type="text" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="country">Country</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-map"></i></span>
            <input id="country" name="country" type="text" />
          </div>
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-city"></i></span>
            <input id="city" name="city" type="text" />
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="street">Street</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-map"></i></span>
            <input id="street" name="street" type="text" />
          </div>
        </div>
        <div class="form-group">
          <label for="streetNumber">Street number</label>
          <div class="input-wrapper">
            <span><i class="fa-solid fa-house-chimney"></i></span>
            <input id="streetNumber" name="streetNumber" type="text" />
          </div>
        </div>
      </div>
      <div id="form-actions">
        <button id="action-save" class="btn" type="submit">Save</button>
        <button id="action-cancel" class="btn" type="button">
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>
    </div> */}
        {/* Delete user component  */}
        {/* <div class="overlay">
<div class="backdrop"></div>
<div class="modal">
  <div class="confirm-container">
    <header class="headers">
      <h2>Are you sure you want to delete this account?</h2>
      <button class="btn close">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
          class="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
          </path>
        </svg>
      </button>
    </header>
    <div class="actions">
      <div id="form-actions">
        <button id="action-save" class="btn" type="submit">Delete</button>
        <button id="action-cancel" class="btn" type="button">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
    </div> */}
      </main>
    </>
  );
}
