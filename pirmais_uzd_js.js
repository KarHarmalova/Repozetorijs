function faktorial(n) {
    if (n < 0) {
        console.log("Nederīgs skaitlis");
        return;
}

let resultats = 1;
for (let i = 1; i <= n; i++) {
    resultats *= i;
}

console.log(resultats);
}

faktorial(5);