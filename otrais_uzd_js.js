function atrast(masivs) {
    for (let i = 0; i < masivs.length; i++){
        if (masivs[i] % 2 === 0) {
            console.log(masivs[i]);
            return;
        }
    }

    console.log("Nav pāra skaitļu");
}

atrast([3, 7, 9, 12, 15]);