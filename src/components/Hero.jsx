import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {heroSlides,products} from '../data/products.js';
export default function Hero({addToCart}){const navigate=useNavigate();const [index,setIndex]=useState(0);const slide=heroSlides[index];const setHeroSlide=setIndex;const nextHeroSlide=()=>setIndex(i=>(i+1)%heroSlides.length);const prevHeroSlide=()=>setIndex(i=>(i+heroSlides.length-1)%heroSlides.length);const quickAddCurrentHero=()=>addToCart(products.find(p=>p.name===slide.title));const quickOrderCurrentHero=()=>navigate('/pedido?product='+encodeURIComponent(slide.title));return (<section className="w-full relative overflow-hidden bg-surface pt-6 pb-16 lg:pb-24" id="inicio">
<div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

<div className="lg:col-span-6 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">{"bolt"}</span>
<span className="">{"Express Pickup en Cochabamba • Tu café en 5 min"}</span>
</div>
<h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero text-primary tracking-tight">{"\n            Tu Lush Latte favorito, "}<span className="italic font-normal text-secondary">{"listo al pasar"}</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">{"\n            Ordena desde tu teléfono, personaliza cada matiz artesanal y recoge tu pedido humeante en barra sin hacer un solo minuto de fila.\n          "}</p>

<div className="flex flex-wrap gap-2 pt-1">
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">{"timer"}</span>
<span className="font-label-md text-label-md text-on-surface">{"Ordena en 1 minuto"}</span>
</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">{"qr_code_2"}</span>
<span className="font-label-md text-label-md text-on-surface">{"Pago QR inmediato"}</span>
</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">{"directions_run"}</span>
<span className="font-label-md text-label-md text-on-surface">{"Cero filas en barra"}</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 pt-2">
<Link className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-lg transition-all active:scale-95 gap-2" to="/pedido">
<span className="material-symbols-outlined text-[20px]">{"coffee_maker"}</span>
<span className="">{"Pide tu café express"}</span>
</Link>
<Link className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all" to="/menu">{"\n              Ver carta completa\n            "}</Link>
</div>
</div>

<div className="lg:col-span-6 relative">
<div className="relative rounded-3xl bg-surface-container-lowest p-6 sm:p-8 shadow-xl transition-all duration-500 overflow-hidden" id="hero-card">

<div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center">
<div className="w-full sm:w-1/2 aspect-square relative rounded-2xl overflow-hidden shadow-inner bg-surface-container">
<img alt={slide.title} className="w-full h-full object-cover transition-all duration-500 hover:scale-105" id="hero-img" src={slide.img} />
<span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm" id="hero-tag">{slide.tag}</span>
</div>
<div className="w-full sm:w-1/2 space-y-3">
<div className="flex items-baseline justify-between">
<span className="font-headline-md text-headline-md font-bold text-secondary" id="hero-price">{`Bs ${slide.price}`}</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Caranavi Micro-lote"}</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary" id="hero-title">{slide.title}</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed" id="hero-desc">{slide.desc}</p>
<div className="pt-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-1.5 font-bold">{"Perfil botánico:"}</span>
<div className="flex flex-wrap gap-1.5" id="hero-ingredients">{slide.ingredients.map(t=><span key={t} className="px-2 py-0.5 rounded-full bg-surface-container text-xs">{t}</span>)}</div>
</div>
<div className="pt-4 flex gap-2">
<button className="flex-1 h-10 rounded-full bg-secondary hover:bg-on-secondary-container text-on-secondary font-label-md text-label-md flex items-center justify-center gap-1 shadow transition-all" onClick={(event)=>{quickOrderCurrentHero()}}>
<span className="material-symbols-outlined text-[16px]">{"touch_app"}</span>{" Personalizar\n                  "}</button>
<button className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-surface-variant text-primary flex items-center justify-center transition-colors" aria-label="Agregar producto destacado" onClick={(event)=>{quickAddCurrentHero()}}>
<span className="material-symbols-outlined text-[20px]">{"add"}</span>
</button>
</div>
</div>
</div>

<div className="mt-6 pt-5 bg-surface-container-low/50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Anterior" className="w-8 h-8 rounded-full bg-surface-container-lowest shadow flex items-center justify-center text-primary hover:bg-surface-container transition-colors" onClick={(event)=>{prevHeroSlide()}}>
<span className="material-symbols-outlined text-sm">{"west"}</span>
</button>
<button aria-label="Siguiente" className="w-8 h-8 rounded-full bg-surface-container-lowest shadow flex items-center justify-center text-primary hover:bg-surface-container transition-colors" onClick={(event)=>{nextHeroSlide()}}>
<span className="material-symbols-outlined text-sm">{"east"}</span>
</button>
</div>

<div className="flex items-center gap-2 overflow-x-auto py-1">
<button className={"hero-thumb relative rounded-lg overflow-hidden w-10 h-10 " + (index===0 ? "ring-2 ring-secondary" : "opacity-60")} aria-pressed={index===0} aria-label={heroSlides[0].title} data-index="0" onClick={(event)=>{setHeroSlide(0)}}>
<img alt="Lush Latte" className="w-full h-full object-cover" src="images/product-03.jpg" />
</button>
<button className={"hero-thumb relative rounded-lg overflow-hidden w-10 h-10 " + (index===1 ? "ring-2 ring-secondary" : "opacity-60")} aria-pressed={index===1} aria-label={heroSlides[1].title} data-index="1" onClick={(event)=>{setHeroSlide(1)}}>
<img alt="Matcha" className="w-full h-full object-cover" src="images/product-04.jpg" />
</button>
<button className={"hero-thumb relative rounded-lg overflow-hidden w-10 h-10 " + (index===2 ? "ring-2 ring-secondary" : "opacity-60")} aria-pressed={index===2} aria-label={heroSlides[2].title} data-index="2" onClick={(event)=>{setHeroSlide(2)}}>
<img alt="Tostada" className="w-full h-full object-cover" src="images/product-05.jpg" />
</button>
<button className={"hero-thumb relative rounded-lg overflow-hidden w-10 h-10 " + (index===3 ? "ring-2 ring-secondary" : "opacity-60")} aria-pressed={index===3} aria-label={heroSlides[3].title} data-index="3" onClick={(event)=>{setHeroSlide(3)}}>
<img alt="Frappé" className="w-full h-full object-cover" src="images/product-06.jpg" />
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-surface-container-low relative group hover:bg-surface-container transition-colors">
<span className="font-display-hero text-headline-lg font-bold text-outline-variant/40 absolute top-4 right-6">{"01"}</span>
<div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[20px]">{"checklist"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">{"Elige tu bebida y desayuno"}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"Explora nuestra carta de microlotes andinos, tés ceremoniales y repostería artesanal horneada cada madrugada."}</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container-low relative group hover:bg-surface-container transition-colors">
<span className="font-display-hero text-headline-lg font-bold text-outline-variant/40 absolute top-4 right-6">{"02"}</span>
<div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[20px]">{"tune"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">{"Personaliza y paga por QR"}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"Ajusta leche vegetal, dulzor, shots adicionales o temperatura. Cancela en un tap con Simple QR boliviano o tarjeta."}</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container-low relative group hover:bg-surface-container transition-colors">
<span className="font-display-hero text-headline-lg font-bold text-outline-variant/40 absolute top-4 right-6">{"03"}</span>
<div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[20px]">{"local_cafe"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">{"Recoge a la hora exacta"}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"Acércate a la barra designada Lush Express de tu sucursal en Cochabamba y retira tu vaso térmico sin esperas."}</p>
</div>
</div>
</div>
</section>);}
