import "/style.scss";

document.querySelector("#app").innerHTML = `
  <body>
  <nav class="navbar">
    <div class="logo">Logo</div>
    <div class="menu-icon">&#9776;</div>
    <ul class="menu">
    <li class="submenu">
    <a href="#">Pc</a>
    <ul class="sub-menu">
      <li><a href="#">Service 1</a></li>
      <li><a href="#">Service 2</a></li>
      <li><a href="#">Service 3</a></li>
    </ul>
  </li>
  
      <li><a href="#">Playstation</a></li>
      <li><a href="#">Xbox</a></li>
      <li><a href="#">Nintendo</a></li>
     
      <li class="search-icon">&#128269;</li>
    </ul>
    <div class="profile-icon">Profile</div>
    <div class="search-bar">
      <input type="text" placeholder="Search...">
    </div>
  </nav>
  </body>
`;
