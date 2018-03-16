let out = '';
$('.save').on('click', () => {
	let tM = $('.tM').val();
	let zoom = $('.zoom').val();
	let colors = $('.colors').val();
	out+=`<p>Тип монітора: ${tM}</p>`;
	out+=`<p>Роздільна здатність: ${zoom}</p>`;
	out+=`<p>Кількість кольорів: ${colors}</p>`;
	$('.res').html(out);
	out = '';
});