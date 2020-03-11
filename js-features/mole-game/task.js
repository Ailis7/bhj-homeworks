let kills = document.getElementById("dead");
let miss = document.getElementById("lost")

function getHole(index) {
    for (let i = 1; i < 10; i++) {
        let currentHole = document.getElementById(`${index}${i}`);
        currentHole.onclick = function() {
            if (currentHole.className.includes( 'hole_has-mole' ) === true) {
                kills.textContent = parseFloat(kills.textContent) + 1;
                if (kills.textContent == 10) {
                    alert("Победа!"); 
                    kills.textContent = 0, miss.textContent = 0; 
                }
            } else {
                miss.textContent = parseFloat(miss.textContent) + 1;
                if (miss.textContent == 5) {
                    alert("Вы проиграли :(");
                    kills.textContent = 0, miss.textContent = 0; 
                }
            }
        }
    }
}
getHole("hole");
