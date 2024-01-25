import React from "react";

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav_link">
        <a href="https://github.com/AWS-af" className="nav_anchor">
          &lt; &#47; Abdul Wali Siddiqui &gt;
        </a>
      </div>
      <div className="nav_icon">
        <div className="nav_icon_line" />
        <div className="nav_icon_line line_2" />
        <div className="nav_icon_line line_3" />
      </div>
    </nav>
  );
}

export default NavBar;
