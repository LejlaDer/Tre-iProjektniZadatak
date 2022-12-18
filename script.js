let subtotal = 0;

const calculateTax = subtotal => {
  const tax = subtotal * 0.13;
  const formattedTax = tax.toFixed(2);
  return formattedTax;
};

const calculateTotal = subtotal => {
  const tax = calculateTax(subtotal);
  const total = parseFloat(subtotal) + parseFloat(tax);
  const formattedTotal = total.toFixed(2);
  return formattedTotal;
};

const getImgLink = title => {
  let imgLink;
  switch (title) {
    case 'Luminous Foundation':
      imgLink = 'https://images.beautybay.com/eoaaqxyywn6o/ANAS0454F_1.jpg_s3.lmb_dr59hi/ac52c9ba4ac17818d6d8ef1bcd0f723c/ANAS0454F_1.jpg?w=1000&fm=jpg&fl=progressive&q=70';
      break;
    case 'Florence By Mils':
      imgLink = 'https://images.beautybay.com/eoaaqxyywn6o/FLOR0017F_1.jpg_s3.lmb_u4kda8/8767f6b421e43885e2a1c0be103a7a39/FLOR0017F_1.jpg?w=1000&fm=jpg&fl=progressive&q=70';
      break;
      case 'Camo CC Cream':
        imgLink = 'https://images.beautybay.com/eoaaqxyywn6o/ELFC0132F_1.jpg_s3.lmb_00v307/af2c199ca425342178873410eacd944d/ELFC0132F_1.jpg?w=1000&fm=jpg&fl=progressive&q=70';
        break;
    case 'Glow Skin':
      imgLink = 'https://images.beautybay.com/eoaaqxyywn6o/REXX0309F_1.jpg_s3.lmb_5jxnfsi/eea6feec4e2935032c7665b3ea8c74af/REXX0309F_1.jpg?w=1000&fm=jpg&fl=progressive&q=70';
      break;
    case 'Power Play':
      imgLink = 'https://images.beautybay.com/eoaaqxyywn6o/COFX0355F_1.jpg_s3.lmb_jqnbmc/089100c316929fdc711383942bd5c576/COFX0355F_1.jpg?w=1000&fm=jpg&fl=progressive&q=70';
      break;
    default:
      imgLink = 'https://images.beautybay.com/eoaaqxyywn6o/COFX0355F_4.jpg_s3.lmb_r101hr/1b4da0c1921c535a713164f631323ba4/COFX0355F_4.jpg?w=1000&fm=jpg&fl=progressive&q=70';}

  return imgLink;
};

$('.add-button').on('click', function () {
  const title = $(this).data('title');
  const price = $(this).data('price');
  const imgLink = getImgLink(title);

  const element = `
    <li class="cart-item">
      <img src="${imgLink}" alt="${title}">
      <div class="cart-item-dets">
        <p class="cart-item-heading">${title}</p>
        <p class="g-price">$${price}</p>
        <input type="button" class="remove-item" value="remove" />
      </div>
    </li>
  `;

  $('.cart-items').append(element);

  subtotal = subtotal + price;

  const formattedSubtotal = subtotal.toFixed(2);
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal);

  $('.cart-math').html(`
    <p class="cart-math-item">
      <span class="cart-math-header">Subtotal:</span>
      <span class="g-price subtotal">$${formattedSubtotal}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Tax:</span>
      <span class="g-price tax">$${tax}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Total:</span>
      <span class="g-price total">$${total}</span>
    </p>
  `);
});


