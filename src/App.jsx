import {useEffect,useState} from 'react';
import {HashRouter,Routes,Route,Link,useLocation} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Locations from './components/Locations.jsx';
import Contact from './components/Contact.jsx';
import Menu from './components/Menu.jsx';
import OrderForm from './components/OrderForm.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import {addCartItem,changeQuantity} from './logic.js';
function ScrollToTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null;}
function Shell(){const [menuState,setMenuState]=useState({category:'todos',search:''});const [cart,setCart]=useState([]);const [cartOpen,setCartOpen]=useState(false);const [notice,setNotice]=useState('');useEffect(()=>{if(!notice)return;const id=setTimeout(()=>setNotice(''),3000);return()=>clearTimeout(id)},[notice]);function addToCart(p){if(!p)return;setCart(c=>addCartItem(c,{...p,key:p.key||p.id,details:p.details||'Estándar'}));setNotice(`${p.name} agregado al carrito`)}return <><a onClick={e=>{e.preventDefault();document.getElementById("main").focus()}} href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:bg-white focus:p-4">Saltar al contenido</a><ScrollToTop/><Header count={cart.reduce((s,p)=>s+p.qty,0)} onCart={()=>setCartOpen(true)}/><main tabIndex={-1} id="main" className="min-h-[70vh]"><Routes><Route path="/" element={<Hero addToCart={addToCart}/>}/><Route path="/menu" element={<Menu state={menuState} setState={setMenuState} onAdd={addToCart}/>}/><Route path="/pedido" element={<OrderForm onAdd={addToCart} cart={cart}/>}/><Route path="/nosotros" element={<About/>}/><Route path="/locaciones" element={<Locations/>}/><Route path="/contacto" element={<Contact/>}/><Route path="*" element={<div className="p-12"><h1 className="text-3xl">Página no encontrada</h1><Link to="/">Volver al inicio</Link></div>}/></Routes></main><Footer/><CartDrawer open={cartOpen} onClose={()=>setCartOpen(false)} cart={cart} onQuantity={(key,delta)=>setCart(c=>changeQuantity(c,key,delta))} onRemove={key=>setCart(c=>c.filter(p=>p.key!==key))}/><div role="status" aria-live="polite" className={notice?'fixed bottom-5 right-5 z-50 rounded-xl bg-primary text-white p-4 shadow-lg':'sr-only'}>{notice}</div></>}
export default function App(){return <HashRouter><Shell/></HashRouter>}
