const nombre = 'cercio';
const apellido = 'viloria'
const edad = 24;
const telefono = '04162585072';
const correo = 'cercio2015@gmail.com';

let html;

function miNombre(argument) {
	return 'cercio miguel viloria simancas'
}

html = `
<div>
   <h3>Datos personales </h3>
</div>
   <ul>
      <li>Nombre: ${nombre} </li>
      <li>apellido: ${apellido} </li>
      <li>edad:  ${edad}</li>
      <li>telefono: ${telefono} </li>
      <li>correo: ${correo} </li>
      <li>Nombre completo: ${miNombre()}</li>
      <li>etapa: ${edad >= 30 ? 'viejo' : 'joven'}</li>
   </ul>
`;

document.body.innerHTML= html;


