export default function markUpProductCardDesktop({ img, name, price, oldPrice }) {
  return `
                    <div class="products">
                    <img class="products__imageItem" src=${img} alt="${name}" width="300px">
                    <p class="products__mugName">${name}</p>
                    <p class="products__mugPrice ${
                      oldPrice && 'products__mugPrice__discount'
                    }">$ ${price} USD <span class="products__mug_price__old">${oldPrice}</span></p>
                </div>`;
}
