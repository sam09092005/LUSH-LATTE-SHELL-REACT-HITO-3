import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
export default function Contact({addToCart}){const navigate=useNavigate();const [sent,setSent]=useState(false);return (<section className="w-full py-16 lg:py-24 bg-surface-container-low/60" id="contacto">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-6">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">{"Atención Directa"}</span>
<h2 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg text-primary">{"Estamos para ayudarte"}</h2>
<p className="font-body-md text-body-md text-on-surface-variant">{"\n            ¿Tienes dudas con un pedido corporativo, eventos especiales o tu recojo express? Escríbenos directamente a través de cualquiera de nuestros canales.\n          "}</p>
<div className="space-y-3 pt-2">
<a className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest hover:bg-surface-container transition-all group shadow-sm" href="https://wa.me/59176912345" rel="noopener noreferrer" target="_blank">
<div className="w-12 h-12 rounded-full bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">{"chat"}</span>
</div>
<div >
<span className="font-label-md text-label-md text-primary block group-hover:text-secondary transition-colors">{"WhatsApp Express"}</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">{"+591 769 12345 (Respuesta en < 3 min)"}</span>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest hover:bg-surface-container transition-all group shadow-sm" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
<div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">{"photo_camera"}</span>
</div>
<div >
<span className="font-label-md text-label-md text-primary block group-hover:text-secondary transition-colors">{"Instagram Oficial"}</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">{"@lushlatte.bo"}</span>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest hover:bg-surface-container transition-all group shadow-sm" href="mailto:hola@lushlatte.bo">
<div className="w-12 h-12 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">{"mail"}</span>
</div>
<div >
<span className="font-label-md text-label-md text-primary block group-hover:text-secondary transition-colors">{"Correo Electrónico"}</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">{"hola@lushlatte.bo"}</span>
</div>
</a>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">{"Envíanos un mensaje"}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">{"Te responderemos a tu correo o celular en menos de 2 horas hábiles."}</p>
<form className="space-y-4" id="contact-form" onSubmit={(event)=>{event.preventDefault();setSent(true)}}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div >
<label className="font-label-sm text-label-sm text-on-surface-variant block mb-1.5 uppercase font-bold">{"Tu Nombre Completo"}</label>
<input className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:ring-2 focus:ring-secondary/50" placeholder="Ej: Carla Morales" required type="text" />
</div>
<div >
<label className="font-label-sm text-label-sm text-on-surface-variant block mb-1.5 uppercase font-bold">{"Correo Electrónico"}</label>
<input className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:ring-2 focus:ring-secondary/50" placeholder="tu@correo.com" required type="email" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div >
<label className="font-label-sm text-label-sm text-on-surface-variant block mb-1.5 uppercase font-bold">{"Celular (+591)"}</label>
<input className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:ring-2 focus:ring-secondary/50" placeholder="+591 700 12345" type="tel" />
</div>
<div >
<label className="font-label-sm text-label-sm text-on-surface-variant block mb-1.5 uppercase font-bold">{"Motivo"}</label>
<select className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:ring-2 focus:ring-secondary/50">
<option value="consulta">{"Consulta de pedido"}</option>
<option value="catering">{"Catering / Pedidos de oficina"}</option>
<option value="granos">{"Compra de granos tostados al por mayor"}</option>
<option value="otro">{"Otro comentario"}</option>
</select>
</div>
</div>
<div >
<label className="font-label-sm text-label-sm text-on-surface-variant block mb-1.5 uppercase font-bold">{"Mensaje"}</label>
<textarea className="w-full p-4 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:ring-2 focus:ring-secondary/50" placeholder="¿Cómo podemos ayudarte hoy?..." required rows="4"></textarea>
</div>
<div className=" p-4 rounded-xl bg-tertiary-fixed/60 text-on-tertiary-fixed font-body-sm flex items-center gap-2" id="contact-alert">{sent && <p role="status">Mensaje recibido en esta demostración. No se envió a un servidor.</p>}</div>
<button className="w-full h-12 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow transition-all active:scale-95" type="submit">{"\n                Enviar mensaje\n              "}</button>
</form>
</div>
</div>
</div>
</div>
</section>);}
