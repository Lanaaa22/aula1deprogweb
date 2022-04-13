const subtitulos = document.querySelectorAll("h2");
const topicos = new Array();
subtitulos.forEach(element => {
	topicos.push(element.textContent);
	
	const arco = document.createElement("a");
	arco.setAttribute("name", element.textContent);
	element.append(arco);
	
	
});

const lista = document.querySelector("ol");
topicos.forEach(topico => {
	const item = document.createElement("li");
	const link = document.createElement("a");
	lista.append(item);
	item.append(link);
	link.setAttribute("href", `#${topico}`);
	link.textContent = topico;

});
