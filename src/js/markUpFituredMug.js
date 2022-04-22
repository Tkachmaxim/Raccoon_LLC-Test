import { dataFeatured } from './data';

export default function markUpFeaturedMugs({ img, name, price, oldPrice }) {
  return `<li class="product__popuar__mugs">
                <img class="product__productImage" src=${img} alt="${name}" width="370">
                <p class="product__mugName">${name}</p>
                <p class="product__mugPrice ${
                  oldPrice && 'product__mugPrice__discount'
                }">$ ${price} USD <span class='product__mug_price__old'>${oldPrice}
                </span></p> 
                </li> `;
}
