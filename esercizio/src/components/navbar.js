//qui dentro vado a definire la funzione navbar che OVVIAMENTE  dovrà avere un ritorno (ovvero la navbar stessa)
//e l'export così react può esportarlo, una volta creata questa funzione la vado a importare all'interno del componente app
function Navbar(){

    return(
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Sushi!!!</span>
  </div>
</nav>
    );
}
export default Navbar;