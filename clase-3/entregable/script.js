let lines = 5;
for (let i = 0; i < lines * 2; i += 2) {
    const str = " ".repeat((lines * 2 - i) / 2) + "*".repeat(i + 1);
    console.log(str);
}
