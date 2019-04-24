function escapeHtml(text) {
  return text
      .replace(/</g, "&lt;")
}

function generateHomepage() {
	let res = '<div class="kategorie"><div class="row"><div class="col-lg-12 center kategorie-nadpis"><h2>Kategorie</h2></div>';
	homepage.forEach((cat) => {
  	res += `<div class="col-lg-4 center">
      <div class="imgkat"><a title="${cat.title}" href="${cat.url}"><img class="image" src="${cat.image}" alt="${cat.title}" /> </a></div>
      <h3>${cat.title}</h3>
    </div>`;
  })
  
  return res + `</div></div><style><!--
.imgkat {
  }

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}
.imgkat:hover .image {
  opacity: 0.6;
}
-->

.kategorie h3  {
  margin-top: 10px;
margin-bottom: 20px;
}
--></style>`;
}

function generateCategory() {
	let res = '<div id="shopproducts" class="products products-page products-block">';
	category.forEach((cat) => {
  	res += `<div class="product col-xs-12 col-sm-6 col-md-4">
   <div class="inner">
      <div class="img"><a href="${cat.url}"> <img src="${cat.image}" alt="${cat.title}" data-src="${cat.image}" /></a></div>
      <div class="descr">
         <a class="name" href="${cat.url}">${cat.title}</a>
         <div class="prices row">
            <div class="col-xs-8 col-lg-12">
               <div class="price price-final"><strong>${cat.price}</strong></div>
            </div>
            <div class="tools-wrap col-xs-4 col-lg-12">
               <a class="product-link visible-lg-inline" href="${cat.url}"> </a>
               <div class="tools"><a class="btn col-lg-12 visible-lg-inline" title="${cat.title}" href="${cat.url}">Detail</a></div>
               <div class="availability visible-lg-inline-block col-lg-12">${cat.status}</div>
            </div>
         </div>
      </div>
   </div>
</div>`;
  })
  
  return res + `</div>
<!-- nad tento komentář vlož novou položku --></div>
<style><!--
#products {
      display: none;
      }
      
      #category-header {
      display: none;
      }
--></style>`;
}
