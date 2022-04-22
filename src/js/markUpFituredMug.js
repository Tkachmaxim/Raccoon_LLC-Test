import { dataFeatured } from './data';

export default function markUpFeaturedMugs({ img, name, price, oldPrice }) {
  return `<li class="popuar__mugs">
                <img class="productImage" src=${img} alt="${name}" width="370">
                <p class="mugName">${name}</p>
                <p class="mugPrice ${
                  oldPrice && 'mugPrice__discount'
                }">$ ${price} USD <span class='mug_price__old'>${oldPrice}
                </span></p> 
                </li> `;
}
