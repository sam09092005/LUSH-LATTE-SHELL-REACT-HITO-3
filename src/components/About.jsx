import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
export default function About({addToCart}){const navigate=useNavigate();return (<section className="w-full py-16 lg:py-24 bg-surface-container-low/40" id="nosotros">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="rounded-2xl overflow-hidden shadow-md h-60">
<img alt="Barista latte art craft" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="images/product-01.jpg" />
</div>
<div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm">
<span className="font-display-hero text-headline-lg font-bold text-secondary">{"100%"}</span>
<span className="font-label-md text-label-md text-primary block mt-1">{"Origen Yungas & Caranavi"}</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{"Cultivado por encima de 1.600 msnm con procesos de secado natural y honey."}</p>
</div>
</div>
<div className="space-y-4 pt-8">
<div className="p-6 rounded-2xl bg-primary text-on-primary shadow-md">
<span className="material-symbols-outlined text-secondary-fixed text-3xl mb-2">{"energy_savings_leaf"}</span>
<h4 className="font-headline-sm text-headline-sm">{"Tostado Fresco Semanal"}</h4>
<p className="font-body-sm text-body-sm opacity-80 mt-1">{"Lotes pequeños en Cochabamba para mantener vivas las notas frutales y achocolatadas."}</p>
</div>
<div className="rounded-2xl overflow-hidden shadow-md h-60">
<img alt="Desayuno artesanal fresco" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="images/product-02.jpg" />
</div>
</div>
</div>

<div className="lg:col-span-6 space-y-6">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">{"Nuestra Filosofía"}</span>
<h2 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg text-primary">{"\n            Café hecho con calma para mañanas con prisa\n          "}</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">{"\n            En Lush Latte creemos que disfrutar de un café boliviano de campeonato no debería costarte 20 minutos de espera ni hacerte llegar tarde a la oficina. \n          "}</p>
<p className="font-body-md text-body-md text-on-surface-variant">{"\n            Unimos la precisión del tueste artesanal con la tecnología de recojo express: haces tu pedido antes de salir de casa, lo preparamos en su temperatura justa y solo pasas a retirarlo por la barra en Cochabamba.\n          "}</p>

<div className="space-y-4 pt-2">
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">{"award_star"}</span>
</div>
<div >
<h4 className="font-headline-sm text-headline-sm text-primary">{"Calidad de Altura"}</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"Granos seleccionados a mano por caficultores de Caranavi con puntuación SCA superior a 84 puntos."}</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">{"speed"}</span>
</div>
<div >
<h4 className="font-headline-sm text-headline-sm text-primary">{"Rapidez sin fricción"}</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"Tu café se sirve en una ventana precisa de 2 minutos antes de tu hora de llegada para máxima frescura."}</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">{"handshake"}</span>
</div>
<div >
<h4 className="font-headline-sm text-headline-sm text-primary">{"Cercanía y Hospitalidad"}</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"Te conocemos por tu nombre. Cada barista está entrenado para brindarte la mejor sonrisa de la mañana."}</p>
</div>
</div>
</div>
<div className="pt-4">
<button className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md gap-2 shadow-md transition-all active:scale-95" onClick={(event)=>{navigate("/pedido")}}>
<span className="">{"Preparar mi pedido ahora"}</span>
<span className="material-symbols-outlined text-[18px]">{"arrow_downward"}</span>
</button>
</div>
</div>
</div>
</div>
</section>);}
