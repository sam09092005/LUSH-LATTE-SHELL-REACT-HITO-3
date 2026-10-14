import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
export default function Locations({addToCart}){const navigate=useNavigate();return (<section className="w-full py-16 lg:py-24 bg-surface" id="locaciones">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">{"Nuestras Barras"}</span>
<h2 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg text-primary mt-1">{"Encuentra tu Lush Latte más cercano"}</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">{"Tres puntos estratégicos en la Llajta diseñados para pasar, recoger y continuar tu día con la mejor energía."}</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div >
<div className="flex items-center justify-between mb-3">
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold">{"Abierto ahora"}</span>
<span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">{"flash_on"}</span>{" 5 min express\n              "}</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-1">{"El Prado"}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{"Av. Ballivián #642 (casi esquina México)"}</p>
<div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant py-3 bg-surface-container-low/60 rounded-xl px-3 mb-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">{"schedule"}</span>
<span className="">{"Lun - Sáb: 07:00 — 21:00"}</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">{"takeout_dining"}</span>
<span className="">{"Barra express dedicada peatonal"}</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 pt-2">
<button className="flex-1 h-11 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all" onClick={(event)=>{navigate("/pedido?branch="+encodeURIComponent("Av. Ballivi\u00e1n (El Prado)"))}}>{"\n              Ordenar aquí\n            "}</button>
<a className="w-11 h-11 rounded-full bg-surface-container-high hover:bg-surface-variant flex items-center justify-center text-primary transition-colors" href="https://maps.google.com/?q=Av.+Ballivian+Cochabamba" rel="noopener noreferrer" target="_blank" title="Ver en Google Maps">
<span className="material-symbols-outlined text-[20px]">{"pin_drop"}</span>
</a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div >
<div className="flex items-center justify-between mb-3">
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold">{"Abierto ahora"}</span>
<span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">{"flash_on"}</span>{" 7 min express\n              "}</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-1">{"América Oeste"}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{"Av. América y Pando #129"}</p>
<div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant py-3 bg-surface-container-low/60 rounded-xl px-3 mb-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">{"schedule"}</span>
<span className="">{"Lun - Dom: 07:30 — 21:30"}</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">{"directions_car"}</span>
<span className="">{"Espacio de parada rápida en auto"}</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 pt-2">
<button className="flex-1 h-11 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all" onClick={(event)=>{navigate("/pedido?branch="+encodeURIComponent("Cala Cala - Av. Am\u00e9rica"))}}>{"\n              Ordenar aquí\n            "}</button>
<a className="w-11 h-11 rounded-full bg-surface-container-high hover:bg-surface-variant flex items-center justify-center text-primary transition-colors" href="https://maps.google.com/?q=Av.+America+Cochabamba" rel="noopener noreferrer" target="_blank" title="Ver en Google Maps">
<span className="material-symbols-outlined text-[20px]">{"pin_drop"}</span>
</a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div >
<div className="flex items-center justify-between mb-3">
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold">{"Abierto ahora"}</span>
<span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">{"flash_on"}</span>{" 5 min express\n              "}</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-1">{"Recoleta"}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{"Plaza Quintanilla esq. Portales #402"}</p>
<div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant py-3 bg-surface-container-low/60 rounded-xl px-3 mb-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">{"schedule"}</span>
<span className="">{"Lun - Sáb: 08:00 — 20:00"}</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">{"park"}</span>
<span className="">{"Terraza verde con wifi de alta velocidad"}</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 pt-2">
<button className="flex-1 h-11 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all" onClick={(event)=>{navigate("/pedido?branch="+encodeURIComponent("Recoleta - Plaza Quintanilla"))}}>{"\n              Ordenar aquí\n            "}</button>
<a className="w-11 h-11 rounded-full bg-surface-container-high hover:bg-surface-variant flex items-center justify-center text-primary transition-colors" href="https://maps.google.com/?q=Plaza+Quintanilla+Cochabamba" rel="noopener noreferrer" target="_blank" title="Ver en Google Maps">
<span className="material-symbols-outlined text-[20px]">{"pin_drop"}</span>
</a>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden bg-surface-container-high p-8 shadow-sm">
<div className="max-w-md bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-2xl shadow-lg relative z-10">
<div className="flex items-center gap-2 text-secondary mb-1">
<span className="material-symbols-outlined text-[20px]">{"map"}</span>
<span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">{"Cochabamba, Bolivia"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">{"Circuito Lush Express"}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{"Conecta tus trayectos entre la Zona Norte, Recoleta y el Casco Viejo con un solo café de especialidad."}</p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-primary">{"Barra activa de pedidos en tiempo real"}</span>
</div>
</div>

<div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-35" data-location="Cochabamba, Bolivia"></div>
</div>
</div>
</section>);}
