const subtitulos = document.querySelectorAll("h2");
const topicos = new Array();
subtitulos.forEach(element => {
	topicos.push(element.textContent);
	
	const variavel = document.createElement("a");
	variavel.setAttribute("name", element.textContent);
	element.append(variavel);
	

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
