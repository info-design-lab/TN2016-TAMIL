
function loadall(){
        var tooltip = d3.select('.toolt1');

        var width =500,
            height = 550;
        

        var win;
        var cberror;
        d3.tsv("csv/finalwinners.tsv",function(error,data){
            cberror=error;
            win=data;
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
			"MADMK (DMK)":"எம்.ஜி.ஆர் அதிமுக (தி.மு.க)",
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
			"MADMK (AIADMK)":"எம்.ஜி.ஆர் அதிமுக (அ.இ.அ.தி.மு.க)",
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
			"":""
	};


        var svg = d3.select(".map").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "map");
        
        var scale2=d3.scale.linear()
                    .domain([0,69000])
                    .range(["#c3a7c7","#a57aaa","#874e8e"]);

        var scale3=d3.scale.linear()
                    .domain([0,69000])
                    .range([2,1]);
        //debugger;
        var margin_data;
        var cberror;
        d3.tsv("csv/margin2016.tsv",function(error,data){
                          cberror=error;
                          margin_data=data;
        //debugger;

        d3.json("csv/tngeo2.json", function(error,topology) {
        
                  var data=topology;
                  //debugger;
                  var center=d3.geo.centroid(topology)
                  var offset = [250,230];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                 // debugger;
                  svg.selectAll("path")
                           .data(topology.features)
                           .enter()
                           .append("path")
                           .attr("d", path)
                           //debugger;
        
                           .style("fill", function(d){return scale2((margin_data[+(d.properties.AC_NO)-1]).Margin);})
                           .style("opacity",function(d){ 
                            if(+margin_data[+(d.properties.AC_NO)-1].Margin<500)
                            {
                              return 1/scale3(+margin_data[+(d.properties.AC_NO)-1].Margin);
                            }
                            else
                              return 0.01;
                         })
                           .style("stroke","grey")
                           .on("mouseover",function(d){
                            //var op=this.style("opacity")
                           d3.select(this).style("stroke","orange");
                           //debugger;
						   var mouse=d3.mouse(d3.select(this).node());
                           tooltip.classed('hidden', false)
                                .attr('style', 'left:' + (mouse[0] + 150) +
                                        'px; top:' + (mouse[1] +40) + 'px')

                                .html("<b>"+tamil[d.properties.AC_NAME]+"</b>"+"\nவெற்றிப்பெற்றவரின் வாக்குகள்: "+margin_data[+(d.properties.AC_NO)-1].Margin+"\nவெற்றியாளர்: "+tamilwin[win[+(d.properties.AC_NO)][2016]]);
                           })
                           .on("mouseout", function(d) {

                            tooltip.classed('hidden', true);
                            d3.select(this).style("fill", function(d){return scale2(margin_data[+(d.properties.AC_NO)-1].Margin);})
                            .style("stroke","grey");
                            });
                          // .attr("transform", "translate(-400,200)");
            });
          
          });
      d3.json("csv/TNS2.json",function(error,topo){
          
                  //debugger;
                  var center=d3.geo.centroid(topo)
                  var offset = [250,230];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                  //debugger;
                  

                  svg.data(topo.features)
                                            
                                            .append("path")
                                            .attr("d",path)
                                            .style("stroke","black")
                                            .style("fill","none");
        });


      //debugger;
    
        //orientation:'horizontal',
         
     
      //debugger;
      



function opaque(){
            //debugger;

            paths=d3.select(".map").selectAll("path");
            
            var vals=this.get();

           
            paths.each(function(d,i){
             
              d3.select(this).style("opacity",function(d,i){
              //debugger;

              var index=d.properties.AC_NO
              // debugger;               
              //console.log(i);               
                if(margin_data[index-1].Margin<=+vals)
                  return 1/scale3(+margin_data[+(d.properties.AC_NO)-1].Margin);
                else
                  return 0.01;
                    });
          });
}

      var snapSlider = document.getElementById('range');

      noUiSlider.create(snapSlider, {
        start: [ 500],
        range: {
          'min': [  0 ],
          'max': [ 69000 ],

        },
		/*format:wNumb({'<span class="noUi-tooltip__label">'+'Victory Margins :'+'</span>'}),*/
		 tooltips:wNumb({decimals:0,
		 	prefix:'Margin:',
		 	
		 }),
		 
        //direction:'rtl',
        step:500,
        pips:{
          mode:"range",
          density:3,
		},

        
        });
        //debugger;
        var range = document.getElementById('range');
          //debugger;
        range.noUiSlider.on('slide',opaque);
        var rangeSliderValueElement = document.getElementById('value');

        snapSlider.noUiSlider.on('update', function( values, handle ) {
       // rangeSliderValueElement.innerHTML = "Victory Margin: "+Math.ceil(values[handle]);
		});   
        

}
