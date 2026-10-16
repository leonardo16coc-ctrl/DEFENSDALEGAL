/* Interacciones del sitio (menú, formulario, avisos legales). */
(() => {
 const menu=document.getElementById('site-nav'), toggle=document.getElementById('menu-toggle');
 function setMenu(open){menu.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');}
 toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
 document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!toggle.contains(e.target))setMenu(false)});
 const top=document.getElementById('go-top');function onScroll(){top.classList.toggle('visible',window.scrollY>650)}onScroll();window.addEventListener('scroll',onScroll,{passive:true});
 document.getElementById('year').textContent=new Date().getFullYear();
 document.getElementById('contact-form').addEventListener('submit',e=>{
  e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;
  const name=f.nombre.value.trim(),phone=f.telefono.value.trim(),topic=f.materia.value,description=f.descripcion.value.trim();
  const text=`Hola, Defensa Legal Master. Me gustaría solicitar una consulta.\n\nNombre: ${name}\nTeléfono: ${phone}\nMateria: ${topic}\nDescripción general: ${description}`;
  const url='https://wa.me/523323269386?text='+encodeURIComponent(text);
  const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';document.body.appendChild(a);a.click();a.remove();
 });
 const legal={
  privacy:{title:'Aviso de privacidad',body:'<p><strong>Información preliminar para revisión del despacho.</strong> Defensa Legal Master, con domicilio en C. 14 2481, interior 1, Colón Industrial, Guadalajara, Jalisco, pone a disposición este espacio de información. El formulario de este sitio abre un mensaje de WhatsApp y no guarda los datos en una base de datos propia.</p><p>Los datos que usted decida enviar por canales de contacto se utilizarán para atender su solicitud. Para conocer el tratamiento específico de su información y ejercer los derechos que correspondan, comuníquese al teléfono y WhatsApp <a href="tel:+523323269386">33 2326 9386</a>.</p><p><em>Antes de publicar el sitio, el despacho debe sustituir este texto por su aviso de privacidad completo y validado.</em></p>'},
  terms:{title:'Términos y condiciones',body:'<p>El contenido de este sitio tiene fines informativos y no sustituye una consulta jurídica individual. La comunicación inicial no garantiza la aceptación de un asunto ni establece, por sí misma, una relación profesional abogado-cliente.</p><p>El alcance del servicio, honorarios y condiciones de representación deben acordarse directamente con el despacho.</p><p><em>Texto informativo preliminar sujeto a revisión del despacho antes de publicar.</em></p>'},
  cookies:{title:'Política de cookies',body:'<p>Esta página HTML no incorpora cookies publicitarias propias ni herramientas de seguimiento integradas. Puede cargar fuentes tipográficas desde Google Fonts y abrir sitios externos, como WhatsApp y Google Maps, cuando usted interactúa con sus enlaces.</p><p>Si posteriormente se agregan analíticas, anuncios u otras tecnologías, esta política deberá actualizarse conforme a su operación real y obligaciones aplicables.</p>'}
 };
 const dialog=document.getElementById('legal-dialog');document.querySelectorAll('[data-legal]').forEach(btn=>btn.addEventListener('click',()=>{let d=legal[btn.dataset.legal];document.getElementById('legal-title').textContent=d.title;document.getElementById('legal-body').innerHTML=d.body;dialog.showModal()}));
 document.getElementById('legal-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
})();
