export default function markUpProductCardDesktop({ img, name, price, oldPrice }) {
  return `
                    <div class="">
                    <img class="productImageItem" src=${img} alt="${name}" width="300px">
                    <p class="mugName">${name}</p>
                    <p class="mugPrice ${
                      oldPrice && 'mugPrice__discount'
                    }">$ ${price} USD <span class="mug_price__old">${oldPrice}</span></p>
                </div>`;
}
