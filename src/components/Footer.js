import React from 'react';

import { Heart } from 'react-feather';

import './footer.scss';

const Navbar = _ => {
  return (
    <footer>
      <p>
        Keep in <Heart size='15' color="red" style={{fill: 'red'}} /> with your own
        &lt;code/&gt;.
      </p>
      <p>Copyleft<span>&copy;</span> 2020</p>
    </footer>
  );
};

export default Navbar;
