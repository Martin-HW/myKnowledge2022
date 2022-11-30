{
  /* <Link to="/acerca">Acerca</Link> */
}
{
  //   <NavLink exact to="/acerca" activeClassName="active">
  //     Acerca
  //   </NavLink>
}
{
  // <Link to="/usuario/jonmircha">jonmircha</Link>
}
{
  // <Route exact path="/contacto" component={Contacto} />
}
{
  //   <Route exact path="/usuario/:username" component={Usuario} />
}
{
  //   useLocation();
  //   new URLSearchParams();
  //   useHistory();
}
{
  //   <Route exact path="/about">
  //     <Redirect to="/acerca" />
  //   </Route>
}

/***********************************************************************************************/

// v6

import { BrowserRouter, Routes, Route } from "react-router-dom";
<BrowserRouter>
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>;

<ol>
  <li>
    <NavLink to="/about">About</NavLink>;
    <NavLink className={(data) => console.log(data)} to="/about">
      About
    </NavLink>
    ;
    <NavLink className={(isActive) => (isActive ? "isActive" : "")} to="/about">
      About
    </NavLink>
    ;
  </li>
  <li>
    <NavLink to="/users">Users</NavLink>;
  </li>
</ol>;

const userId = 10;
<Link to={`/users/${userId}`}>Usuarios</Link>;
/*****************************************************************************************************/

<Route path="/users/:myUserId" element={<UserPage />} />;

import { useParams } from "react-router-dom";
export default function UserPage() {
  const params = useParams();
  return (
    <div>
      <p>USER: {params.myUserId}</p>
    </div>
  );
}

/*****************************************************************************************************/

<Route path="/users" element={<UsersPage />} />;
<Route path="/usuarios" element={<Navegate replace to="/users" />} />;


/*****************************************************************************************************/

<Route path="/dashboard" element={<Dashboard />} />;

export default function Dashboard(){
  const navegate = useNavegate();

  const handleClick = () =>{
    navegate("/");
  }
  return(
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>logout</button>
    </div>
  )
}

/*****************************************************************************************************/