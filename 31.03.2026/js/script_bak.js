/*
LocalStorafe este un mecanism oferit de browser care permite salvarea datelor
direct in  browseru-ul utilizatorului sub forma de perechi cheie-caloare (key-value).

Datele salvate in localStorage
- raman salvate chiar daca utilizatorul inchide browserul
- nu expira automat
- sunt specifice domeniului (site-ului)
- pot fi accesate doar din JavaScript

Capacitatea aproximativa ~5MB per site.

------------------------------------
LIMITARI
------------------------------------

1) Se por salva doar STRING-uri
2) Capacitate mica (~5MB)
3) Datele sunt vizibile in DevTools
4) Nu este sigur pentru date sensibile
    (parole, token-uri importante)

key (cheie)
- indentificatorul datelor salvate
- ex: "username"

value (valoare)
- datele salvate pentru o cheie
- trebuie sa fie STRING

localStorage.clear()
sterge TOT localStorage

localStorage.key(index)
returneaza cheia dupa index

localStorage.length
numatul total de elemente salvate

Important:
LocalStorage poate salva doar STRING-uri
Daca vrem sa salvam obiecte sau array-uri folosim JSON.

JSON.stringify()
- transforma obiect -> string

JSON.parse()
- transforma string -> obiect

------------------------------------
salvarea unui text simplu
------------------------------------

localStorage.setItem("username", "daniel")

------------------------------------
citirea unei valori
------------------------------------

let user = localStorage.getItem("username");
console.log(user);

------------------------------------
citirea unui obiect
------------------------------------

let savedUser = JSON.parse(localStorage.getItem("user"));

console.log(savedUser.name);
console.log(savedUser.age);
*/

function darkTheme() {
    document.body.style.background = "black";
    document.body.style.color = "white";
}
function whiteTheme() {
    document.body.style.background = "white";
    document.body.style.color = "black";
}

function themeToggler() {
    let theme = localStorage.getItem("theme");
    if (theme === null) {
        localStorage.setItem("theme", "white");
    }
    if (theme === "dark") {
        localStorage.setItem("theme", "white")
        whiteTheme();
    }
    if (theme === "white") {
        localStorage.setItem("theme", "dark")
        darkTheme();
    }
    console.log(theme);
}
function loadTheme() {
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
        darkTheme();
    }
    if (theme === "white") {
        whiteTheme();
    }
    console.log(theme);

}
