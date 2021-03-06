module.exports = {
	Name: "stachursky",
	Aliases: ["FeelsStachurskyMan"],
	Author: "supinic",
	Cooldown: 10000,
	Description: "Posts a random excerpt from a Stachursky song.",
	Flags: ["mention","pipe"],
	Params: null,
	Whitelist_Response: null,
	Static_Data: (() => ({
		quotes: [
			"W ogóle, centralnie, kamieniem go bez kitu.",
			"Jestem sobie pravdą, fałszem i zagadką teź.",
			"Jestem sobie ojcem, sobie matką, sobie bratem.",
			"Szatanem jestem złym, aniołem z aureolą.",
			"A ja tak bardzo bym dziś chciał, tak bardzo bym chciał, unieść się z Tobą do nieba bram.",
			"A ja tak bardzo bym dziś chciał, tak bardzo bym chciał, zdobyć kolejny w życiu szczyt.",
			"Wiem, nie jestem człowiekiem, bo on coś czuje gdy żyje.",
			"I wiem, nie jestem robotem, bo on nie czuje a żyje.",
			"Widzę, czuję, badam, doską mocą władam, nic mi nie zagraża - to totalna władza.",
			"I choć nie jestem panem świata, końcem lub początkiem, Alfą i Omegą, bracia dobrze wiedzą, że wiem...",
			"Znam wszystkie wartości, orgon we mnie gości, liczba ma znaczenie, świata przeznaczenie.",
			"Mam i czuję brzemię, jestem i odmienię, system starych kości, w bractwo wszechmiłości, bo wiem - ja to wiem...",
			"Ten świat, to moje pragnienie, to moje spełnienie, to mój raj.",
			"Czy to czujesz? Czy ogarniasz ten stan?",
			"Nie będę brał cię w aucie więcej, to nie mój poziom i styl.",
			"Jestem Disco Fighter, a parkiet obroną mą.",
			"Jam jest Funky Rider, i lepiej pogódź się z tym.",
			"Dobrze wiesz, wiesz jak jest, niezły ze mnie zwierz, Supersonic w mojej głowie onieśmiela cię.",
			"Dobrze wiesz, rób co chcesz, jeśli ma to sens, dopóki wciąż twój bije dzwon.",
			"Urantia jest teraz moim życiem i przeznaczeniem.",
			"Urantia jest teraz moim domem i moim światem.",
			"W niedzielę nic nie czuję, mózg nie funkcjonuje, z czasem można się oswoić.",
			"W poniedziałek z rana, Sahara mnie dogania, i wszystko ze mną może zrobić.",
			"Wtorek to głodomór, nie życzę nikomu, może lepiej się czymś dobić.",
			"W środę czas na kunę, a ta osaczyć umie, i nie wiem wtedy co naprawdę robić mam.",
			"W czwartek królem Einstein, palnik czas na warsztat, niech się trochę podrasuje.",
			"Poddźwignięcie w piątek, imprezy początek, mój awatar lewituje.",
			"W sobotę szlif i faza, gotowość mą wyrażą.",
			"Wixa, Korba, Wixa, Korba.",
			"Ogólnie, podwójnie, z wyskoku, z obrotem.",
			"Powoli, spokojnie, na luzie, jak goście, jak bracia, elegancko, jak pany, wyniośle.",
			"Nie ma i nie będzie zmiłowania wszędzie, pozbieramy kości, bo spokój będzie gościł!",
			"Czas już się zatrzymał i teraz tak już będzie, więc bracia kochani, unieście w górę ręce!",
			"Jeszcze tylko chwila, jeszcze tylko moment, jeszcze tylko sygnał, jak z armaty wystrzał.",
			"Jeszcze jedna zimna lufa dla wszystkich!",
			"I w noc, I w dzień, przez całe życie muzyką jaram się, jak ty. Przez całe życie muzyka we mnie tkwi.",
			"Nadszedł moment i nadszedł dzień, mój piękny sen dziś spełnia się. Dla takich chwil właśnie warto żyć, tego czołgu nie zatrzyma już nic.",
			"Mocniej - niech się stanie.",
			"Głośniej - niech nam będzie.",
			"Grubo - niech nam będzie.",
			"Tłusto - zawsze i wszędzie.",
			"Szukając celu uciekam znów przed sobą.",
			"Jak morskie fale uderzam w urwisty brzeg.",
			"A co jeśli świat, to hologram nasz?",
			"A każda chwila, to jak spojrzenie w twarz?",
			"Do ostatnich naszych dni, ostatniej kropli krwi.",
			"Moje serce bije wciąż dla Ciebie do ostatnich naszych dni, ostatniej kropli krwi, ostatnich naszych chwil.",
			"Kiedy pojawiasz sie razisz w oczy, i zadna lala ci nie podskoczy.",
			"Ty tutaj rządzisz, rozdajesz karty, wpadłas mi w oko, to nie są żarty...",
			"Ty jestes gwiazda, z tobą jest jazda, chciałbym cie porwac do swego gniazda.",
			"Dla ciebie kawior, szampan, truskawki?",
			"I jakie tylko zechcesz zabawki?",
			"Nie jeden twardy wymiękł przy tobie, lecz ja napewno dam radę sobie.",
			"Kurwa, jazda, amok, chłosta, dopał, rwanie, faza i zgon!"
		]
	})),
	Code: (async function stachursky () {
		return {
			reply: sb.Utils.randArray(this.staticData.quotes)
		};
	}),
	Dynamic_Description: null
};
