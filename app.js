const products=[
{id:1,name:'Frank Cyclone — Black',cat:'Jockstrap',price:29.90,img:'https://maskulo.nl/cdn/shop/files/mjs199-y1-frank-cyclone-jockstrap-with-removable-pouch-black-480772.webp?v=1754462604',sizes:['S-M','L-XL'],pay:'https://buy.stripe.com/9B68wQb2474agboeOIfw41N'},
{id:2,name:'Gary Cyclone — Army Green',cat:'Jockstrap',price:34.90,img:'https://maskulo.com/cdn/shop/files/mjs200-y1-gary-cyclone-jockstrap-with-removable-pouch-army-green-315030.webp?v=1754462601',sizes:['S-M','L-XL'],pay:'https://buy.stripe.com/6oU4gAb24agme3g8qkfw41O'},
{id:3,name:'Kyle Steelguard Mesh — Camo/White',cat:'Jockstrap',price:29.90,img:'https://maskulo.de/cdn/shop/files/mjs186-y2-kyle-steelguard-mesh-jockstrap-camouflage-white-617190.webp?v=1754462607&width=1500',sizes:['S','M','L','XL','XXL'],pay:'https://buy.stripe.com/28EcN67PS0FM9N0eOIfw41P'},
{id:4,name:'Captain-A Brief — Royal Blue',cat:'Brief',price:34.90,img:'https://maskulo.de/cdn/shop/files/mbr141-y2-captain-a-briefs-with-o-inside-pouch-blue-royal-and-white-459666.webp?v=1754462807&width=1500',sizes:['S','M','L','XL'],pay:'https://buy.stripe.com/eVq14o9Y0dsy7ESbCwfw41Q'},
{id:5,name:'Ken Gridd-Iron — Black/White',cat:'Jockstrap',price:29.90,img:'https://maskulo.us/cdn/shop/files/mjs187-y1-ken-gridd-iron-american-football-jockstrap-black-white-926071.webp?v=1753175231&width=1200',sizes:['S-M','L-XL'],pay:'https://buy.stripe.com/4gM3cw3zC2NU9N04a4fw41R'},
{id:6,name:'Dash Cyclone — Red',cat:'Jockstrap',price:39.90,img:'https://maskulo.com/cdn/shop/files/mjs190-y1-dash-cyclone-jockstrap-with-removable-pouch-red-530504.webp?v=1754462606',sizes:['S-M','L-XL'],pay:'https://buy.stripe.com/6oU14ob24fAGcZc6icfw41S'},
{id:7,name:'Cork Cyclone — Royal Blue',cat:'Jockstrap',price:34.90,img:'https://maskulo.us/cdn/shop/files/mjs201-y1-cork-cyclone-jockstrap-with-removable-pouch-royal-blue-185602.webp?v=1753175316',sizes:['S-M','L-XL'],pay:'https://buy.stripe.com/dRm8wQgmo0FM3oCaysfw41T'},
{id:8,name:'Eugene Cyclone — White',cat:'Jockstrap',price:49.90,img:'https://maskulo.uk/cdn/shop/files/mjs189-y1-eugene-cyclone-jockstrap-with-removable-pouch-white-551286.webp?v=1764255579&width=1500',sizes:['S-M','L-XL'],pay:'https://buy.stripe.com/bJe7sMdacdsy8IWeOIfw41U'},
{id:9,name:'Maskulo Armored — Black',cat:'Brief',price:59.90,img:'https://maskulo.uk/cdn/shop/collections/mens-briefs-465285.png?v=1741557347',sizes:['S','M','L','XL'],pay:'https://buy.stripe.com/9B65kE2vyagm3oC4a4fw41V'},
{id:10,name:'Armored Collection Look',cat:'Clubwear',price:69.90,img:'https://maskulo.uk/cdn/shop/collections/armored-collection-983253.png?v=1741557184',sizes:['S','M','L','XL'],pay:'https://buy.stripe.com/aFa5kEgmo1JQ0cq6icfw41W'}
];
let cart=[];
const euro=n=>new Intl.NumberFormat('pt-PT',{style:'currency',currency:'EUR'}).format(n);
function render(){grid.innerHTML=products.map(p=>`<article class="card"><div class="pic"><img src="${p.img}" alt="${p.name}" loading="lazy"></div><div class="cardBody"><h3>${p.name}</h3><strong class="price">${euro(p.price)}</strong><div class="sizes">${p.sizes.map(s=>`<button type="button">${s}</button>`).join('')}</div><button class="add" onclick="add(${p.id})">ADICIONAR AO CARRINHO</button><button class="add" onclick="buy(${p.id})">COMPRAR AGORA · STRIPE</button></div></article>`).join('')}
function buy(id){const p=products.find(p=>p.id===id);if(p&&p.pay)window.location.href=p.pay}
function add(id){cart.push(products.find(p=>p.id===id));drawCart();openCart()}
function drawCart(){count.textContent=cart.length;cart.innerHTML=cart.length?cart.map((p,i)=>`<div class="cartItem"><span>${p.name}</span><span>${euro(p.price)} <button onclick="removeItem(${i})">×</button></span></div>`).join(''):'Seu carrinho está vazio.';total.textContent=euro(cart.reduce((s,p)=>s+p.price,0))}
function removeItem(i){cart.splice(i,1);drawCart()}
function openCart(){drawer.classList.add('open');shade.classList.add('open')}
function closeCart(){drawer.classList.remove('open');shade.classList.remove('open')}
cartBtn.onclick=openCart;close.onclick=shade.onclick=closeCart;
checkout.onclick=()=>{if(cart.length===1){buy(cart[0].id);return}alert(cart.length?'Para manter valores e tamanhos corretos, finalize cada produto pelo botão COMPRAR AGORA · STRIPE.':'Seu carrinho está vazio.')};
if(new URLSearchParams(location.search).get('payment')==='success')setTimeout(()=>alert('Pagamento concluído. Obrigado pela compra!'),200);
render();drawCart();