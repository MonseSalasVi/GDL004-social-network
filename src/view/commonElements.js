function singUpForm() {
  history.pushState("formCount.js", "formCount", "#/FormCount");
  window.history.go();
}

function logInForm() {
  history.pushState("login.js", "login", "#/Login");
  window.history.go();
}
const btnSingInUp = () => {
  const btnSingIn = document.createElement("BUTTON");
  btnSingIn.innerHTML = "Log In";
  //btnSingIn.onclick = login;
  btnSingIn.setAttribute('id', 'btn_sing_in');
  btnSingIn.setAttribute('class', 'btn_primary active');
  btnSingIn.onclick = logInForm;
  document.body.appendChild(btnSingIn);
  const btnSingUp = document.createElement("BUTTON");
  btnSingUp.innerHTML = "Sing Up";
  btnSingUp.onclick = singUpForm;
  // btnSingUp.onclick = login;
  btnSingUp.setAttribute('id', 'btn_sing_in');
  btnSingUp.setAttribute('class', 'btn_primary active');
  document.body.appendChild(btnSingUp);
  const containerBtn = document.createElement("div");
  containerBtn.setAttribute('id', 'form-signIn'); // creamos el formulario
  containerBtn.setAttribute("class", "btn_container")
  containerBtn.appendChild(btnSingIn);
  containerBtn.appendChild(btnSingUp);
  document.body.appendChild(containerBtn);
  return btnSingInUp;
}
const navbar = () => {
  const navbarMenu = document.createElement("Navbar");
  headerNav.setAttribute('class', 'navbar_bottom');
  document.body.appendChild(navbarMenu);
  const listNavbarBottom = document.createElement("ul");
  listNavbarBottom.setAttribute("class", "navbar_bottom_list");
  document.body.appendChild(listNavbarBottom);
  const liNavHome = document.createElement("li");
  liNavHome.setAttribute("class", "header_nav-page");
  document.body.appendChild(liNavHome);
  const liNavHomeSpan = document.createElement("span");
  liNavHomeSpan.setAttribute("class", "flaticon-012-house");
  document.appendChild(liNavHomeSpan);
  const liNavHomeA = document.createElement("a");
  liNavHomeA.setAttribute("href", "#/Home");
  liNavHomeA.innerHTML = "Home";
  document.appendChild(liNavHomeA);
  liNavHomeSpan.appendChild(liNavHomeA);
  liNavHome.body.appendChild(liNavHomeSpan);
  const liHeaderNavUser2 = document.createElement("li");
  liHeaderNavUser2.setAttribute("class", "header_nav-user")
  document.body.appendChild(liHeaderNavUser2);
  const liHeaderNavUsera2 = document.createElement("a");
  liHeaderNavUsera2.setAttribute("href", "#/EditProfile");
  liHeaderNavUsera2.innerHTML = "User";
  const liHeaderNavUserSpan2 = document.createElement("span");
  liHeaderNavUserSpan2.setAttribute("class", "flaticon-051-user")
  liHeaderNavUser2.appendChild(liHeaderNavUserSpan2);
  liHeaderNavUser2.appendChild(liHeaderNavUsera2);
  listNav.appendChild(liHeaderNavUser);
  listNav.appendChild(liHeaderNavUser2);
  headerNav.appendChild(listNav);
}
const headerMenu = () => {
  const headerNav = document.createElement("header");
  headerNav.setAttribute('class', 'header_nav');
  document.body.appendChild(headerNav);
  const listNav = document.createElement("ul");
  listNav.setAttribute("class", "header_nav_list");
  document.body.appendChild(listNav);
  const liHeaderNavUser = document.createElement("li");
  liHeaderNavUser.setAttribute("class", "header_nav-page")
  document.body.appendChild(liHeaderNavUser);
  const liHeaderNavUserSpan = document.createElement("span");
  liHeaderNavUserSpan.setAttribute("class", "flaticon-009-next ")
  const liHeaderNavUsera = document.createElement("a");
  liHeaderNavUsera.setAttribute("href", "#/Profile");
  liHeaderNavUsera.innerHTML = "Profile";
  liHeaderNavUser.appendChild(liHeaderNavUsera);
  liHeaderNavUser.appendChild(liHeaderNavUserSpan);
  const liHeaderNavUser2 = document.createElement("li");
  liHeaderNavUser2.setAttribute("class", "header_nav-user")
  document.body.appendChild(liHeaderNavUser2);
  const liHeaderNavUsera2 = document.createElement("a");
  liHeaderNavUsera2.setAttribute("href", "#/EditProfile");
  liHeaderNavUsera2.innerHTML = "User";
  const liHeaderNavUserSpan2 = document.createElement("span");
  liHeaderNavUserSpan2.setAttribute("class", "flaticon-051-user")
  liHeaderNavUser2.appendChild(liHeaderNavUserSpan2);
  liHeaderNavUser2.appendChild(liHeaderNavUsera2);
  listNav.appendChild(liHeaderNavUser);
  listNav.appendChild(liHeaderNavUser2);
  headerNav.appendChild(listNav);
}
export {
  btnSingInUp,
  navbar,
  headerMenu
}