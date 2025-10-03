// document.addEventListener("DOMContentLoaded", () => {
// 	const elements = document.getElementsByClassName("nth-vars");
// 	let maxChildren = 0;

// 	for (const el of elements) { maxChildren = Math.max(maxChildren, el.children.length); }

// 	generateStyle({ amount: maxChildren });
// });

/* global namespace */
const NTH = {};

(() => {
	NTH.generate = (amount, varname = "nth-child") => {
		const existing = document.getElementById("__nth-style");
		if (existing) document.body.removeChild(existing);
		if (!amount) throw new Error("amount is required");

		let out = [`*{--${varname}:var(--_)}`];
		for (let i = 1; i <= amount; i++) { out.push(`*:nth-child(${i}){--_:${i}}`); }

		const style = document.createElement("style");
		style.id = "__nth-style";
		style.textContent = out.join("");
		document.body.appendChild(style);
	};
})();
