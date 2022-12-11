/* Javascripting */

/*

Total Countries:
73

*/



//Currently selected country
var chosenCountry;
//Whether or not the color scheme should be based off of import shipments
var schemeShipments = false;
//Whether or not the user can zoom in on the map. By default they can't.
var canZoom  = false;

    
    //Changes a given product's name to the spice's name.
    function changeProdName(product){
    if((product.toUpperCase()).includes(("GARAM MASALA").toUpperCase())){return "Garam Masala"}
    if((product.toUpperCase()).includes(("Nutmeg").toUpperCase())){return "Nutmeg Powder"}
    if((product.toUpperCase()).includes(("Netmeg").toUpperCase())){return "Nutmeg Powder"}
    if((product.toUpperCase()).includes(("BAY LEAVES").toUpperCase())){return "Bay Leaves"}
    if((product.toUpperCase()).includes(("Curry Leaf").toUpperCase())){return "Bay Leaves"}
    if((product.toUpperCase()).includes(("Cinnamon Powder").toUpperCase())){return "Cinnamon Powder"}
    if((product.toUpperCase()).includes(("Cinamon").toUpperCase())){return "Cinnamon Powder"}
    if((product.toUpperCase()).includes(("Cinnnamon Ground").toUpperCase())){return "Cinnamon Powder"} 
    if((product.toUpperCase()).includes(("Dalchini Powder").toUpperCase())){return "Cinnamon Powder"}
    if((product.toUpperCase()).includes(("Fennel Powder").toUpperCase())){return "Fennel Powder"}
    if((product.toUpperCase()).includes(("Fennel Seeds").toUpperCase())){return "Fennel Powder"}
    if((product.toUpperCase()).includes(("Feenal Seeds").toUpperCase())){return "Fennel Powder"}
    if((product.toUpperCase()).includes(("Saunf").toUpperCase())){return "Fennel Powder"}
    if((product.toUpperCase()).includes(("Pepper Powder").toUpperCase())){return "Pepper Powder"} 
    if((product.toUpperCase()).includes(("Papper Powder").toUpperCase())){return "Pepper Powder"}
    if((product.toUpperCase()).includes(("Coriander").toUpperCase())){return "Coriander Powder"}
    if((product.toUpperCase()).includes(("Corainder").toUpperCase())){return "Coriander Powder"} 
    if((product.toUpperCase()).includes(("Dhania Powder").toUpperCase())){return "Coriander Powder"} 
    if((product.toUpperCase()).includes(("Dhaniya").toUpperCase())){return "Coriander Powder"}
    if((product.toUpperCase()).includes(("Fenugreek Powder").toUpperCase())){return "Fenugreek Powder"}
    if((product.toUpperCase()).includes(("Methi").toUpperCase())){return "Fenugreek Powder"}
    if((product.toUpperCase()).includes(("KASURI METHI").toUpperCase())){return "Fenugreek Powder"}
    if((product.toUpperCase()).includes(("Panchpuran").toUpperCase())){return "Panchpuran"}
    if((product.toUpperCase()).includes(("Biryani").toUpperCase())){return "Biryani Spice"} 
    if((product.toUpperCase()).includes(("Biriyani").toUpperCase())){return "Biryani Spice"} 
    if((product.toUpperCase()).includes(("Rasam Powder").toUpperCase())){return "Rasam Powder"}
    if((product.toUpperCase()).includes(("Chutney Powder").toUpperCase())){return "Chutney Powder"}
    if((product.toUpperCase()).includes(("Vangibath Powder").toUpperCase())){return "Vangibath Powder"}
    if((product.toUpperCase()).includes(("Puliyogare Powder").toUpperCase())){return "Puliyogare Powder"}
    if((product.toUpperCase()).includes(("Sambar Powder").toUpperCase())){return "Sambar Powder"}
    if((product.toUpperCase()).includes(("Sambhar Powder").toUpperCase())){return "Sambar Powder"}  
    if((product.toUpperCase()).includes(("Chai").toUpperCase())){return "Chai Spices"}
    if((product.toUpperCase()).includes(("Cumin Powder").toUpperCase())){return "Cumin Powder"}
    if((product.toUpperCase()).includes(("JEERA POWDERX500GMS").toUpperCase())){return "Cumin Powder"}
    if((product.toUpperCase()).includes(("Jeera").toUpperCase())){return "Cumin Powder"}
    if((product.toUpperCase()).includes(("JERAGOTA").toUpperCase())){return "Cumin Powder"}
    if((product.toUpperCase()).includes(("Pepper Powder").toUpperCase())){return "Pepper Powder"}
    if((product.toUpperCase()).includes(("Poppy Seed").toUpperCase())){return "Poppy Seed"}
    if((product.toUpperCase()).includes(("Kabsa Spice").toUpperCase())){return "Kabsa Spice"}
    if((product.toUpperCase()).includes(("Kabse Spices").toUpperCase())){return "Kabsa Spice"}
    if((product.toUpperCase()).includes(("Madras Curry Powder").toUpperCase())){return "Madras Curry Powder"}
    if((product.toUpperCase()).includes(("Chana Masala Powder").toUpperCase())){return "Chana Masala Powder"}
    if((product.toUpperCase()).includes(("Chole Masala").toUpperCase())){return "Chana Masala Powder"} 
    if((product.toUpperCase()).includes(("Meat Masala").toUpperCase())){return "Meat Masala"}
    if((product.toUpperCase()).includes(("Mutton Masala Powder").toUpperCase())){return "Meat Masala"}
    if((product.toUpperCase()).includes(("Meat Masala Powder").toUpperCase())){return "Meat Masala"}
    if((product.toUpperCase()).includes(("Turmeric").toUpperCase())){return "Turmeric Powder"}
    if((product.toUpperCase()).includes(("Termeric").toUpperCase())){return "Turmeric Powder"}
    if((product.toUpperCase()).includes(("Curcuma").toUpperCase())){return "Turmeric Powder"}
    if((product.toUpperCase()).includes(("Haldi").toUpperCase())){return "Turmeric Powder"}
    if((product.toUpperCase()).includes(("Chilli Powder").toUpperCase())){return "Chilli Powder"} 
    if((product.toUpperCase()).includes(("Chilly Powder").toUpperCase())){return "Chilli Powder"}
    if((product.toUpperCase()).includes(("Chillie Powder").toUpperCase())){return "Chilli Powder"}
    if((product.toUpperCase()).includes(("Chillie Powder").toUpperCase())){return "Chilli Powder"}
    if((product.toUpperCase()).includes(("Chili Spice").toUpperCase())){return "Chilli Powder"}
    if((product.toUpperCase()).includes(("CHILLIES(GENUS CAPSICUM)(SPICES)(API )").toUpperCase())){return "Chilli Powder"} 
    if((product.toUpperCase()).includes(("Kashmiri Mirch").toUpperCase())){return "Chilli Powder"}
    if((product.toUpperCase()).includes(("Capsicum").toUpperCase())){return "Chilli Powder"}
    if((product.toUpperCase()).includes(("Tikhalal Powder").toUpperCase())){return "Chilli Powder"}
    if((product.toUpperCase()).includes(("Pickle Masala").toUpperCase())){return "Pickle Masala"}
    if((product.toUpperCase()).includes(("Pickle Powder").toUpperCase())){return "Pickle Masala"}
    if((product.toUpperCase()).includes(("Garlic Paste").toUpperCase())){return "Garlic Paste"}
    if((product.toUpperCase()).includes(("Vata Spice Mix").toUpperCase())){return "Vata Spice Mix"} 
    if((product.toUpperCase()).includes(("Chaat Masala").toUpperCase())){return "Chaat Masala"}
    if((product.toUpperCase()).includes(("Chat Masala").toUpperCase())){return "Chaat Masala"}
    if((product.toUpperCase()).includes(("Mixed Herbs").toUpperCase())){return "Mixed Herbs"}
    if((product.toUpperCase()).includes(("Karam").toUpperCase())){return "Karam Powder"} 
    if((product.toUpperCase()).includes(("Kabab Masala").toUpperCase())){return "Kabab Masala"}
    if((product.toUpperCase()).includes(("Pumpkin Spice").toUpperCase())){return "Kaddu"}
    if((product.toUpperCase()).includes(("Ginger Powder").toUpperCase())){return "Ginger Powder"}
    if((product.toUpperCase()).includes(("Ginger Spice").toUpperCase())){return "Ginger Powder"} 
    if((product.toUpperCase()).includes(("Freshkencur").toUpperCase())){return "Ginger Powder"}
    if((product.toUpperCase()).includes(("Kencur").toUpperCase())){return "Ginger Powder"}
    if((product.toUpperCase()).includes(("Cardamom").toUpperCase())){return "Cardamom"} 
    if((product.toUpperCase()).includes(("Cardmom").toUpperCase())){return "Cardamom"} 
    if((product.toUpperCase()).includes(("Gautemala").toUpperCase())){return "Cardamom"}
    if((product.toUpperCase()).includes(("Elaichi").toUpperCase())){return "Cardamom"} 
    if((product.toUpperCase()).includes(("Ilachi").toUpperCase())){return "Cardamom"}
    if((product.toUpperCase()).includes(("Bhaji Masala").toUpperCase())){return "Bhaji Masala"}
    if((product.toUpperCase()).includes(("Sabji Masala").toUpperCase())){return "Sabji Masala"}
    if((product.toUpperCase()).includes(("Celery").toUpperCase())){return "Celery"}
    if((product.toUpperCase()).includes(("Ambar Powder").toUpperCase())){return "Ambar Powder"}
    if((product.toUpperCase()).includes(("Amchur").toUpperCase())){return "Amchur"}
    if((product.toUpperCase()).includes(("Aamchur Powder").toUpperCase())){return "Amchur"}
    if((product.toUpperCase()).includes(("Drymango Powder").toUpperCase())){return "Amchur"}
    if((product.toUpperCase()).includes(("Khatai").toUpperCase())){return "Amchur"}
    if((product.toUpperCase()).includes(("Mustard").toUpperCase())){return "Mustard"}
    if((product.toUpperCase()).includes(("Rai").toUpperCase())){return "Mustard"}
    if((product.toUpperCase()).includes(("Jaggery").toUpperCase())){return "Jaggery"}
    if((product.toUpperCase()).includes(("Dhania Jeera Powder").toUpperCase())){return "Cumin Powder"} 
    if((product.toUpperCase()).includes(("Zeera").toUpperCase())){return "Cumin Powder"}
    if((product.toUpperCase()).includes(("Poppy Seeds").toUpperCase())){return "Poppy Seeds"}
    if((product.toUpperCase()).includes(("Poppy Seed").toUpperCase())){return "Poppy Seeds"}
    if((product.toUpperCase()).includes(("Pulikulambu Powder").toUpperCase())){return "Pulikulambu Powder"}
    if((product.toUpperCase()).includes(("Oregano").toUpperCase())){return "Oregano"}
    if((product.toUpperCase()).includes(("Rosemary").toUpperCase())){return "Rosemary"}
    if((product.toUpperCase()).includes(("Basil").toUpperCase())){return "Basil"} 
    if((product.toUpperCase()).includes(("Ajwain").toUpperCase())){return "Ajwain"} 
    if((product.toUpperCase()).includes(("Star Anise").toUpperCase())){return "Star Anise"}
    if((product.toUpperCase()).includes(("Anise").toUpperCase())){return "Anise"}
    if((product.toUpperCase()).includes(("Paprika").toUpperCase())){return "Paprika"}
    if((product.toUpperCase()).includes(("Mace").toUpperCase())){return "Mace"} 
    if((product.toUpperCase()).includes(("Javitri").toUpperCase())){return "Mace"}
    if((product.toUpperCase()).includes(("Tamarind Powder").toUpperCase())){return "Tamarind Powder"}
    if((product.toUpperCase()).includes(("Tulsi Licorice").toUpperCase())){return "Tulsi Licorice"}
    if((product.toUpperCase()).includes(("Kalia Masala").toUpperCase())){return "Kalia Masala"}
    if((product.toUpperCase()).includes(("Onion").toUpperCase())){return "Onion Powder"}
    if((product.toUpperCase()).includes(("Plum").toUpperCase())){return "Plum"} 
    if((product.toUpperCase()).includes(("Dabeli Masala").toUpperCase())){return "Dabeli Masala"}
    if((product.toUpperCase()).includes(("Lemongrass").toUpperCase())){return "Lemongrass"} 
    if((product.toUpperCase()).includes(("Cajun").toUpperCase())){return "Cajun"} 
    if((product.toUpperCase()).includes(("Anardana").toUpperCase())){return "Anardana"} 
    if((product.toUpperCase()).includes(("Solanum Surattense").toUpperCase())){return "Solanum Surattense"} 
    if((product.toUpperCase()).includes(("Solanumsurattense").toUpperCase())){return "Solanum Surattense"} 
    if((product.toUpperCase()).includes(("Ashwagandha Powder").toUpperCase())){return "Ashwagandha Powder"}
    if((product.toUpperCase()).includes(("Triphala Powder").toUpperCase())){return "Triphala Powder"}
    if((product.toUpperCase()).includes(("Shatavari Powder").toUpperCase())){return "Shatavari Powder"}
    if((product.toUpperCase()).includes(("Amalaki Powder").toUpperCase())){return "Amalaki Powder"} 
    if((product.toUpperCase()).includes(("Asafoetida").toUpperCase())){return "Asafoetida"}
    if((product.toUpperCase()).includes(("Heeng").toUpperCase())){return "Asafoetida"}
    if((product.toUpperCase()).includes(("Hing").toUpperCase())){return "Asafoetida"}
    
    //If all else fails just keep the product name the same
    return product;
}
    
    //Check if a given spice is one of the spices we're sampling for. We are sampling for 68 spices.
    function filter(product, country){
    if(( (product.toUpperCase()).includes(("GARAM MASALA").toUpperCase()) || 
         (product.toUpperCase()).includes(("Nutmeg Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("BAY LEAVES").toUpperCase()) ||
         (product.toUpperCase()).includes(("Cinnamon Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Fennel Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Nutmeg Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("PEPPER POWDER").toUpperCase()) ||
         (product.toUpperCase()).includes(("CORIANDER POWDER").toUpperCase()) ||
         (product.toUpperCase()).includes(("FENUGREEK POWDER").toUpperCase()) ||
         (product.toUpperCase()).includes(("BIRYANI SPICE").toUpperCase()) ||
         (product.toUpperCase()).includes(("PANCHPURAN").toUpperCase()) || 
         (product.toUpperCase()).includes(("Rasam Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Chutney Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Vangibath Powder").toUpperCase()) ||  
         (product.toUpperCase()).includes(("Sambar Powder").toUpperCase()) || 
         (product.toUpperCase()).includes(("Chai Spices").toUpperCase()) ||
         (product.toUpperCase()).includes(("Cumin Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Pepper Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Poppy Seed").toUpperCase()) ||
         (product.toUpperCase()).includes(("Kabsa Spice").toUpperCase()) || 
         (product.toUpperCase()).includes(("Madras Curry Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Chana Masala Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Meat Masala").toUpperCase()) ||
         (product.toUpperCase()).includes(("Turmeric Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Chilli Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Pickle Masala").toUpperCase()) ||
         (product.toUpperCase()).includes(("Garlic Paste").toUpperCase()) ||
         (product.toUpperCase()).includes(("Vata Spice Mix").toUpperCase()) ||
         (product.toUpperCase()).includes(("Chaat Masala").toUpperCase()) ||
         (product.toUpperCase()).includes(("Mixed Herbs").toUpperCase()) ||
         (product.toUpperCase()).includes(("Karam Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Kabab Masala").toUpperCase()) ||
         (product.toUpperCase()).includes(("Kaddu").toUpperCase()) ||
         (product.toUpperCase()).includes(("Ginger Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Cardamom").toUpperCase()) ||
         (product.toUpperCase()).includes(("Bhaji Masala").toUpperCase()) ||
         (product.toUpperCase()).includes(("Sabji Masala").toUpperCase()) ||
         (product.toUpperCase()).includes(("Celery").toUpperCase()) ||
         (product.toUpperCase()).includes(("Ambar Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Amchur Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Mustard").toUpperCase()) ||
         (product.toUpperCase()).includes(("Jaggery").toUpperCase()) ||
         (product.toUpperCase()).includes(("Dhania Jeera Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Poppy Seeds").toUpperCase()) ||
         (product.toUpperCase()).includes(("Pulikulambu Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Oregano").toUpperCase()) ||
         (product.toUpperCase()).includes(("Rosemary").toUpperCase()) ||
         (product.toUpperCase()).includes(("Basil").toUpperCase()) ||
         (product.toUpperCase()).includes(("Ajwain").toUpperCase()) ||
         (product.toUpperCase()).includes(("Star Anise").toUpperCase()) ||
         (product.toUpperCase()).includes(("Anise").toUpperCase()) ||
         (product.toUpperCase()).includes(("Paprika").toUpperCase()) ||
         (product.toUpperCase()).includes(("Mace").toUpperCase()) ||
         (product.toUpperCase()).includes(("Tamarind Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Tulsi Licorice").toUpperCase()) ||
         (product.toUpperCase()).includes(("Kalia Masala").toUpperCase()) ||
         (product.toUpperCase()).includes(("Onion Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Plum").toUpperCase()) || 
         (product.toUpperCase()).includes(("Dabeli Masala").toUpperCase()) ||
         (product.toUpperCase()).includes(("Lemongrass").toUpperCase()) || 
         (product.toUpperCase()).includes(("Cajun").toUpperCase()) ||
         (product.toUpperCase()).includes(("Anardana").toUpperCase()) ||
         (product.toUpperCase()).includes(("Solanum Surattense").toUpperCase()) ||
         (product.toUpperCase()).includes(("Ashwagandha Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Triphala Powder").toUpperCase()) || 
         (product.toUpperCase()).includes(("Shatavari Powder").toUpperCase()) || 
         (product.toUpperCase()).includes(("Amalaki Powder").toUpperCase()) ||
         (product.toUpperCase()).includes(("Asafoetida").toUpperCase())
        
       ) && country == chosenCountry){
        
       return true;
    }
    return false;
}
    
    //Show world map on startup
    showCountries();
    
    function showCountries(){
   
    //Color of each segment of the legend
    var color;
    
    //Define the thresholds for the color bindings 
    if(schemeShipments){
    color = d3.scaleThreshold()
    .domain([0, 225, 500, 1000, 2000, 4500, 15000, 50000])
    .range(d3.schemeGreens[9]);
    }else{
     color = d3.scaleThreshold()
    .domain([0, 3000, 5000, 10000, 15000, 30000, 100000, 400000])
    .range(d3.schemeGreens[9]);  
    }
   
//Width and height of world map
var width = 1300;
var height = 600;

//Create world map svg element
var svg = d3.select("#worldMapDiv")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("id", "worldMap");
    
        
//Map values to the ids. These will show up in the tooltip.   
var shipmentsById = d3.map();
var nameById = d3.map();
var qtyById = d3.map();
 
//Create tooltip element
var div = d3
  .select('body')
  .append('div')
  .attr('class', 'tooltip')
  .style('opacity', 0);
    
    
//Set the scale and move the map
var projection = d3.geoMercator()
    .scale(130)
    .translate([width / 2 - 50 + 97 + 29, height / 2 + 110]);

//Set country boundries
var path = d3.geoPath()
    .projection(projection);

//Map the data to ids and begin drawing the svg elements
d3.queue()
    .defer(d3.json, "110m.json")
    .defer(d3.csv, "world-110m-country-codes.csv", function(d) { 
       nameById.set(d.id, d.name);
       shipmentsById.set(d.id, +d.imports);
       qtyById.set(d.id, +d.qty);                                            
    })
    .await(ready);

function ready(error, world) {
  if (error) throw error;
   
    //Make an element inside our svg element to append the map to.
    //We need the map and the legend to be appended to different elements so the legend overlaps the map when zooming in.
     var map = svg.append("g")
    .attr("class", "map");
    
    //Make the legend appened to its own element inside our svg
     var g = svg.append("g")
    .attr("class", "key")
    .attr("transform", "translate(275,40)");
    
    //Set length of legend
    if(schemeShipments){
    var x = d3.scaleSqrt()
    .domain([0, 4500])
    .rangeRound([440, 610]);
}else{
     var x = d3.scaleSqrt()
    .domain([0, 4500])
    .rangeRound([440, 500]);
}
    
/* Map code: */
    
//Draw the world map
var worldMap = map.append("g")
    .attr("class", "countries")
    .selectAll("path")
    .data(topojson.feature(world, world.objects.countries).features)
    .enter().append("path")
    //Color the countries
    .attr("fill",  function(d) { 
     
      //Make India the color green
      if(nameById.get(+d.id) == "India"){
         return "#00FF00"; 
       }
      
      //If we have data for the country color it in to the set color bindings
      if(schemeShipments){
      if(shipmentsById.get(+d.id) != 0) {
        return color(shipmentsById.get(+d.id)); 
      }
  }else{
      if(qtyById.get(+d.id) != 0) {
        return color(qtyById.get(+d.id)); 
      }
}      
})
      .attr("d", path)
       //Display tooltip
      .on('mouseover', function(d) {
      var desc = "";
      var amount = "";
      if(schemeShipments){
     if(nameById.get(+d.id) == "India"){
        desc = "Export Shipments:";
    }else{
       desc = "Import Shipments:";
    }
    }else{
    if(nameById.get(+d.id) == "India"){
        desc = "Quantity Exported:";
    }else{
       desc = "Quantity Imported:";
    }   
    }
      
      if(schemeShipments){
      if(shipmentsById.get(+d.id) == 0){
         amount = "N/A"
    }else{
        amount = shipmentsById.get(+d.id).toLocaleString();
    }
       }else{
         if(qtyById.get(+d.id) == 0){
         amount = "N/A"
    }else{
        amount = qtyById.get(+d.id).toLocaleString();
    }  
       }
      div
        .transition()
        .duration(200)
        .style('opacity', 0.9);
      div
      //Draw tooltip text in html form
        .html(
    '<div style="text-align:center">' + nameById.get(+d.id) + '</div>' +
    '<div style="text-align:center">' + desc + '</div>' +
    '<div style="text-align:center">' + amount + '</div>'
      )
        .style('left', d3.event.pageX + 'px')
        .style('top', d3.event.pageY - 28 + 'px');
    })
    //Make tooltip dissapear when mouse exits
    .on('mouseout', function() {
      div
        .transition()
        .duration(500)
        .style('opacity', 0);
    })
    //What happens when you click on a country
     .on('click', d => {
    //In order for anything to happen the clicked on country must have data for it, cannot be the currently selected country, and cannot be India.
        if(shipmentsById.get(+d.id) != 0 && nameById.get(+d.id) != chosenCountry && nameById.get(+d.id) != "India"){
        //Set the current country to the clicked on country
        chosenCountry = nameById.get(+d.id);
        //Remove the bar chart & most popular dishes
        d3.select("#barChart").selectAll("#removable").remove();
        d3.select("#popDishes").selectAll("#removable").remove();
        //Display the bar chart & most popular dishes
        showBarChart();
        showPopDish();
  }
    });

/* Legend code: */
//Draw the rectangles that comprise the legend with their corresponding colors
 g.selectAll("rect")
  .data(color.range().map(function(d) {
      d = color.invertExtent(d);
      if (d[0] == null) d[0] = x.domain()[0];
      if (d[1] == null) d[1] = x.domain()[1];
      return d;
    }))
  .enter().append("rect")
    .attr("height", 8)
    .attr("x", function(d) { return x(d[0]); })
    .attr("width", function(d) { return x(d[1]) - x(d[0]); })
    .attr("fill", function(d) { return color(d[0]); });
    
    //Write legend text depending on which color binding is being used
    if(schemeShipments){
   g.append("text")
    .attr("class", "caption")
    .attr("x", x.range()[0])
    .attr("y", -6)
    .attr("fill", "#000")
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .text("Import Shipments");
}else{
   g.append("text")
    .attr("class", "caption")
    .attr("x", x.range()[0])
    .attr("y", -6)
    .attr("fill", "#000")
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .text("Quantity Imported"); 
}
    

   //Draw tick marks on the legend
   g.call(d3.axisBottom(x)
    .tickSize(13)
    .tickValues(color.domain())
    .tickFormat(function (d) {
        //Write in terms of thousands. i.e "40,000" is written as "40k"
        if(d >= 1000){
        return d/1000 + "k";
        }else{
        return d;
        }
    }))
    .select(".domain")
    .remove();
    
    
    //Make zooming possible
    if(canZoom){
    var zoom = d3.zoom()
    .scaleExtent([1, 13])
    .translateExtent([[-100, -100], [width + 800, height + 300]])
    .on("zoom", zoomed);
    
    svg.call(zoom);
}

//Make function that transforms svg elements such that we can pan and zoom
function zoomed() {
  worldMap.attr("transform", d3.event.transform);
}

//What happens when you click the color binding button
d3.select('#colorButton').on('click', function () {
    //Set corresponding variables and change button text
    if(schemeShipments){
        schemeShipments = false;
        document.querySelector('#colorButton').innerHTML = 'Base Color Bindings Off of # of Import Shipments';
    }else{
       schemeShipments = true;
       document.querySelector('#colorButton').innerHTML = 'Base Color Bindings Off of Quantity Imported';
    }
  //Remove world map
  d3.select("#worldMap").remove();
  //Display world map
  showCountries();
});  
    
 
//What happens when you click the enable zoom button
d3.select('#zoomButton').on('click', function () {
    //Set corresponding variables and change button text
    if(canZoom){
        canZoom = false;
        document.querySelector('#zoomButton').innerHTML = 'Enable Pan & Zoom';
    }else{
       canZoom = true;
       document.querySelector('#zoomButton').innerHTML = 'Disable Pan & Zoom';
    }
  //Remove world map
  d3.select("#worldMap").remove();
  //Display world map
  showCountries();
});  
      
}
    
    }
    
    
    

    
    
    

    
    
//Function that draws the bar chart 
function showBarChart(){

//We need to offset the whole graph by some amount to make room for the y axis label
var offsetX = 60;

//How big the view window for our graph is going to be
//The right margin had to be increased to make room for the 16th country
var margin = {top: 10, right: 70, bottom: 150, left: 50},
    width = 760 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    

//Create bar chart element
var svgBar = d3.select("#barChart").append("svg")
    .attr("id", "removable")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// Define X and Y SCALE.
//xScale and yScale define the width and height of each individual bar in the bar graph once a value is passed into it.
var xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1);
var yScale = d3.scaleLinear().range([height, 30]);

// Define X and Y AXIS
// Define tick marks on the y-axis as shown on the output with an interval of 5 and $ sign
var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

//Get the file name using the selected country
var file = "CountryData/" + chosenCountry + ".csv";


d3.queue()
.defer(d3.csv, file)
.await(function(error, data) {
    
     //Edit the selected spices to a simpler name
    for(var i = 0; i < data.length; i++){
        
        //Also while we're at it if a spice has "NA" listed as its quantity change it to 0
        if(data[i].StandardQty == "NA"){
           data[i].StandardQty = 0;
        }
    
        //Edit spice name
        data[i].ProductDescription = changeProdName(data[i].ProductDescription);
    }
    
    //Remove all duplicates from the list of the desired spice. As we do so we will add up the quantities to the spice remaining.
    removeDuplicates("Garam Masala");
    removeDuplicates("Nutmeg Powder");
    removeDuplicates("Bay Leaves");
    removeDuplicates("Cinnamon Powder");
    removeDuplicates("Fennel Powder");
    removeDuplicates("Nutmeg Powder");
    removeDuplicates("Pepper Powder");
    removeDuplicates("Coriander Powder");
    removeDuplicates("Fenugreek Powder");
    removeDuplicates("Biryani Spice");
    removeDuplicates("Panchpuran"); 
    removeDuplicates("Rasam Powder"); 
    removeDuplicates("Chutney Powder");
    removeDuplicates("Vangibath Powder");
    removeDuplicates("Puliyogare Powder"); 
    removeDuplicates("Sambar Powder"); 
    removeDuplicates("Chai Spices"); 
    removeDuplicates("Cumin Powder");
    removeDuplicates("Pepper Powder");
    removeDuplicates("Poppy Seed"); 
    removeDuplicates("Kabsa Spice"); 
    removeDuplicates("Madras Curry Powder");
    removeDuplicates("Chana Masala Powder");
    removeDuplicates("Meat Masala");
    removeDuplicates("Turmeric Powder");
    removeDuplicates("Chilli Powder");
    removeDuplicates("Pickle Masala");
    removeDuplicates("Garlic Paste");
    removeDuplicates("Vata Spice Mix"); 
    removeDuplicates("Chaat Masala");
    removeDuplicates("Mixed Herbs"); 
    removeDuplicates("Karam Powder");
    removeDuplicates("Kabab Masala");
    removeDuplicates("Kaddu");
    removeDuplicates("Ginger Powder");
    removeDuplicates("Cardamom");
    removeDuplicates("Bhaji Masala");
    removeDuplicates("Sabji Masala");
    removeDuplicates("Celery");
    removeDuplicates("Ambar Powder");
    removeDuplicates("Amchur Powder");
    removeDuplicates("Mustard");
    removeDuplicates("Jaggery"); 
    removeDuplicates("Dhania Jeera Powder");
    removeDuplicates("Poppy Seeds");
    removeDuplicates("Pulikulambu Powder");
    removeDuplicates("Oregano");
    removeDuplicates("Rosemary"); 
    removeDuplicates("Basil");
    removeDuplicates("Ajwain");
    removeDuplicates("Star Anise"); 
    removeDuplicates("Anise");
    removeDuplicates("Paprika");
    removeDuplicates("Mace"); 
    removeDuplicates("Tamarind Powder"); 
    removeDuplicates("Tulsi Licorice"); 
    removeDuplicates("Kalia Masala");
    removeDuplicates("Onion Powder");
    removeDuplicates("Plum");
    removeDuplicates("Dabeli Masala"); 
    removeDuplicates("Lemongrass"); 
    removeDuplicates("Cajun");
    removeDuplicates("Anardana");
    removeDuplicates("Solanum Surattense"); 
    removeDuplicates("Ashwagandha Powder"); 
    removeDuplicates("Triphala Powder");
    removeDuplicates("Shatavari Powder"); 
    removeDuplicates("Asafoetida");
    
    //Bubble Sort the spices (largest to smallest)
 for(i = 0; i < data.length; i++){
    
   //Last i elements are already in place 
   for(j = 1; j < ( data.length - i); j++){
      
     //Checking if the item at present iteration is greater than the next iteration
     if(+data[j-1].StandardQty < +data[j].StandardQty){
        
       //If the condition is true then swap them
       var temp = data[j-1]
       data[j-1] = data[j]
       data[j] = temp;
     }
   }
 }
    
    //Save the filtered spice list for later use
    var filterdData = data.filter(function(d) { return filter(d.ProductDescription, d.CountryofDestination)});
    
    //Set each collumn to its spice name
    xScale.domain(data.filter(function(d) { return filter(d.ProductDescription, d.CountryofDestination)}).map(function(d){ 
        
        return d.ProductDescription; 
    
    }));
    
    //Set the range of values for the y axis
    yScale.domain([0,d3.max(data.filter(function(d) { return filter(d.ProductDescription, d.CountryofDestination)}), function(d) {return +d.StandardQty; })]);
    
    //Creating rectangular bars to represent the data. 
    //This defines the traits of each bar in the bar graph
    svgBar.selectAll("rect")
        //Gather the data
        .data(data)
        //Make that data able to be used
        .enter()
        //Create a rectangle
        .append("rect")
        //Only use a filtered data set
        .filter(function(d) { return filter(d.ProductDescription, d.CountryofDestination)})
        //Make an animation where it comes into frame
        .transition().duration(1000)
        .delay(function(d,i) {return i * 200;})
        //Set the x coordinate of a given bar. Make it scale to a value of quantity imported
        .attr("x", function(d) {
            return xScale(d.ProductDescription) + offsetX;
        })
        //Set the y coordinate of a given bar. Make it scale to a value of quantity imported
        .attr("y", function(d) {
            return yScale(d.StandardQty);
        })
        //Set the width and height of each bar with a simular method to setting the coordinates.
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) {
        //Height of each bar is the height of the graph minus the scale to a value of quantity imported
            return height - yScale(d.StandardQty);
        })
        //Fill the recatanle with a rbg that is more blue the higher the quantity imported. The most highest quantity spice in the list will be 100% blue
        .attr("fill", function(d) {
            return "rgb(0, 0, " + (parseInt(+d.StandardQty)/parseInt(+filterdData[0].StandardQty)) * 255 + ")";
        });
    

   //This is for the white text inside of each bar in the bar graph
    svgBar.selectAll("text")
        //Gather the data
       .data(data)
        //Make that data able to be used
       .enter()
       //Create text
       .append("text")
      .filter(function(d) { return filter(d.ProductDescription, d.CountryofDestination)})
       //Make the 0,0 coordinate of the text its center
       .attr("text-anchor", "middle")
       //Make an animation where it comes into frame
       .transition().duration(1000)
       .delay(function(d,i) {return i * 200;})
       //Define the text to be of a given bar's associated quantity value
       .text(function(d) {
           //The text will only appear if the bar is above a certain height. Otherwise the text won't fit inside the bar.
           if(height - yScale(d.StandardQty) > 13){
            return parseInt(+d.StandardQty).toLocaleString();
            }
        })
       //set the x coordinate and offset it per bar generated
       .attr("x", function(d) {
        //Set the x posistion to the posistion of each bar plus half the width of each bar to center the text
             return xScale(d.ProductDescription) + offsetX + xScale.bandwidth()/2;
        })
       //set the y coordinate of the text to be the top of the bar and ten pixels down
       .attr("y", function(d) {
              return yScale(d.StandardQty) + 12;
        })
       //set text traits like the font and color
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "white");
  
    
    //Draws xAxis text
    svgBar.append("g")
        //Make an x axis
        .attr("class", "x axis")
        //Move it to where we want it to be with the defined offsets
        .attr("transform", "translate(" + offsetX + "," + height + ")")
        //Put xAxis on the webpage
        .call(xAxis)
        //Define all of the text on this xAxis
        .selectAll("text")
        //Put the 0,0 coordinate of the text at 0,0
        //This is so we can rotate it properally
        .style("text-anchor", "end")
        //Rotate text 60 degrees
        .attr("transform", "rotate(-60)")
        .attr("dx", "-.8em")
        .attr("dy", ".25em");
        
    
    
    //this make the y axis
    svgBar.append("g")
        //Make a y axis
        .attr("class", "y axis")
        //Set the y axis where we want it to be with the defined x offset
        .attr("transform", "translate(" + offsetX + ",0)")
        //Put y axis on our webpage
        .call(yAxis);
    
    //Make y axis lable
    svgBar.append("text")
    //Create label
    .attr("class", "y label")
    //Define our text 
    .text("Quantity Imported")
    //Put the 0,0 coordinate in the middle of our text for easy rotation
    .attr("text-anchor", "middle")
    .style("font-size", "15px")
    //Rotate text
    .attr('transform', 'translate(' + 0 + ', ' + height/2 + ') rotate(-90)'); 
    
    svgBar.append("text")
    //Create label
    .attr("class", "y label")
    //Define our text 
    .text(chosenCountry + " Indian Spice Imports")
    //Put the 0,0 coordinate in the middle of our text for easy rotation
    .attr("text-anchor", "middle")
    .style("font-size", "15px")
    //Rotate text
    .attr('transform', 'translate(' + 2*width/3 + ', ' + 2 + ')'); 
    
    
    //Removes all duplicates from the list of the desired spice. As we do so we will add up the quantities to the spice remaining.
    function removeDuplicates(dup){
    var firsItem = true;
    //Go through all of the spices
    for(var j = 0; j < data.length; j++){
        
        if(data[j].ProductDescription == dup){
            if(firsItem){
               //Save the index of the first instance of the desired spice
               var saveIndex = j;
            }
            if(!firsItem){
              //Add the quantity of the duplicates to the first seen index of the spice
              data[saveIndex].StandardQty = +data[saveIndex].StandardQty + +data[j].StandardQty;
              //Set the product name of the duplicates to "unused" so that they'll get filtered out later.
              data[j].ProductDescription = "unused";
            }
            firsItem = false;
        }
    }
    }
});
}
    
    
    
    
    
    
    
    
//Shows the top five most popular Indian dishes in the selected country  
function showPopDish(){  
  
//We need to offset the whole graph by some amount to make room for the y axis label
var offsetX = 60;

//How big the view window for our graph is going to be
//The right margin had to be increased to make room for the 16th country
var margin = {top: 10, right: 70, bottom: 150, left: 50},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    

//Make our popular dishes element
var svg = d3.select("#popDishes").append("svg")
    .attr("id", "removable")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Define X and Y SCALE.
//xScale and yScale define the width and height of each individual bar in the bar graph once a value is passed into it.
var xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1);
var yScale = d3.scaleLinear().range([height, 0]);

