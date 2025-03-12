# Responsive Project and Role-Based Authentication

## Overview
This project implements a responsive user registration and login system with role-based redirection. Local storage is used as the backend.

## Features
- # Responsive Project and Role-Based Authentication

## Overview
This project is a responsive web application with role-based authentication. The backend is powered by **local storage**, and it includes user registration, login, profile management, and administrative controls.

## Features
### Registration (registration.html)
- Users can register by providing **name, phone number, email, password, date of birth, and address**.
- Validation is implemented for all input fields.
- Users can upload an **image** with cropping functionality.
- Users can upload **multiple PDF files**.
- Role (manager or user) is asked in dropdown (if superadmin then no need to select any options in the dropdown).
- Registered data is stored in local storage named formData_new.

### Login (login.html)
- Users log in using their **email and password**.
- Upon successful login, a **token is generated**.
- Role-based redirection:
  - **Users** are directed to `index.html`.
  - **Managers and Super Admins** are directed to `dashmin-1.0.0/dashmin-1.0.0/table2.html`.
  - A **Forgot Password** link is available:
  - Redirects users to `forgotPassword.html`.
  - Users enter their registered email.
  - If found in local storage (`formData_new`), a **password reset link is generated**.
  - The link directs users to `changePassword.html` where they can reset their password.

### User Profile (dummy_profile.html)
- Displays **profile picture, name, email, phone number, address, date of birth, and uploaded certificates**.
- Two buttons:
  - **Edit Profile:** Redirects to `popup.html`, allowing users to edit **name, phone number, email, date of birth, address, and hobbies** and upon successfully editing the profile it shows a message of successfully edited profile and redirects to the Profile page in 3 seconds.
  - **Logout:** Deletes the login token and redirects to `login.html`.

### Admin Dashboard (dashmin-1.0.0/dashmin-1.0.0/table2.html)
- **Dynamically generated table** displaying registered users.
- Features include:
  - **Sort by name,email and phone number**.
  - **Search by name and email**.
  - **Pagination**.
  - **Edit and delete users/managers** (available for Super Admins only).
  - **Appoint users as Managers** (Super Admins only).
  - **Appoint Managers to users** (Super Admins only).
  - **Drag and drop columns** to rearrange them.

- Action functions:
  1. **Export to CSV** – Saves table data as a CSV file.
  2. **Export to PDF** – Saves table data as a PDF file.
  3. **Add Member** – Redirects to `dashmin-1.0.0/dashmin-1.0.0/newMember.html`, where:
     - Users are registered with complete validation.
     - A **Back** button redirects back to `dashmin-1.0.0/dashmin-1.0.0/table2.html`.
  4.  **Super Admins** have a **dropdown** to switch views between different managers.

  5. **SuperAdmin dropdown** – The top right corner dropdown has:
     - **My Profile** which directs to `dashmin-1.0.0/dashmin-1.0.0/profilepage1.html` where super admin can update the fields with update and cancel button which directs back to `dashmin-1.0.0/dashmin-1.0.0/table2.html` page.
     - **Change Password** which directs to `dashmin-1.0.0/dashmin-1.0.0/changePassword.html` where super admin can update password by adding current password, new password, confirm password fields with update and cancel button which directs back to `dashmin-1.0.0/dashmin-1.0.0/table2.html` page.
     - A **Logout** button redirects back to `login.html`.


## Installation & Usage
1. Open `registration.html` to create an account.
2. After successful registration, navigate to `login.html` to log in.
3. Based on the user role, redirection occurs automatically.
4. Use `dummy_profile.html` to view and edit profile details.
5. Admin Panel `dashmin-1.0.0/dashmin-1.0.0/table2.html` has all administrative rights.
5. All the messages are displayed using toastify library.

## Technologies Used
- HTML, CSS, JavaScript
- Local Storage for data persistence

## Future Enhancements
- Implement a backend with a database.
- Improve security measures such as password hashing.

## Author
Saloni Pancholi

