	

	function press(but){
		//debugger;
		var lay=d3.select(but).attr("class");
		var layout="lay"+lay.substr(0,lay.indexOf(" "));
		//debugger;
		d3.selectAll(".btn1").classed("active",false);
		d3.select(but).classed("active",true);
		olay(layout);
	}

	function olay(layout){
		for(i=1;i<=4;i++){
			if(i==3) continue;
			var select_lay=d3.select(".lay"+i);
			var select_col=d3.select(".lay"+i).selectAll(".a");
			//debugger;
			select_col.selectAll("*").remove();
			//debugger;
			select_lay.classed("hidden",true);
		}
		var select_lay=d3.select("."+layout);
		select_lay.classed("hidden",false);
		//debugger;
		var select_col=select_lay.select(".row").selectAll(".a");
		//debugger;
		var num_of_layout=+layout.substr(layout.length-1);
		//debugger;
		select_col.each(function(d,i){
			display_options(this,num_of_layout);
		});
	}

	function display_options(column,num){
		//debugger;
		var tooltip=d3.select(column).append("div").attr("class","toolt").style("opacity",0);
		var menu=d3.select(column).append("div").append("select");
		//var colu=column;
		menu.attr("onchange","display(this);");
		menu.append("option").attr("value","").text("Choose year of election");
		menu.append("option").attr("value","2016").text("2016");
		menu.append("option").attr("value","2011").text("2011");
		menu.append("option").attr("value","2006").text("2006");
		menu.append("option").attr("value","2001").text("2001");
		menu.append("option").attr("value","1996").text("1996");
		menu.append("option").attr("value","1989").text("1989");
		menu.append("option").attr("value","1984").text("1984");
		menu.append("option").attr("value","1980").text("1980");
		if(num==1){
			num=num/.8;
		}
		var svg=d3.select(column).append("svg")
								.attr("width",1000/num)
								.attr("height",1000/num);
								//.style("margin","auto");
		//debugger;
								
								
		var borderPath = svg.append("rect")
				.attr("id","border")
       			.attr("x", 0)
       			.attr("y", 0)
       			.attr("height", 1000/num)
       			.attr("width", 1000/num)
       			.style("stroke", "grey")
       			.style("fill", "none")
       			.style("stroke-width", "1");
        //debugger;
		var set_year=+d3.select(column).attr("class")[3];
		set_year=2016-5*set_year;
		//debugger;
		//d3.select(column).select("select")
		d3.select(column).select("select").node().value=set_year;
		display(d3.select(column).select("select").node());
		//debugger;
		
}

	//var current_status=0;
	
	var win;
	var cberror;
	d3.tsv("csv/winners_all.tsv",function(error,data){
	    cberror=error;
	    win=data;
	});
    var margin_data;
    var cberror;
        d3.tsv("csv/margin2016.tsv",function(error,data){
                      cberror=error;
                      margin_data=data;
                  });
    var tamil={
			"Shozhinganallur":"சோழிங்கநல்லூர்",
			"Maduravoyal":"மதுரவாயல்",
			"Pallavaram":"பல்லாவரம்",
			"Ambattur":"அம்பத்தூர்",
			"Kavundampalayam":"கவுண்டம்பாளையம்",
			"Tambaram":"தாம்பரம்",
			"Avadi":"ஆவடி",
			"Krishnarayapuram (SC)":"கிருஷ்ணராயபுரம்",
			"Alandur":"ஆலந்தூர்",
			"Coimbatore (North)":"கோயம்பத்தூர் (வடக்கு)", 
			"Tiruchirapalli":"திருச்சிராப",
			"Madavaram":"மாதவரம்",
			"Velachery":"வேளச்சேரி",
			"Salem (South)":"சேலம் (தெற்கு)",
			"Srirangam":"ஸ்ரீரங்கம்",
			"Tiruchirappalli (West)":"திருச்சிராப்பள்ளி (மேற்கு)",
			"Anna Nagar":"அண்ணா நகர்",
			"Salem (North)":"சேலம் (வடக்கு)",
			"Palladam":"பல்லடம்",
			"Virugampakkam":"விருகம்பாக்கம்",
			"Kinathukadavu":"கிணத்துக்கடவு",
			"Namakkal":"நாமக்கல்",
			"Mylapore":"மைலாப்பூர்",
			"Singanallur":"சிங்கநல்லூர்",
			"Sulur":"சூலூர்",
			"Kancheepuram":"காஞ்சிபுரம்",
			"Thousand Lights":"ஆயிரம் விளக்கு",
			"Karur":"கரூர்",
			"Chengalpattu":"செங்கல்பட்டு",
			"Thiyagarayanagar":"தியாகராயநகர்",
			"Kolathur":"கொளத்தூர்",
			"Saidapet":"சைதாப்பேட்டை",
			"Avanashi (SC)":"அவினாசி (தனித்தொகுதி)",
			"Chepauk-Thiruvalliken":"சேப்பாக்கம்",
			"Madurai North":"மதுரை (வடக்கு)",
			"Tiruppur (North)":"திருப்பூர் (வடக்கு)",
			"Hosur":"ஓசூர்",
			"Villivakkam":"வில்லிவாக்கம்",
			"Mettuppalayam":"மேட்டுப்பாளையம்",
			"Erode (West)":"ஈரோடு (மேற்கு)",
			"Tenkasi":"தென்காசி",
			"Manapparai":"மணப்பாறை",
			"Coimbatore (South)":"கோயம்பத்தூர் (தெற்கு)",
			"Udumalaipettai":"உடுமலைப்பேட்டை",
			"Poonamallee (SC)":"பூந்தமல்லி",
			"Thondamuthur":"தொண்டாமுத்தூர்",
			"Madurai East":"மதுரை (கிழக்கு)",
			"Thoothukkudi":"தூத்துக்குடி",
			"Perambur":"பெரம்பூர்",
			"Kangayam":"காங்கேயம்",
			"Yercaud (ST)":"ஏற்காடு",
			"Thiruparankundram":"திருப்பரங்குன்றம்",
			"Salem (West)":"சேலம் (மேற்கு)",
			"Erode (East)":"ஈரோடு (கிழக்கு)",
			"Perambalur (SC)":"பெரம்பலூர்",
			"Kunnam":"குன்னம்",
			"Kallakurichi (SC)":"கள்ளக்குறிச்சி",
			"Kumarapalayam":"குமாரப்பாளையம்",
			"Bhavanisagar":"பவானிசாகர்",
			"Sriperumbudur (SC)":"திருப்பெரும்புதூர்",
			"Palayamkottai":"பாளையங்கோட்டை",
			"Sangakari":"சங்ககிரி",
			"Madurai South":"மதுரை (தெற்கு)",
			"Tiruvottiyur":"திருவொற்றியூர்",
			"Udhagamandalam":"உதகமண்டலம்",
			"Dharapuram (SC)":"தாராபுரம் (தனித்தொகுதி)",
			"Dr.Radhakrishnan Nagar":"ராதாகிருஷ்ணன் நகர்",
			"Egmore (SC)":"எழும்பூர்",
			"Virudhunagar":"விருதுநகர்",
			"Veerapandi":"வீரப்பாண்டி",
			"Rasipuram (SC)":"இராசிபுரம்",
			"Dindigul":"திண்டுக்கல்",
			"Vasudevanallur (SC)":"வாசுதேவநல்லூர்",
			"Madurai West":"மதுரை (மேற்கு)",
			"Gobichettipalayam":"கோபிசெட்டிப்பாளையம்",
			"Attur (SC)":"ஆத்தூர் (சேலம்)",
			"Bhavani":"பவானி",
			"Modakkurichi":"மொடக்குறிச்சி",
			"Sivakasi":"சிவகாசி",
			"Karaikudi":"காரைக்குடி",
			"Thiru-Vi-Ka-Nagar (SC)":"திரு.வி.க நகர்",
			"Madurai Central":"மதுரை (மத்தி)",
			"Thiruverumbur":"திருவெறும்பூர்",
			"Senthamangalam (ST)":"சேந்தமங்கலம்",
			"Ottapidaram (SC)":"ஒட்டப்பிடாரம்",
			"Kumbakonam":"கும்பக்கோணம்",
			"Aruppukkottai":"அரப்புக்கோட்டை",
			"Katpadi":"காட்பாடி",
			"Musiri":"முசிறி",
			"Thalli":"தளி",
			"Tiruppur (South)":"திருப்பூர் (தெற்கு)",
			"Thuraiyur (SC)":"துரையூர்",
			"Vandavasi (SC)":"வந்தவாசி",
			"Vellore":"வேலூர்",
			"Kovilpatti":"கோவில்பட்டி",
			"Royapuram":"ராயப்புரம்",
			"Gingee":"செஞ்சி",
			"Rajapalayam":"ராஜப்பாளையம்",
			"Ponneri (SC)":"பொன்னேரி",
			"Coonoor":"குன்னூர்",
			"Tiruchengodu":"திருச்செங்கோடு",
			"Periyakulam":"பெரியக்குளம்",
			"Manachanallur":"மண்ணச்சநல்லூர்",
			"Sankarankovil (SC)":"சங்கரன்கோவில்",
			"Vedasandur":"வேடச்சந்தூர்",
			"Vriddhachalam":"விருதாச்சலம்",
			"Pollachi":"பொள்ளாச்சி",
			"Dharmapuri":"தர்மபுரி",
			"Cheyyar":"செய்யாறு",
			"Gudiyattam (SC)":"குடியாத்தம்",
			"Cumbum":"கம்பம்",
			"Tirunelveli":"திருநெல்வேலி",
			"Valparai":"வால்பாறை",
			"Manamadurai (SC)":"மானாமதுரை",
			"Nannilam":"நன்னிலம்",
			"Thiruvarur":"திருவாரூர்",
			"Srivilliputhur (SC)":"திருவில்லிபுத்தூர்",
			"Madathukulam":"மடத்துக்குளம்",
			"Ranipet":"ராணிப்பேட்டை",
			"Thiruporur":"திருப்போரூர்",
			"Thirumayam":"திருமயம்",
			"Tindivanam (SC)":"திண்டிவனம்",
			"Tirukkoyilur":"திருக்கோயிலூர்",
			"Athoor":"ஆத்தூர் (திண்டுக்கல்)",
			"Harbour":"துறைமுகம்",
			"Harur (SC)":"அரூர் ",
			"Alangulam":"ஆலங்குளம்",
			"Pennagaram":"பெண்ணாகரம்",
			"Tiruttani":"திருத்தனி",
			"Cuddalore":"கடலூர்",
			"Arakkonam (SC)":"அரக்கோணம்",
			"Ambasamudram":"அம்பசமுத்திரம்",
			"Arcot":"ஆற்காடு",
			"Perundurai":"பெருந்துறை",
			"Kilvaithinankuppam (SC)":"கீழ்வைத்தனன் குப்பம்",
			"Panruti":"பண்ரூட்டி",
			"Thiruvaiyaru":"திருவைய்யாறு",
			"Kadayanallur":"கடையநல்லூர்",
			"Bodinayakanur":"போடிநாயக்கனூர்",
			"Tittakudi (SC)":"திட்டக்குடி (தனித்தொகுதி)",
			"Lalgudi":"லால்குடி",
			"Jayankondam":"ஜெயங்கொண்டம்",
			"Tiruppattur":"திருப்பத்தூர்",
			"Sholavandan":"சோழவந்தான்",
			"Edappadi":"எடப்பாடி",
			"Papanasam":"பாபநாசம்",
			"Andipatti":"ஆண்டிப்பட்டி",
			"Kulithalai":"குளித்தலை",
			"Thiruvidaimarudur":"திருவிடைமருதூர்",
			"Ariyalur":"அரியலூர்",
			"Orathanadu":"ஒரத்தநாடு",
			"Palacodu":"பாலக்கோடு",
			"Krishnagiri":"கிருஷ்ணகிரி",
			"Natham":"நத்தம்",
			"Mettur":"மேட்டூர்",
			"Cheyyur (SC)":"செய்யூர்",
			"Gudalur (SC)":"கூடலூர்",
			"Radhapuram":"ராதாபுரம்",
			"Nilakkottai":"நிலக்கோட்டை",
			"Tiruchendur":"திருச்செந்தூர்",
			"Tiruvannamalai":"திருவண்ணாமலை",
			"Nagercoil":"நாகர்கோவில்",
			"Vaniyambadi":"வாணியம்பாடி",
			"Mannargudi":"மண்ணார்குடி",
			"Thiruthuraipoondi (SC)":"திருத்துறைப்பூண்டி",
			"Gangavalli (SC)":"கங்கவள்ளி",
			"Arani":"ஆரணி",
			"Omalur":"ஓமலூர்",
			"Mailam":"மைலம்",
			"Uthangarai (SC)":"ஊத்தங்கரை",
			"Chidambaram":"சிதம்பரம்",
			"Neyveli":"நெய்வேலி",
			"Viluppuram":"விழுப்புரம்",
			"Sholingur":"சோளிங்கர்",
			"Mayiladuthurai":"மயிலாடுதுறை",
			"Usilampatti":"உசிலம்பட்டி",
			"Paramathi-Velur":"பரமத்தி-வேலூர்",
			"Uthiramerur":"உத்திரமேரூர்",
			"Pudukkottai":"புதுக்கோட்டை",
			"Ambur":"ஆம்பூர்",
			"Paramakudi (SC)":"பரமக்குடி",
			"Colachel":"குளச்சல்",
			"Vilathikulam":"விளாத்திகுளம்",
			"Thirumangalam":"திருமங்கலம்",
			"Kanniyakumari":"கன்னியாக்குமரி",
			"Gandharvakottai":"கந்தர்வகோட்டை",
			"Anthiyur":"அந்தியூர்",
			"Kurinjipadi":"குறிஞ்சிபாடி",
			"Pattukkottai":"பட்டுக்கோட்டை",
			"Sivaganga":"சிவகங்கை",
			"Ramanathapuram":"ராமநாதபுரம்",
			"Madurantakam (SC)":"மதுராந்தகம்",
			"Kalasapakkam":"கலசப்பாக்கம்",
			"Gummidipoondi":"கும்மிடிப்பூண்டி",
			"Jolarpet":"ஜோலார்பேட்டை",
			"Veppanahalli":"வேப்பனஹள்ளி",
			"Poompuhar":"பூம்புகார்",
			"Pappireddippatti":"பாப்பிரெட்டிப்பட்டி",
			"Palani":"பழனி",
			"Srivaikuntam":"ஸ்ரீவைகுண்டம்",
			"Sattur":"சாத்தூர்",
			"Vanur (SC)":"வானூர்",
			"Thiruvallur":"திருவள்ளூர்",
			"Chengam (SC)":"செங்கம்",
			"Nanguneri":"நாங்குநேரி",
			"Vikravandi":"விக்கிரவாண்டி",
			"Bargur":"பர்கூர்",
			"Sirkazhi (SC)":"சீர்காழி",
			"Padmanabhapuram":"பத்மனாபபுரம்",
			"Tiruchuli":"திருச்சுழி",
			"Peravurani":"பேராவூரணி",
			"Oddanchatram":"ஒட்டன்சாத்திரம்",
			"Anaikattu":"அணைக்கட்டு",
			"Polur":"போளூர்",
			"Vedaranyam":"வேதாரண்யம்",
			"Tirupattur":"திருப்பத்தூர் - (சிவகங்கை)",
			"Kilpennathur":"கீழ்பெண்ணாத்தூர்",
			"Vilavancode":"விளவங்கோடு",
			"Killiyoor":"கிள்ளியூர்",
			"Bhuvanagiri":"புவனகிரி",
			"Alangudi":"ஆலங்குடி",
			"Mudhukulathur":"முதுகுளத்தூர்",
			"Kilvelur (SC)":"கீழ்வேளூர்",
			"Sankarapuram":"சங்கராப்புரம்",
			"Kattumannarkoil (SC)":"காட்டுமன்னார்கோவில் (தனித்தொகுதி)",
			"Nagapattinam":"நாகப்பட்டினம்",
			"Viralimalai":"விராலிமலை",
			"Tiruvadanai":"திரவாடாணை",
			"Rishivandiyam":"ரிஷிவந்தியம்",
			"Ulundurpettai":"உளுந்தூர்பேட்டை",
			"Aranthangi":"அறந்தாங்கி",
			"Melur":"மேலூர்",
			"Aravakurichi":"அரவக்குறிச்சி",
			"Thanjavur":"தஞ்சாவூர்",
			        };
	var col={
			"DMK":"#e41a1c",
			"AIADMK":"#4daf4a",
			"MDMK":"#de77ae",
			"PMK" :"#984ea3",
			"DMDK":"#a6cee3",
			"BJP": "#ff7f00",
			"JNP": "#a6761d",
			"CPM": "black",
			"ADK(JL)":"#a6d854",
			"ADK(JR)":"#fdbf6f",
			"INC": "#8dd3c7",
			"JNP": "yellow",
			"DMDK":"#66c2a5",
			"INC (DMK)":"#e41a1c",
			"TMC (DMK)":  "#e41a1c",
			"CPM (DMK)":  "#e41a1c",   
			"BJP (DMK)":  "#e41a1c",
			"PMK (DMK)":  "#e41a1c",
			"CPI (DMK)":  "#e41a1c",
			"JNP (DMK)":  "#e41a1c",
			"MADMK (DMK)":"#e41a1c",
			"MDMK (DMK)":"#e41a1c",
			"FBL (DMK)":  "#e41a1c",
			"IUML (DMK)": "#e41a1c",
			"INC (AIADMK)":"#e41a1c",
			"TMC (AIADMK)":  "#4daf4a",
			"CPM (AIADMK)":  "#4daf4a", 
			"AIFB (AIADMK)":"#4daf4a",  
			"BJP (AIADMK)":  "#4daf4a",
			"PMK (AIADMK)":  "#4daf4a",
			"CPI (AIADMK)":  "#4daf4a",
			"JNP (AIADMK)":  "#4daf4a",
			"MADMK (AIADMK)":"#4daf4a",
			"MDMK (AIADMK)":"#4daf4a",
			"FBL (AIADMK)":  "#4daf4a",
			"IUML (AIADMK)": "#4daf4a",
			"DMDK (AIADMK)": "#4daf4a",
			"GKC (AIADMK)":  "#4daf4a",
			"MAMAK (AIADMK)":"#4daf4a",
			"PT (AIADMK)":   "#4daf4a",
			"VCK (AIADMK)":  "#4daf4a",
			"ICS (AIADMK)":  "#4daf4a",
			"CPI (ADK(JL))":  "#a6d854",
			"JD (MDMK)":"#de77ae",
			"CPM (MDMK)":"#de77ae",
			"AIFB":"#fdbb84",
			"IND":"white",
			"":"grey"
	};
	var tamilwin={
			"DMK":"தி.மு.க",
			"AIADMK":"அ.இ.அ.தி.மு.க",
			"MDMK":"மறுமலர்ச்சி திராவிட முன்னேற்ற கழகம்",
			"PMK" :"பா.ம.க",
			"DMDK":"தேமுதிக",
			"BJP": "பாஜக",
			"JNP": "ஜனதா கட்சி",
			"CPM": "சிபிஎம்",
			"ADK(JL)":"அதிமுக (ஜெ)",
			"ADK(JR)":"அதிமுக (ஜா)",
			"INC": "இ.தே.க",
			"JNP": "ஜனதா கட்சி",
			"INC (DMK)":"இ.தே.க (தி.மு.க)",
			"TMC (DMK)":  "தமாக (தி.மு.க)",
			"CPM (DMK)":  "சிபிஎம் (தி.மு.க)",   
			"BJP (DMK)":  "பாஜக (தி.மு.க)",
			"PMK (DMK)":  "பா.ம.க (தி.மு.க)",
			"CPI (DMK)":  "சிபிஐ (தி.மு.க)",
			"JNP (DMK)":  "ஜனதா கட்சி (தி.மு.க)",
			"MADMK (DMK)":"",
			"MDMK (DMK)":"மறுமலர்ச்சி திராவிட முன்னேற்ற கழகம் (தி.மு.க)",
			"FBL (DMK)":  "அகில இந்திய ஃபார்வார்டு ப்ளாக் (தி.மு.க)",
			"IUML (DMK)": "இ.ஒ.மு.லீ (தி.மு.க)",
			"INC (AIADMK)":"இ.தே.க (அ.இ.அ.தி.மு.க)",
			"TMC (AIADMK)":  "தமாக (அ.இ.அ.தி.மு.க)",
			"CPM (AIADMK)":  "சிபிஎம் (அ.இ.அ.தி.மு.க)", 
			"AIFB (AIADMK)":"அகில இந்திய ஃபார்வார்டு ப்ளாக் (அ.இ.அ.தி.மு.க)",  
			"BJP (AIADMK)":  "பாஜக (அ.இ.அ.தி.மு.க)",
			"PMK (AIADMK)":  "பா.ம.க (அ.இ.அ.தி.மு.க)",
			"CPI (AIADMK)":  "சிபிஐ (அ.இ.அ.தி.மு.க)",
			"JNP (AIADMK)":  "ஜனதா கட்சி (அ.இ.அ.தி.மு.க)",
			"MADMK (AIADMK)":"",
			"MDMK (AIADMK)":"மறுமலர்ச்சி திராவிட முன்னேற்ற கழகம் (அ.இ.அ.தி.மு.க)",
			"FBL (AIADMK)":  "ஃபார்வார்டு ப்ளாக் (அ.இ.அ.தி.மு.க)",
			"IUML (AIADMK)": "இ.ஒ.மு.லீ (அ.இ.அ.தி.மு.க)",
			"DMDK (AIADMK)": "தேமுதிக (அ.இ.அ.தி.மு.க)",
			"GKC (AIADMK)":  "காந்தி காமராஜ் காங்கிரஸ் கட்சி (அ.இ.அ.தி.மு.க)",
			"MAMAK (AIADMK)":"மனிதநேய மக்கள் கட்சி (அ.இ.அ.தி.மு.க)",
			"PT (AIADMK)":   "புதிய தமிழகம் (அ.இ.அ.தி.மு.க)",
			"VCK (AIADMK)":  "விடுதலை சிறுத்தைகள் கட்சி (அ.இ.அ.தி.மு.க)",
			"ICS (AIADMK)":  "இந்திய காங்கிரஸ் (சோஷியலிஸ்ட்)(அ.இ.அ.தி.மு.க)",
			"CPI (ADK(JL))":  "சிபிஐ(அதிமுக (ஜெ))",
			"JD (MDMK)":"ஜனதா தளம் (மறுமலர்ச்சி திராவிட முன்னேற்ற கழகம்)",
			"CPM (MDMK)":"சிபிஎம் (மறுமலர்ச்சி திராவிட முன்னேற்ற கழகம்)",
			"AIFB":"அகில இந்திய ஃபார்வார்டு ப்ளாக்",
			"IND":"சுயேச்சை",
			"":"grey"
	}

	function display(year){
		//debugger;
		var name_of_button=d3.select(".active").attr("class");
		name_of_button=name_of_button.substr(0,1);
		var factor=+name_of_button;
		if(factor==1){
			factor=factor/.8
		}
		//debugger;
		var curr=year.value.toString();
		//debugger;
		var colu=d3.select(year.parentNode.parentNode);
		//debugger;
		var svg=colu.select("svg");
		pathselect=svg.selectAll("path");
		//svg.selectAll("path").remove();
		//debugger;
		if(pathselect.empty())
		{
		d3.json("csv/tngeo2.json", function(error,topology) {
			var height=920/factor;
			var width=1000/factor;
			var data=topology;
			var center=d3.geo.centroid(topology)
            var offset = [width/2, height/2];
            //debugger;
            var projection = d3.geo.mercator()
                      .center(center)
                      .scale(10000/factor).translate(offset);    
            var path = d3.geo.path()
                      .projection(projection);
            svg.selectAll("path")
            	.data(topology.features)
            	.enter()
            	.append("path")
            	.attr("d",path)
            	.attr("class",function(d){return "a"+d.properties.AC_NO+" "+(d.properties.AC_NAME)+" "+curr;})
            	.style("fill",function(d){return col[win[+(d.properties.AC_NO)][curr]];})
                .style("stroke","black")
                .style("stroke-width","1")
                //.on("click", function(d){
                //	current_status=1;
                //	toolin(this);
            	//	})
                .on("mouseover", function(d){
               			toolin(this,factor);
            		})
                .on("mouseout", function(d){
                		toolout(this);
                });
            });
        
    }
        else
        {
        	pathselect.each(function(){
        			d3.select(this).attr("class",function(d){return "a"+d.properties.AC_NO+" "+(d.properties.AC_NAME)+" "+curr;});
            		d3.select(this).transition().style("fill",function(d){return col[win[+(d.properties.AC_NO)][curr]];});
            		d3.select(this)
            			//.on("click", function(d){
            			//current_status=1;
               			//toolin(this);
               			////debugger;
               			//
            			//})
                		//.on("dblclick", function(d){
                		//toolout(this);
                		//current_status=0;
                		//})
                		.on("mouseover", function(d){
               			toolin(this,factor);
            			})
                		.on("mouseout", function(d){
                		toolout(this);
                	});
            	});
             
    }
}

	function toolin(path,factor){
		//debugger;
		var consti=d3.select(path).attr("class");
		var consti_number=consti.substr(0,consti.indexOf(" "));
		//debugger;
		d3.selectAll("."+consti_number).each(function(d){d3.select(this).style("stroke","orange").style("stroke-width","4")});
		//debugger;
		var mouse=d3.mouse(d3.select(path.parentNode).node());
		//debugger;
		d3.selectAll("."+consti_number).each(function(d){
			var year1=d3.select(this).attr("class");
			year1=year1.substr(year1.length-4);
			//debugger;
			var s=(this.parentNode).parentNode;
			var tool=d3.select(s).select(".toolt");
			if(factor!=1/0.8){
			if(year1!="2016"){

				//tool.attr("style","opacity:"+1);
					 tool.attr("style","opacity:"+1+";left:" + (mouse[0] +5+5*factor) +
					       'px; top:' + (mouse[1] - 40) + 'px');
				tool.append("span").style("font-size","18px").style("font-weight","bold").style("text-align","left").text(tamil[d.properties.AC_NAME]+"\n");
				tool.append("span").style("font-size","16px").style("text-align","left").text(tamilwin[win[+(d.properties.AC_NO)][+year1]])+"\n";
					                   
					                	}
				
			else{
				//debugger;
				//tool.attr("style","opacity:"+1);
					tool.attr("style","opacity:"+1+";left:" + (mouse[0] +5+5*factor) +
					       'px; top:' + (mouse[1] - 40) + 'px');
					tool.append("span").style("font-size","18px").style("font-weight","bold").style("text-align","left").text(tamil[d.properties.AC_NAME]+"\n");
					tool.append("span").style("font-size","16px").style("text-align","left").text(tamilwin[win[+(d.properties.AC_NO)][+year1]]+"\n");
					tool.append("span").style("font-size","14px").style("text-align","left").text("வெற்றிப்பெற்றவரின் வாக்குகள்: "+margin_data[+(d.properties.AC_NO)-1].Margin+"\n");
					                   
					                	}
			}
			else{
				if(year1!="2016"){

				//tool.attr("style","opacity:"+1);
					 tool.attr("style","opacity:"+1+";left:" + (mouse[0] + 330) +
					       'px; top:' + (mouse[1] - 80) + 'px');
				tool.append("span").style("font-size","18px").style("font-weight","bold").style("text-align","left").text(tamil[d.properties.AC_NAME]+"\n");
				tool.append("span").style("font-size","16px").style("text-align","left").text(tamilwin[win[+(d.properties.AC_NO)][+year1]])+"\n";
					                   
					                	}
				
			else{
				//debugger;
				//tool.attr("style","opacity:"+1);
					tool.attr("style","opacity:"+1+";left:" + (mouse[0] + 330) +
					       'px; top:' + (mouse[1] - 80) + 'px');
					tool.append("span").style("font-size","18px").style("font-weight","bold").style("text-align","left").text(tamil[d.properties.AC_NAME]+"\n");
					tool.append("span").style("font-size","16px").style("text-align","left").text(tamilwin[win[+(d.properties.AC_NO)][+year1]]+"\n");
					tool.append("span").style("font-size","14px").style("text-align","left").text("வெற்றிப்பெற்றவரின் வாக்குகள்: "+margin_data[+(d.properties.AC_NO)-1].Margin+"\n");
					                   
					                	}
				
			}
					                });
	//debugger;
				}
			
		


	

	function toolout(path){
		//this is to prevent text selection due to double click
		if(document.selection && document.selection.empty) {
        document.selection.empty();
    		}
    	 else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    	}
		var consti=d3.select(path).attr("class");
		//debugger;
		var consti_number=consti.substr(0,consti.indexOf(" "));
		//var consti_year=consti.substr(consti.length -4 );
		//debugger;
		d3.selectAll("."+consti_number).each(function(d){
				//debugger;
		//if(current_status!=1)
		//{
		//d3.select(this).style("fill",function(d){
								//debugger;
					//var consti_number2=consti_number.substr(1);
					//var consti_year=d3.select(this).attr("class");
					//consti_year=consti_year.substr(consti_year.length-4);
					//debugger;
					//return col[win[+(consti_number2)][+consti_year]];
				
				//})
			//}
		d3.select(this).style("stroke","black").style("stroke-width","1");
		});
		d3.selectAll(".toolt").each(function(d){
			//debugger;
			d3.select(this).attr("style","opacity:"+0);
			d3.select(this).selectAll("*").remove();
			//debugger;
			
			
	});
	}


