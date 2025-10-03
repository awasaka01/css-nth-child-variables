// generates the css files
const amounts = [100, 250, 500, 1_000, 5_000, 10_000];

amounts.forEach((amount) => {
	let out = ["*{--nth-child:var(--_)}"];
	for (let i = 1; i <= amount; i++) {
		out.push(`*:nth-child(${i}){--_:${i}}`);
	}

	const filepath = `./css/${amount}-vars.css`;
	require("fs").writeFileSync(filepath, out.join(""));
});
