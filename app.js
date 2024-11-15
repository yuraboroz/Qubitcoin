function mine() {
    let startTime = new Date().getTime();
    let targetHash = "";

    // Симуляция процесса поиска хэша
    while (targetHash.length < 64) {
        targetHash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        if (targetHash.includes("abc")) {  // Условие поиска специального хэша (симуляция процесса майнинга)
            break;
        }
    }

    let endTime = new Date().getTime();
    let timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Время на поиск хэша в секундах
    return { hash: targetHash, timeTaken: timeTaken };
}

document.getElementById("start-mining").onclick = function() {
    let miningResult = mine();

    // Обновляем страницу с результатами майнинга
    document.getElementById("hash").innerText = miningResult.hash;
    document.getElementById("reward").innerText = (Math.random() * 10).toFixed(2) + " QBT"; // Симуляция получения награды
    document.getElementById("hash-result").innerText = `Ваш хэш: ${miningResult.hash}`;
    document.getElementById("reward-result").innerText = `Награда: ${document.getElementById("reward").innerText}`;
};

document.getElementById("invite-friends").onclick = function() {
    alert("Пригласите своих друзей и получите бонус для ускорения майнинга!");
};
