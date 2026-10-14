export function filterProducts(products,{category,search}) { const term=search.trim().toLowerCase(); return products.filter(p=>(category==='todos'||p.category===category)&&(!term||p.name.toLowerCase().includes(term)||p.desc.toLowerCase().includes(term))); }
export function addCartItem(cart,item){const existing=cart.find(p=>p.key===item.key);return existing?cart.map(p=>p.key===item.key?{...p,qty:p.qty+1}:p):[...cart,{...item,qty:1}];}
export function changeQuantity(cart,key,delta){return cart.map(p=>p.key===key?{...p,qty:p.qty+delta}:p).filter(p=>p.qty>0);}
export function cartTotal(cart){return cart.reduce((sum,p)=>sum+p.price*p.qty,0);}
