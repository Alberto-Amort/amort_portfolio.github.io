
<head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather">
</head>

<main>
<header>
    <h1>Educazione Civica</h1>

</header>

<section>
<article>

    <slot/>
</article>

<nav>
    <ul>
        <li><a href="/Inglese">Inglese</a></li>
        <li><a href="/Mafia">Mafia</a></li>
        <li><a href="/Anni di Piombo">Gli anni di piombo</a></li>
        <li><a href="/Pene">Pene, Prigioni e Manicomi</a></li>
        <li><a href="/Emancipazione Femminile">Emancipazione femminile</a></li>
        <li><a href="/Informatica">Informatica</a></li>
        <li><a href="/Altro">Altro</a></li>


    </ul>
</nav>


</section>
</main>

<style>

    :global(section)
    {
        padding-top: 10px;
        padding-bottom: 30px;
    }

    main{
        
        box-sizing: border-box;
    }

    header{
        background: rgb(0, 0, 0, 0.5) url(https://mycity.s3.sbg.io.cloud.ovh.net/412356/Educazione_Civica.jpg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100% 100%;
        height: 200px;

        background-blend-mode: darken;

    }

    h1 {
		width: 100%;
		font-style: oblique;
		font-family: Merriweather;
		color: white;
		text-align:center;
        padding-top: 60px;

	}

    section{
        display:flex;
        flex-direction:row; 
        flex:10;
    }

    nav
    {
        background-color: rgb(109, 167, 167);
        flex: 1;

        color: white;
        font-weight: bolder;
        font-size: 20px;

    }

    nav ul{
        list-style: none;
    }


    article
    {
        flex: 8;
        display: flex;
        flex-direction: column;
    }

    li{
        padding-bottom: 10px;
    }

    



</style>