<script>
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather">
</head>



<section class=intro >
<div class=img> </div>

<div>

	<h2>Il Portfolio di Alberto Amort</h2>
	<p>Benvenuti nel mio Portfolio, in cui vi mostrerò i miei lavori di educazione civica</p>
</div>
</section>



<style>
	section {
		display: inline-flex;
		float: left;

		height: 500px;
		width: 100%;

		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding: 5px;
	}

	


	section > div
	{
		width: 100%;
		height: 100%;


	}

	.intro {
		background-image: url(https://images.liveuniversity.it/sites/2/2019/08/educazione-civica.jpeg);
		

	}

	.img{

		background-image: url(https://didatticainclusiva.loescher.it/image/1433_1.jpg);
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		
		
	}
</style>
