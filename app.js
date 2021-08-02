// fetch("games.json").then(function (response) {
//     return response.json
// }).then( function (data){
// appendGames(game=data)
// }).catch( function (err) {
//     console.log(err);
// })
const data = [
    {
        "id": "1",
        "name": "CyberPunk 2077",
        "pub": "Doe",
        "categories": "RPC,ACTION",
        "price": "$49.99"
    },
    {
        "id": "2",
        "name": "Mary",
        "pub": "Peterson",
        "categories": "RPC,ACTION",
        "price": "$49.99"
    },
    {
        "id": "3",
        "name": "George",
        "pub": "Hansen",
        "categories": "RPC,ACTION",
        "price": "$49.99"

    }
]
appendGames(data)
function appendGames(game){
var gameContainer = document.getElementById('gameCards')
for (i=0; i<game.length; i++) {
    var div = document.createElement('div');
    div.innerHTML= `
    <div class="game-card">
    <div class="game-content">
    <div class="game-img"style="background-image: url('./assets/cyberpunk.jpg');"></div>
                        <div class="game-name">${data[i].name}
                        </div>
                        <div class="game-rating">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div class="game-pub">${data[i].pub}</div>
                        <div class="game-type">${data[i].categories}</div>
                        <div class="game-price">${data[i].price}</div>
                    </div>
                    </div>
    `
    gameContainer.appendChild(div);
}
}