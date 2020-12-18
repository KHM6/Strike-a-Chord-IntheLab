/* 
script.js
Katie Miller
12/18/20 
*/

//Hamburger menu function
function hamburger()
{
    var menu = document.getElementById("menu-links");
    if(menu.style.display === "block")
    {
        menu.style.display = "none";
    }
    else
    {
        menu.style.display = "block";
    }
}