// Define X and Y AXIS
// Define tick marks on the y-axis as shown on the output with an interval of 5 and $ sign
var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

//Get the file name using the selected country
var file = "CountryData/" + chosenCountry + ".csv";

d3.queue()
.defer(d3.csv, file)
.defer(d3.csv, "IndianFoodDatasetCSV.csv")
.await(function(error, data, recipes) {
    
    
     //Edit the selected spices to a simpler name
    for(var i = 0; i < data.length; i++){
        
        //Also while we're at it if a spice has "NA" listed as its quantity change it to 0
        if(data[i].StandardQty == "NA"){
           data[i].StandardQty = 0;
        }
        
        //Edit spice name
        data[i].ProductDescription = changeProdName(data[i].ProductDescription);
    }
    
    //Remove the word "Recipe" from the dish names
    for(var j = 0; j < recipes.length; j++){
        recipes[j].TranslatedRecipeName = recipes[j].TranslatedRecipeName.replace('(Recipe)','');
        recipes[j].TranslatedRecipeName = recipes[j].TranslatedRecipeName.replace('Recipe','');
        recipes[j].TranslatedRecipeName = recipes[j].TranslatedRecipeName.replace(' Recipe','');
        recipes[j].TranslatedRecipeName = recipes[j].TranslatedRecipeName.replace('Recipe ','');
        recipes[j].TranslatedRecipeName = recipes[j].TranslatedRecipeName.replace(' Recipe ','');
        recipes[j].TranslatedRecipeName = recipes[j].TranslatedRecipeName.replace('recipe','');
    }
    
    
    //Remove all duplicates from the list of the desired spice. As we do so we will add up the quantities to the spice remaining.
    removeDuplicates("Garam Masala");
    removeDuplicates("Nutmeg Powder");
    removeDuplicates("Bay Leaves");
    removeDuplicates("Cinnamon Powder");
    removeDuplicates("Fennel Powder");
    removeDuplicates("Nutmeg Powder");
    removeDuplicates("Pepper Powder");
    removeDuplicates("Coriander Powder");
    removeDuplicates("Fenugreek Powder");
    removeDuplicates("Biryani Spice");
    removeDuplicates("Panchpuran"); 
    removeDuplicates("Rasam Powder"); 
    removeDuplicates("Chutney Powder");
    removeDuplicates("Vangibath Powder");
    removeDuplicates("Puliyogare Powder"); 
    removeDuplicates("Sambar Powder"); 
    removeDuplicates("Chai Spices"); 
    removeDuplicates("Cumin Powder");
    removeDuplicates("Pepper Powder");
    removeDuplicates("Poppy Seed"); 
    removeDuplicates("Kabsa Spice"); 
    removeDuplicates("Madras Curry Powder");
    removeDuplicates("Chana Masala Powder");
    removeDuplicates("Meat Masala");
    removeDuplicates("Turmeric Powder");
    removeDuplicates("Chilli Powder");
    removeDuplicates("Pickle Masala");
    removeDuplicates("Garlic Paste");
    removeDuplicates("Vata Spice Mix"); 
    removeDuplicates("Chaat Masala");
    removeDuplicates("Mixed Herbs"); 
    removeDuplicates("Karam Powder");
    removeDuplicates("Kabab Masala");
    removeDuplicates("Kaddu");
    removeDuplicates("Ginger Powder");
    removeDuplicates("Cardamom");
    removeDuplicates("Bhaji Masala");
    removeDuplicates("Sabji Masala");
    removeDuplicates("Celery");
    removeDuplicates("Ambar Powder");
    removeDuplicates("Amchur Powder");
    removeDuplicates("Mustard");
    removeDuplicates("Jaggery"); 
    removeDuplicates("Dhania Jeera Powder");
    removeDuplicates("Poppy Seeds");
    removeDuplicates("Pulikulambu Powder");
    removeDuplicates("Oregano");
    removeDuplicates("Rosemary"); 
    removeDuplicates("Basil");
    removeDuplicates("Ajwain");
    removeDuplicates("Star Anise"); 
    removeDuplicates("Anise");
    removeDuplicates("Paprika");
    removeDuplicates("Mace"); 
    removeDuplicates("Tamarind Powder"); 
    removeDuplicates("Tulsi Licorice"); 
    removeDuplicates("Kalia Masala");
    removeDuplicates("Onion Powder");
    removeDuplicates("Plum");
    removeDuplicates("Dabeli Masala");
    removeDuplicates("Lemongrass");
    removeDuplicates("Cajun");
    removeDuplicates("Anardana");
    removeDuplicates("Solanum Surattense");
    removeDuplicates("Ashwagandha Powder");
    removeDuplicates("Triphala Powder");
    removeDuplicates("Shatavari Powder");
    removeDuplicates("Asafoetida");
    
//Bubble Sort the spices
 for(i = 0; i < data.length; i++){
    
   //Last i elements are already in place 
   for(j = 1; j < ( data.length - i); j++){
      
     //Checking if the item at present iteration is greater than the next iteration
     if(+data[j-1].StandardQty < +data[j].StandardQty){
        
       //If the condition is true then swap them
       var temp = data[j-1]
       data[j-1] = data[j]
       data[j] = temp;
     }
   }
 }
    
    //Save the filtered spice list for later use
    filterdData = data.filter(function(d) { return filter(d.ProductDescription, d.CountryofDestination)});
    
    //Set each collumn to its spice name
    xScale.domain(data.filter(function(d) { return filter(d.ProductDescription, d.CountryofDestination)}).map(function(d){ 
        
        return d.ProductDescription; 
    
    }));
    
    //Set the range of values for the y axis
    yScale.domain([0,d3.max(data.filter(function(d) { return filter(d.ProductDescription, d.CountryofDestination)}), function(d) {return +d.StandardQty; })]);
    
   
 //Rank the recipes
 //Iterate through the recipes
 for(i = 0; i < recipes.length; i++){
   //Iterate through the filtered spice list
   for(j = 0; j < filterdData.length; j++){
       //See if the spice is in the recipe
       if((recipes[i].TranslatedIngredients.toUpperCase()).includes((filterdData[j].ProductDescription).toUpperCase())){
           //If so increase the recipe's rank by the number of spices in the filtered list minus the spice's placement in the list
           recipes[i].rank =  +recipes[i].rank + (filterdData.length - j);
       }
   }
 }
    
    
    //Bubble Sort recipes based on rank
 for(i = 0; i < recipes.length; i++){
    
   //Last i elements are already in place 
   for(j = 1; j < ( recipes.length - i); j++){
      
     //Checking if the item at present iteration is greater than the next iteration
     if(+recipes[j-1].rank < +recipes[j].rank){
        
       //If the condition is true then swap them
       temp = recipes[j-1]
       recipes[j-1] = recipes[j]
       recipes[j] = temp;
     }
   }
 }
    
    
    
    
        //Draw background box
     svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width",  width + offsetX)
        .attr("height", height)
        .style("stroke-width", 2) 
        .style("stroke", "black") 
        .attr("fill", "lightgray");


    
   //Draw the recipe names
    svg.selectAll("text")
       //Make it so that our data is the recipes
       .data(recipes)
       .enter()
       //Create text
       .append("text")
       .attr("text-anchor", "middle")
       //Make an animation where it comes into frame
       .transition().duration(1000)
       .delay(function(d,i) {return i * 200;})
       .text(function(d,i) {
       //Make it so only five recipes can be displayed
           if(i < 6){
            return d.TranslatedRecipeName;
            }
        })
       .attr("x", function(d) {
            return (width/2 + 30);
        })
       .attr("y", function(d,i) {
            return height/4 + (i * 40);
        })
       //Set text traits like the font and color
       .attr("font-family", "sans-serif")
       .attr("font-size", "14px")
       //Make the text Bold
       .attr("font-weight",function(d) {return 900;})
       .attr("fill", "black");
    
  
    
     //Contains text
    svg.selectAll("text2")
     //Make it so that our data is the recipes
     .data(recipes)
     .enter()
     //Create text
     .append("text")
     .attr("text-anchor", "middle")
       //Make an animation where it comes into frame
       .transition().duration(1000)
       .delay(function(d,i) {return i * 200;})
       .text(function(d,i) {
        //Make it so only five lines can be displayed
            if(i < 6){
            return "Contains: " + contains(d.TranslatedIngredients);
            }
        })
       .attr("x", function(d) {
            return (width/2 + 30);
        })
       .attr("y", function(d,i) {
            return height/4 + 20 + (i * 40);
        })
       //Set text traits like the font and color
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "black");
    
    
    
    //Make y axis lable
    svg.append("text")
    //Create label
    .attr("class", "y label")
    //Define our text 
    .text("Top 5 Most Popular Indian Dishes in: " + chosenCountry)
    .style("font-size", "19px")
    .attr("text-anchor", "middle")
    //Move text to where we want
    .attr('transform', 'translate(' + (width/2 + 30) + ',' + 40 + ')'); 
    
    //"Based on Import Data" text 
    svg.append("text")
    //Create label
    .attr("class", "y label")
    //Define our text 
    .text("Based on Import Data")
    .style("font-size", "15px")
    .attr("text-anchor", "middle")
    //Move text to where we want
    .attr('transform', 'translate(' + (width/2 + 30) + ',' + 63 + ')'); 
  
    
    //Removes all duplicates from the list of the desired spice. As we do so we will add up the quantities to the spice remaining.
    function removeDuplicates(dup){
    var firsItem = true;
    //Go through all of the spices
    for(var j = 0; j < data.length; j++){
        
        if(data[j].ProductDescription == dup){
            if(firsItem){
               //Save the index of the first instance of the desired spice
               var saveIndex = j;
            }
            if(!firsItem){
              //Add the quantity of the duplicates to the first seen index of the spice
              data[saveIndex].StandardQty = +data[saveIndex].StandardQty + +data[j].StandardQty;
              //Set the product name of the duplicates to "unused" so that they'll get filtered out later.
              data[j].ProductDescription = "unused";
            }
            firsItem = false;
        }
    }
    }
    
    
    
    //Make display string for the "Contains:..." text
    function contains(recipe){
    //Save an array of filtered spices
    var filterdData = data.filter(function(d) { return filter(d.ProductDescription, d.CountryofDestination)});
        //Create spice list we will add on to
        var spiceList = "";
        //Initilize length of the spice list
        var length = 0;
        //Make it so a spice list can display a maximum of five spices
        var maxLength = 6;
        
         //Iterate through filtered spice list
         for (var i = 0; i < filterdData.length; i++){
          //Check if we've exceeded our maximum legth. If we have return the spice list we've created.
          if(length < maxLength){
          //Check if the the spice is in the recipe 
          if((recipe.toUpperCase()).includes((filterdData[i].ProductDescription).toUpperCase())){
          //If this is not the first found spice put a ", " in front of the spice name
          if(spiceList != ""){
             spiceList += ", "
          }
              
        length++;
            
          if(length < maxLength){
          //Add spice to the spice list
          spiceList += filterdData[i].ProductDescription;
        }else{
            //If we've exceeded our maximum length append to the spice list "..."
           spiceList += "...";  
        }
    
          }
              
    }else{
        return spiceList; 
    }
         }
        
    //Return string of the spice list for the given recipe
    return spiceList;
    }
    
});
}
