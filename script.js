// Placeholder links for products
const productLinks = [
	'https://affiliate-link1.com',
	'https://affiliate-link2.com',
	'https://affiliate-link3.com',
	'https://affiliate-link4.com',
	'https://affiliate-link5.com',
	'https://affiliate-link6.com',
	'https://affiliate-link7.com',
	'https://affiliate-link8.com',
	'https://affiliate-link9.com',
	'https://affiliate-link10.com'
];

// Attach links to product anchors
document.addEventListener('DOMContentLoaded', () => {
	const affiliateLinks = document.querySelectorAll('.affiliate-link');
	affiliateLinks.forEach((link, index) => {
		link.href = productLinks[index];
	});
});
