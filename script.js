//https://itunes.apple.com/search?term=indie&entity=song

const search = document.getElementById('search');
const userHTML = document.getElementById('user');

// Funkcija za pretraživanje korisnika
function searchUsers(query) {
    // Koristimo fetch API za dohvaćanje korisnika iz vanjskog API-ja
    fetch(`file.json`)
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            // Filteriramo korisnike prema upitu
            const filteredUsers = users.results.filter(function (user) {
                // Pretražujemo ime, email i grad
                return (

                    user.artistName.toLowerCase().includes(query.toLowerCase())
                    /*
                    user.collectionName.toLowerCase().includes(query.toLowerCase()) ||
                    user.trackName.toLowerCase().includes(query.toLowerCase())
                    */


                );
            });

            // Brišemo prijašnji sadržaj iz liste
            user.innerHTML = '';

            // Dodajemo novi sadržaj - korisnike koji su prošli kroz filtriranje
            filteredUsers.forEach(function (user) {
                const li = document.createElement('li');
                li.textContent = user.artistName;
                userHTML.appendChild(li);
            });
        })
        .catch(function (error) {
            console.error(error);
        });
}

// Slušamo događaj inputa u polju za pretraživanje
search.addEventListener('input', function (event) {
    // Dohvaćamo vrijednost iz polja za pretraživanje
    const query = event.target.value;

    // Pozivamo funkciju za pretraživanje korisnika
    searchUsers(query);
});
