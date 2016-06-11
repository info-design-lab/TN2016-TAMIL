var w = 3700;
		var h = 605;
		
		var svg = d3.select("#area4")
				.append("svg")
				.attr("width", w)
				.attr("height", h);
		
		var div = d3.select("#area4").append("div")	
					.attr("class", "tooltip1")				
					.style("opacity", 0);
		
		var dataset_combined = [];
		d3.csv("csv/nota_pmk_tf_margin.csv", function(data) {

			data.forEach(function(d) {
				dataset_combined.push([+d['CONUM'], +d['LOG(MAR)']*100, d["WINPARTY"], d["TYPE1"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"], d["CONAME_TAMIL"], d["WINPARTY_TAMIL"]])
				dataset_combined.push([+d['CONUM'], +d['LOG(NOTA)']*100, d["WINPARTY"], d["TYPE1"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"], d["CONAME_TAMIL"], d["WINPARTY_TAMIL"]])
				dataset_combined.push([+d['CONUM']+1, +d['LOG(MAR)']*100, d["WINPARTY"], d["TYPE2"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"], d["CONAME_TAMIL"], d["WINPARTY_TAMIL"]])
				dataset_combined.push([+d['CONUM']+1, +d['LOG(PMK)']*100, d["WINPARTY"], d["TYPE2"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"], d["CONAME_TAMIL"], d["WINPARTY_TAMIL"]])
				dataset_combined.push([+d['CONUM']+2, +d['LOG(MAR)']*100, d["WINPARTY"], d["TYPE3"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"], d["CONAME_TAMIL"], d["WINPARTY_TAMIL"]])
				dataset_combined.push([+d['CONUM']+2, +d['LOG(3F)']*100, d["WINPARTY"], d["TYPE3"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"], d["CONAME_TAMIL"], d["WINPARTY_TAMIL"]])
			});
			
		var ds2 = [ [1,100], [695,100], [1,200], [695,200], [1,300], [695,300], [1,400], [695,400], [1,500], [695,500], [1,100], [1,500], [222,570], [232,570], [222,551], [232,551], [222,533], [232,533], [502,570], [512,570], [502,551], [512,551], [502,533], [512,533] ];
			
		var rect = svg.selectAll("rect")
                      .data(dataset_combined)
                      .enter()
		              .append("rect") 
		              .attr("x", function(d) {
									return d[9];		  
								}) 
					 .attr("y", 105)
					 .attr("width", 15)
					 .attr("height", 500)
					 .attr("fill", function (d) { 
										if (d[9]%2 == 0) {return "white";}
										else { return "rgb(248,248,248)";}
									})
			 
					.on("mouseover", function(d) {	
										d3.select(this).attr("width", 18).style("fill", "rgb(235,235,235)");
										div.transition().duration(200).style("opacity", 1);	
										var mouse=d3.mouse(d3.select(this).node());										
										div.html("<font size=3>" + "<b>" + d[10] + "</b>" + "</font>" + "<br/>" + d[11] + "<br/>" + "<br/>" + "வெற்றிப்பெற்றவரின் வாக்குகள்" + "&nbsp; " + "&nbsp; " + d[5] + "<br/>" + "நோட்டா" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " + d[6] + "<br/>" + "பா.ம.க"+ "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " + d[7] + "<br/>" + "மூன்றாம் அணி" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  " + d[8])	
										.style("left", (mouse[0] + 25) + "px")		
										.style("top", (mouse[1] - 28) + "px");	
									})					
					.on("mouseout", function(d) {	
										d3.select(this).attr("width", 15).style("fill", function (d) { 
																							if (d[9]%2 == 0) {return "white";}
																							else { return "rgb(248,248,248)";}
																						})
						div.transition().duration(500).style("opacity", 0);		
					});
	
	function drawGridLine(A) {
		
		var v1 = A[0].x;
		var v2 = A[0].y;
		var v3 = A[1].x;
		var v4 = A[1].y;
		
		var lineData = [{"x": v1, "y": v2}, {"x": v3, "y": v4}];

		var lineFunction = d3.svg.line()
                	.x(function (d) {
                    		return d.x*5 + 50;
                	})
                	.y(function (d) {
                    		return h - d.y;
                	})
                	.interpolate("linear");

					svg.append("path")
                	.attr("d", lineFunction(lineData))
                	.style("stroke-width", 0.7)
                	.style("stroke", function() {
					if (v2 == 338 || v2 == 570) { return "#ff7f00"; }	
					else if (v2 == 358 || v2 == 551) { return "#984ea3"; }
					else if (v2 == 397 || v2 == 533) { return "#377eb8"; }
					else if (v2 == 396) { return "black"; }
					else {return "rgb(232,232,232)";}
				;})
	}
	
	function drawLine(A,k) {
		
		var v1 = A[0].x;
		var v2 = A[0].y;
		var v3 = A[1].x;
		var v4 = A[1].y;
		var v5 = A[2].x;

		var lineData = [{"x": v1, "y": v2}, {"x": v3, "y": v4}];

		var lineFunction = d3.svg.line()
                	.x(function (d) {
                    		return d.x*5 + 50;
                	})
                	.y(function (d) {
                    		return h - d.y;
                	})
                	.interpolate("linear");

		svg.append("path")
                	.attr("d", lineFunction(lineData))
                	.style("stroke-width", 1.3)
			
					.style("stroke", function() {    
					
					if (v5 == "NOTA") {return "#ff7f00";}  
            		else if (v5 == "PMK") { return "#984ea3";} 
					else if ( v5 == "ThirdFront") { return "#377eb8";}   
        		;});
					

		}
		
	var circle = svg.selectAll("circle")
                 .data(dataset_combined)
                 .enter()
				 .append("circle")
 
	 	 .attr("cx", function(d) {
    			return d[0]*5 + 50;		  
		})
	    	 .attr("cy", function(d) {
    			return h - d[1];		  
		})
	    	.attr("r", function(d) {
				return 2.3;
    		  
		})
		.attr("fill", function(d) {
    			if ( d[2] == "DMK" || d[2] == "INC" || d[2] == "IUML") { return "red";}
			else { return "green";}		  
		})   
	    .attr("stroke-width", 1);
	
	var circ = svg.append("circle") 
		.attr("cx", 995)
	    .attr("cy", 40) 
	    .attr("r", 6)
	    .attr("fill", "green")
		
	var circ = svg.append("circle") 
		.attr("cx", 995)
	    .attr("cy", 63) 
	    .attr("r", 6)
	    .attr("fill", "red");
	
	var circ = svg.append("circle") 
		.attr("cx", 2400)
	    .attr("cy", 40) 
	    .attr("r", 6)
	    .attr("fill", "green")
		
	var circ = svg.append("circle") 
		.attr("cx", 2400)
	    .attr("cy", 63) 
	    .attr("r", 6)
	    .attr("fill", "red");
		
	var labs = [{val:"அ.இ.அ.தி.மு.க+",xpos:1010,ypos:40,col:"black",size:"11"},{val:"தி.மு.க+",xpos:1010,ypos:63,col:"black",size:"11"},{val:"அ.இ.அ.தி.மு.க+",xpos:2415,ypos:40,col:"black",size:"11"},{val:"தி.மு.க+",xpos:2415,ypos:63,col:"black",size:"11"},{val:"10",xpos:25,ypos:510,col:"black",size:"15"},{val:"100",xpos:18,ypos:410,col:"black",size:"15"},{val:"1000",xpos:13,ypos:310,col:"black",size:"15"},{val:"10000",xpos:7,ypos:210,col:"black",size:"15"},{val:"100000",xpos:1,ypos:110,col:"black",size:"15"},{val:"10",xpos:3530,ypos:510,col:"black",size:"15"},{val:"100",xpos:3530,ypos:410,col:"black",size:"15"},{val:"1000",xpos:3530,ypos:310,col:"black",size:"15"},{val:"10000",xpos:3530,ypos:210},{val:"100000",xpos:3530,ypos:110}, {val:"வாக்குகள்",xpos:0,ypos:260,col:"gray",size:"12"}, {val:"தொகுதிவாரியாக நோட்டா, பா.ம.க மற்றும் மூன்றாம் அணியின் வெற்றி வித்தியாசங்களின் ஒப்பீடு", xpos:54,ypos:27,col:"black",size:"18"}, {val:"இந்த விளக்கப்படத்தில் மேல் வரிசையில் ஒவ்வொரு தொகுதியிலும் வெற்றிப் பெற்றவர்களின் வாக்குகள் காட்டப்படுகிறது. ஒவ்வொரு ", xpos:54,ypos:50,col:"gray",size:"12"}, {val:"தொகுதியிலும் நோட்டா, பா.ம.க. மற்றும் மூன்றாம் அணி பெற்ற வாக்குகள் மூன்று புள்ளிகளால் குறிக்கப்படுகின்றன.  இந்த கோடுகளின் நீளம்", xpos:54,ypos:66,col:"gray",size:"12"}, {val:"வாக்கு வித்தியாசத்தின் அளவைக் காட்டுகிறது. வாக்குகளுடன் உள்ள Y அச்சு வாக்குகளின் ஒப்பீடை காட்டுகிறது. ", xpos:54,ypos:83,col:"gray",size:"12"},{val:"தொகுதிகளின் விவரங்களைக்", xpos:740,ypos:83,col:"#d92b2b",size:"12"},{val:"காண மவுஸ் கர்சரை நகர்த்திப் பார்க்கவும்.", xpos:54,ypos:98,col:"#d92b2b",size:"12"},{val:"நோட்டா",xpos:1220,ypos:40,col:"black",size:"15"},{val:"பா.ம.க",xpos:1220,ypos:58,col:"black",size:"11"},{val:"மூன்றாம் அணி",xpos:1220,ypos:75,col:"black",size:"11"},{val:"நோட்டா",xpos:2625,ypos:40,col:"black",size:"11"},{val:"பா.ம.க",xpos:2625,ypos:58,col:"black",size:"15"},{val:"மூன்றாம் அணி",xpos:2625,ypos:75,col:"black",size:"15"}];
	
	svg.selectAll("text")
		   .data(labs)
	   	   .enter()
		   .append("text")
		   .text(function(d){
				return d.val;
			})
		   .attr("y", function(d){
				return d.ypos;
			})
		   .attr("x", function(d){
				return d.xpos;
			})
		   .attr("font-size",function(d){
				return d.size;
			})
			.attr("fill",function(d){
				return d.col;
			})
		   .attr("font-family","Catamaran");
		   	
	for (var i=0; i<dataset_combined.length; i=i+2)
    	{
		var v1 = dataset_combined[i][0];
		var v2 = dataset_combined[i][1];
		var v3 = dataset_combined[i+1][0];
		var v4 = dataset_combined[i+1][1];
		var v5 = dataset_combined[i][3];

		drawLine([{"x": v1, "y": v2}, {"x": v3, "y": v4}, {"x": v5, "y": v5}], 1)
		}
		
	for (var i=0; i<dataset_combined.length; i=i+6)
    {	
		svg.append("text")
		   .text(dataset_combined[i][10])
		   .attr("x",-605)
   		   .attr("y", dataset_combined[i][0]*5 + 58)	
		   .attr("font-family","Catamaran")
   		   .attr("font-size", "10px")
   		   .attr("fill", "black")
		   .attr("transform", "rotate(-90)");
	}
	
	for (var i=0; i<ds2.length; i=i+2)
    	{
		var v1 = ds2[i][0];
		var v2 = ds2[i][1];
		var v3 = ds2[i+1][0];
		var v4 = ds2[i+1][1];

		drawGridLine([{"x": v1, "y": v2}, {"x": v3, "y": v4}])
	}
 
	});
	
