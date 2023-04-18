import Shopify from 'shopify-api-node';

const shopify = new Shopify({
  shopName: 'projectvivek',
  apiKey: '2a74f8b51a307872c1b4c222e12fb2d6',
  password: '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'
});

export default async function handler(req, res) {
  const products = await shopify.product.list();

  res.status(200).json(products);
}
