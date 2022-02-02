  /*------------- Ciambella Chart V3 For THRIVE Platform V3 (04-05-2021) --------------

        19-05-2021
        ** I think 'chartData' should be refactored to 'config'. I chaged it to: ciambellaChartOptions which is much clearer.
        * I made the scaling work by using: ScalingFactor=Doughnutheight/ScalingDenominator instead of Doughnutwidth, and using 150 as /ScalingDenominator, this works better for when legend gets hidden by the user.
        * It needs some kind of condition to detect when the width goes below a certain threshold, and change the scaling, maybe change the scaling to be based on width below the threshold?
        * I think chart shoud be chartInstance for clarity and convention

        04-06-2021

        22-10-2021

        * Fixed: sliceIsVisible[] array is now declared in plugin script as a global. So there is no need to declare it in the html anymore. Great :)
        * Bug: slices not animating in full screen or when scrollbars are not visible.
        * Bug: If chart displays on a web page with no scoll bars the slices do not animate.

        04-11-2021 -------------------------------------------------------

        * This version is for react-chartjs-2.0.0. Which use chart.js 3.6
                              --------------------
        Change Log:

        Changes made by react-chart-js-2.0.0
        (https://www.chartjs.org/docs/latest/getting-started/v3-migration.html)
        Doughnut rotation option is now in degrees and 0 is at top. Default is changed from -½π to 0.
        Doughnut cutoutPercentage was renamed to cutout and accepts pixels as number and percent as string ending with %.
        legend, title and tooltip namespaces were moved from options to options.plugins.
        `Chart.innerRadius` now lives on doughnut, pie, and polarArea controllers - what does this mean?
        `Chart.outerRadius` now lives on doughnut, pie, and polarArea controllers - what does this mean?

        title
        -----

        I put a title in the options.plugins: but it doesn't do anything.

        tooltip
        -------

        I moved the tooltip code out of options to options.plugins. I can get the code to run but
        I can't get it to access the data object.

        For now I'm getting the routine t return: "SPi: 0.92" and it is showing up in the tooltip.

        in legendClick function:
        ------------------------
        I don't know how to do this in react so I've commented this out for now...
        This function toggles the slices array item for the slice that was clicked. 
        The ci.update() function is called to render the ciambella chart.

        This is meant to run onclick function of the chart, so the chart also recieves the click event.
        But it doesn't work in react version.

***     //this.Chart.defaults.doughnut.legend.onClick.call(this, e, legendItem);

        innerRadius and outerRadius alternatives
        ----------------------------------------

 ***    I don't know how to do this another way so for now I'm using this as temp fix
        (not very good, could be a better calc)...

            var r=100 * (DoughnutWidth/235); //chart.outerRadius-3;
            var ra=r *.6;  // *.6;  //ra=r*.6;//*1.83; //1.85;
            var ir=40 * (DoughnutWidth/235); //chart.innerRadius;  



        -------- Setting up the Ciambella Chart Plugin -------- 

        * chart.js v2.8.0 should be included in html like this:
            <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

        * Plugin should be included in html like this:
            <script src="ciambella-chart-plugin.js"></script>

        * Chart should be initialized in html like this:
            var chart = new Chart(ctx, 
                {
                    data: ciambellaChartData, 
                    type: "doughnut",
                    options: ciambellaChartOptions
                });  

        * Ciambella Chart Plugin should be registered with Chart.js like this:   
            Chart.pluginService.register(ciambellachartplugin);     


  */

    //initialise array as global and create more elements than the platform currently supports, to support future expansion...         
    var sliceIsVisible=new Array(200).fill(true); 


    var ciambellachartplugin = 
    {          
        afterDatasetsDraw: function drawDotsAndLines(chart, options) 
        {
            var debugMode=false;   //false; //draws alignment marks, including crosshairs and centre dot
 
            const { chartArea : area } = chart;
            //get the doughnut inner and outer radius...
            const outerRadius = chart._metasets[0].data[0].outerRadius;
            const innerRadius = chart._metasets[chart._metasets.length-1].data[0].innerRadius;

            //console.log("outerRadius: "+outerRadius);
            //console.log("innerRadius: "+innerRadius);

            var ctx=chart.ctx;
            //console.log("ctx: ",ctx);
            var DoughnutWidth=area.right - area.left;
            var DoughnutHeight=area.bottom - area.top
            var DoughnutCenterX=(DoughnutWidth)/2;
            var DoughnutCenterY=(DoughnutHeight)/2;
            //console.log("DoughnutWidth: ",DoughnutWidth);
            //cx and cy were used in the original ciambella chart code, just a copy of DoughnutCenterX and DoughnutCenterY
            var cx=DoughnutCenterX;
            var cy=DoughnutCenterY;  

            //add the padding left and top to the dougnut center...

            //console.log("padding-left: "+ chartData.options.layout.padding.left);
            //console.log("padding-top: "+ chartData.options.layout.padding.top);
            cx+=ciambellaChartOptions.layout.padding.left;
            cy+=ciambellaChartOptions.layout.padding.top;

            //console.log("cx: ",cx);
            //console.log("cy: ",cy);

            //ScalingDenominator=200;  //best for use with: ScalingFactor=Doughnutwidth/ScalingDenominator 
            var ScalingDenominator=140;  //best for use with: ScalingFactor=Doughnutheight/ScalingDenominator 

            var ScalingFactor=DoughnutHeight/ScalingDenominator

            //use Doughnutwdith in scalingfactor calc if doughnutwidth<500 (when legedn wraps into two columbs)
            //if(DoughnutWidth<400){ScalingFactor=DoughnutWidth/300;}

            var DataDotRadius=1.5;
            var LineWidth=1.2;
            var SPILabelTextFontSize=4;
            var SPIValueTextFontSize=13;
            var THRIVEURLTextFontSize=4;
            
            //rescale/ajust size of DatDotRadius and LineWidth for new DoughnutHeight
            //Maybe make a function CCscaleObjects() function for this.
            if (DoughnutHeight>0) 
            {
                DataDotRadius*=(DoughnutHeight/ScalingDenominator);
                LineWidth*=(DoughnutHeight/ScalingDenominator);
                SPILabelTextFontSize*=(DoughnutHeight/ScalingDenominator);
                SPIValueTextFontSize*=(DoughnutHeight/ScalingDenominator);
                THRIVEURLTextFontSize*=(DoughnutHeight/ScalingDenominator);
            }
            else
            {
                DataDotRadius=0;
                LineWidth=0;
                SPILabelTextFontSize=0;
                SPIValueTextFontSize=0;
                THRIVEURLTextFontSize=0;
            }

            //console.log("DataDotRadius: ",DataDotRadius);

            //use Doughnutwdith in scalingfactor calc if doughnutwidth<500 (when legedn wraps into two columbs)
            //May not need this, we will probably have a custom legend in another grid item/card.
            /*             if(DoughnutWidth<400){
                ScalingDenominator=300;
                ScalingFactor=DoughnutWidth/ScalingDenominator;
            
                DataDotRadius*=(DoughnutWidth/ScalingDenominator);
                LineWidth*=(DoughnutWidth/ScalingDenominator);
                SPILabelTextFontSize*=(DoughnutWidth/ScalingDenominator);
                SPIValueTextFontSize*=(DoughnutWidth/ScalingDenominator);
                THRIVEURLTextFontSize*=(DoughnutWidth/ScalingDenominator);
            }
 */

            if(debugMode)
            {
            //------- draw  blue circle at the center of the dougnut - for debugging
            //ctx.beginPath();
            ctx.moveTo(cx,cy);
            ctx.fillStyle="#f0f";
            ctx.strokeStyle="#f00";
            ctx.arc(cx,cy,3,0,Math.PI*2,true);

            //ctx.fill();
            //ctx.stroke();

            //------- draw cross hairs --------

                ctx.lineWidth=1;
                ctx.strokeStyle="#ccc";

                ctx.moveTo(cx,0);
                ctx.lineTo(cx,DoughnutHeight);

                ctx.moveTo(0,cy);
                ctx.lineTo(DoughnutWidth,cy);

                //lower line
                ctx.moveTo(0,5);
                ctx.lineTo(DoughnutWidth,5);

                ctx.stroke();

                //draw box showing padding
                /*
                ctx.lineWidth=1;
                //ctx.strokeStyle="#0f0";
                ctx.rect(chartData.options.layout.padding.left,chartData.options.layout.padding.top,DoughnutWidth,DoughnutHeight);
                ctx.stroke();
                */
            }
            
            //draw the inner text and spi score...
            drawInnerText();

            //------total the alloc values...
            var i;
            var number_of_rows=ciambellaChartData.datasets[0].alloc.length;
            //console.log("number_of_rows: ",number_of_rows);
            var numOfSelectedSlices=0;
            var allocTotal=0;
            var countSelectedSlices=0;
            for (i=0; i<number_of_rows; i+=1) 
            {
                if(sliceIsVisible[i]==false){continue;}

                allocTotal+=ciambellaChartData.datasets[0].alloc[i];
                countSelectedSlices++;
            }

            numOfSelectedSlices=countSelectedSlices;

            //console.log("numOfSelectedSlices: "+numOfSelectedSlices);

            //------make array of normalized allocation slice anlges  (sliceAngle[])...
            var sliceAngle=[];
            countSelectedSlices=0;
            for (i=0; i<=number_of_rows; i+=1)  ///numOfSelectedSlices                           
            {   
                if(sliceIsVisible[i]==false){continue;}

                sliceAngle[countSelectedSlices]=(ciambellaChartData.datasets[0].alloc[i]/allocTotal)*360;
               
               //console.log("sliceAngle["+countSelectedSlices+"]: "+sliceAngle[countSelectedSlices]);
               
                countSelectedSlices++;
            }   
            
            //make list of summed slice angles (arcAngle[])...
            var totalAngle=0;
            var arcAngle=[];
            for (i=0; i<numOfSelectedSlices; i+=1) 
            {
                totalAngle=0;
                for (var j=0; j<i; j+=1)
                {
                    totalAngle+=sliceAngle[j];
                }
                arcAngle[i]=totalAngle;
            } 

            //------make array of midpoints, a1/2, a1+a2/2, a1+a2+a3/3, used in datapoint calc here and also used for labels in js...  
            var totalAngle=0;
            var midpoint=[];
            for (i=0; i<numOfSelectedSlices; i+=1)
            {
                totalAngle=0;
                for (j=0; j<i; j+=1)        // #### there was a j=1 and j<=i-1 here, double check that is is right!!!!!!! ####
                {
                    totalAngle+=sliceAngle[j];
                }
                midpoint[i]=totalAngle+sliceAngle[j]/2;
            }  

            //------make array of impacts  (impact[])...
            var impact=[];
            countSelectedSlices=0;
            for (i=0; i<number_of_rows; i+=1)                             
            {   
                if(sliceIsVisible[i]==false){continue;}
                impact[countSelectedSlices]=(ciambellaChartData.datasets[0].impact[i]);
                countSelectedSlices++;
            }   

            //------make array of inner_limit (inner_limit[])...
            var inner_limit=[];
            countSelectedSlices=0;
            for (i=0; i<number_of_rows; i+=1)                             
            { 
                if(sliceIsVisible[i]==false){continue;}  
                inner_limit[countSelectedSlices]=(ciambellaChartData.datasets[0].inner[i]);
                countSelectedSlices++;
            }   

            //------make array of outer_limits  (outer_limit[])...
            var outer_limit=[];
            countSelectedSlices=0;
            for (i=0; i<number_of_rows; i+=1)                             
            {   
                if(sliceIsVisible[i]==false){continue;}
                outer_limit[countSelectedSlices]=(ciambellaChartData.datasets[0].outer[i]);
                countSelectedSlices++;
            }   
            //console.log('outer_limit[0] = ' + outer_limit[0]);


            //------ Calculate data points array... 
            var angle=0;
            var f=Math.PI/180;
            //console.log("f: " + f);   //0.01745 correct                    ************************
            var px=[],py=[];
            var offset=90; 
            var r=outerRadius;   //100 * (DoughnutWidth/235); //chart.outerRadius-3;
            //console.log('r = ' + r);                                //NaN
            var ra=r *.6;  // *.6;  //ra=r*.6;//*1.83; //1.85;
            var ir=innerRadius;   //40 * (DoughnutWidth/235); //chart.innerRadius;                               //undefined
            //console.log('ir = ' + ir);

            //make array of points...  
            for (var a=0; a<countSelectedSlices; a+=1) 
            {
                angle=360-midpoint[a];  

                //this SPi figure is currently calculated in this version of the ciambella-chart-plugin from impact[], outer_limit[], inner_limit[] arrays. 
                //But in the final version of the plugin, the SPi figure will be retrieved from the spi[] array in the data that is returned from the grid.php API.
                //In the grid.php response it is called 'score'. In the JSON data spi[] array is used for displaying SPi in the chart tooltip hover labels.

                var spi=(impact[a])/(outer_limit[a]-inner_limit[a]);     
                
                //*******************************
                //Something goes wrong when SPi==0. The above SPi calc is not the final formula and it's not the same as in makegrid.php - Morris needs to fix this.
                //correct for zero prob...   
                if (spi == "")
                {
                    spi=0.00001;
                }
                
                //correct for out of range above values...
                if (spi >= 1.4)
                {
                    spi=1.4;
                }

                //correct for out of range below values...   
                if (spi <= -0.3)
                {
                    spi=-0.3;
                }
                
                px[a]=cx+((spi*ra)+ir)*Math.sin((angle+offset)*f);
                py[a]=cy+((spi*ra)+ir)*Math.cos((angle+offset)*f);
                //console.log('px['+a+'] = ' + px[a]);
            }
            
            //---------------- Draw datapoint connecting lines ----------------


            /*  draw inner and outer blue circles, NO LONGER NEEDED, so it's now commented out.  */

            /*

                //ctx.stroke();               
                //draw chart outer circle...
                ctx.lineWidth=1;
                ctx.strokeStyle="#00f";
                ctx.beginPath();
                ctx.arc(cx,cy, outerRadius+1, 0, 2*Math.PI);
                ctx.stroke();

                //draw chart inner circle...
                ctx.beginPath();
                ctx.arc(cx,cy, innerRadius-1, 0, 2*Math.PI);
                ctx.stroke(); 
             
            */



            //move pen to first point location...
            ctx.beginPath();
            ctx.moveTo(px[0],py[0]);

            ctx.lineWidth=LineWidth;  
            ctx.strokeStyle="#00f";
            ctx.lineJoin='round';

            //start at first point (i=0)...
            for (i = 0; i <countSelectedSlices; i++) {            //numOfSlices
                ctx.lineTo(px[i],py[i]);
            }
            ctx.stroke();

          
            //---------------- join last datapoint to fisrt ----------------
            //move pen to first point location...
            ctx.beginPath();
            ctx.moveTo(px[0],py[0]);  //this should be the index of the first visible dot
            ctx.strokeStyle="#00f";
            ctx.lineTo(px[countSelectedSlices-1],py[countSelectedSlices-1]);  //this should be the index of the last visible dot
            ctx.stroke();
            
            //stop the radius from going negative when the chart is shrunk, when the screen is too narrow....
            if (DataDotRadius<0){DataDotRadius=0;}
  
            //---------------- Draw Datapoints ----------------
            ctx.lineWidth=1;
            
            for (i = 0; i < countSelectedSlices; i++) 
            {
                ctx.beginPath();
                ctx.moveTo(px[i]+DataDotRadius,py[i]);
                ctx.strokeStyle="black";
                ctx.arc(px[i],py[i],DataDotRadius,0,Math.PI*2,true);
                ctx.stroke();
                ctx.fillStyle="#ff0";
                ctx.fill();
            }        

            //---------------- Make first datapoint green ----------------
            ctx.beginPath();
            ctx.moveTo(px[0]+DataDotRadius,py[0]);
            ctx.arc(px[0],py[0],DataDotRadius,0,Math.PI*2,true);
            ctx.fillStyle="#0f0";
            ctx.fill();
            
            //---------------- make last datapoint red ----------------
            
            ctx.beginPath();
            ctx.moveTo(px[countSelectedSlices-1]+DataDotRadius,py[countSelectedSlices-1]);
            ctx.arc(px[countSelectedSlices-1],py[countSelectedSlices-1],DataDotRadius,0,Math.PI*2,true);
            ctx.fillStyle="red";
            ctx.stroke();
            ctx.fill(); 
            

            //------------------------------------------------------------------------
            //---------------- Draw SPI figure in center of the chart ---------------- 
        
            function drawInnerText() 
            {
                //draw spi scaled by chart.innerRadius...
                var textScalingFactor=42;
                var calculatedFontSize=30*(innerRadius/textScalingFactor);
                var calculatedLabelFontSize=6*(innerRadius/textScalingFactor);
                var calculatedLabelY=cy+10*(innerRadius/textScalingFactor);
                var calculatedURLLabelFontSize=6*(innerRadius/textScalingFactor);
                var calculatedURLLabelY=cy+10*(innerRadius/textScalingFactor);

                ctx.font = "normal "+calculatedFontSize+"px Arial";
                ctx.fillStyle = "#25BDE2";
                ctx.strokeStyle="#109DC2";
                ctx.strokeWidth = "5px";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                var spiScore=parseFloat(ciambellaChartData.datasets[0].spiScore).toFixed(3);

                ctx.fillText(spiScore, cx,cy);
                ctx.strokeText(spiScore, cx,cy);

                //draw label...
                ctx.font = "normal "+calculatedLabelFontSize+"px Arial";
                ctx.fillStyle = "black";

                //console.log("cy-33*(chart.innerRadius/textScalingFactor): "+(cy-33*(chart.innerRadius/textScalingFactor)));
                //console.log("chart.ctx: "+chart.ctx);
                //console.log("ctx: "+ctx);


                ctx.fillText("Sustainability", cx,cy-33*(innerRadius/textScalingFactor));
                ctx.fillText("Performance", cx,cy-26*(innerRadius/textScalingFactor));
                ctx.fillText("Index", cx,cy-19*(innerRadius/textScalingFactor));

                //draw url...
                ctx.font = "normal "+calculatedURLLabelFontSize+"px Arial";
                ctx.fillStyle = "black";

                ctx.fillText("strive2thrive.earth", cx,cy+21*(innerRadius/textScalingFactor));
            }
        }
        
    };


   //The legend click handlder...
   var legendClick = function (e, legendItem) 
   {
     //this event handler would not be needed if the plugin could access the boolean state of the legend item. Cant do it. 
     //So this event handler toggles the boolean state of the global array, then redraw the dots and lines.
     //have to use: legendItem.index from v3.2.1 code in v2.8.0... 
     var index = legendItem.index; //3.2.1

     //as there is no: legendItem.datasetIndex in v2.8.0
     //var index = legendItem.datasetIndex; //2.8.0

     //===THIS IS THE OPPOSITE TO THE DOCUMENTATION===

     //toggle the value of the boolean array sliceIsVisible[sliceNumber]...
     if (sliceIsVisible[index]==false)
     {
       sliceIsVisible[index]=true;
     }
     else
     {
       sliceIsVisible[index]=false;
     }

     var ci = this.chart;

     // We hid a datadot so rerender the dots and connecting lines...
     ci.update();

     //This fixes updating the slices: https://github.com/chartjs/Chart.js/issues/5465

     //We have toggled the visability of a slice so update the chart...
     //don't know how to in react so I'm commenting this out...
     //this.Chart.defaults.doughnut.legend.onClick.call(this, e, legendItem);
   }

      


//ciambella chart options...
const ciambellaChartOptions = {

   responsive: true,
   maintainAspectRatio: true,
   hoverBorderColor: "#000",
   hoverBorderWidth: 3,
   borderColor: "White",
   borderWidth: 1,
   borderAlign: 'inner',
   cutout: '40%',
   rotation: 90, /*radians, -Math.PI to Math.PI, -0.5 * Math.PI is start at top, 0 starts at right center (it is also 0 degrees), now in react it needs to be 90 degrees*/
/*    circumference: 2*Math.PI,  //this is the default, don't need to set it */
   plugins: {
       legend: {
        position: 'bottom',
        display: false,
        maxWidth: 200,
        onClick: legendClick 
      },
        tooltip: 
        {
            enabled: true,
            callbacks: 
            {
                label: function(tooltipItem, data) 
                {
                    //display SPi score on the tooltip when hovering over a slice...    
                    var sliceNum=tooltipItem.dataIndex;
  
                    //console.log(tooltipItem); // Logs the object to console.
  
                    //Data can be accessed like this:
                    //var label = ciambellaChartData.labels[1];
                    var label = tooltipItem.label;
                    var spiScore=ciambellaChartData.datasets[0].spi[sliceNum]; 
  
                    return (label+" SPi: "+spiScore);
                }
            }
     
        },
    },
   layout: { 
       padding: {
           left: 30,
           right: 30,
           top: 70,
           bottom: 70
       }
   }
}; 


var ciambellaChartData = { 
    datasets: [
        {
            label: "Ciambella Chart",          
            backgroundColor: ["#D0D0D0","#C0C0C0","#B0B0B0","#8FC5FE","#72B3F6","#55A2EE","#3990E6","#1C7FDE","#006ED6","#C0E6B5","#A4E4B5","#89D2A6","#6DC097","#52AF87","#369D78","#1B8B69","#007A5A","#FDA1A0","#F69796","#F08E8D","#EA8583","#E47C7A","#DE7370","#D76967","#D1605E","#CB5754","#C54E4B","#BF4541","#B93C38","#B2322F","#AC2925","#A6201C","#A01712","#9A0E09","#940500","#840300"],
            data: [50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84], /* slices values, same as alloc, when putting data in here replicate the data: [] array into the alloc[] array. */
            alloc: [50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84,50,60,65,22.5,53,84],
            inner: [1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1],
            outer: [11,11,11,10,10,11,11,11,10,10,11,11,11,11,11,10,10,11,11,11,10,10,11,11,11,11,11,11,10,10,11,11,11,10,10,11,11], 
            impact: [0.01,10,-2,19,.1,1,10,-2,14,.1,1,10,19,10,-2,14,.1,1,19,-2,14,.1,1,19,10,19,10,-2,14,.1,1,19,-2,14,.1,1,19],
            topicId: ["101","102","103","201","202","203","204","205","206","301","302","303","304","305","306","307","308","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","419"],
            spi: [0.001,1,-0.181,1.1,0.001,0.1,1,-0.181,1.4,0.001,0.1,1,1.9,1,-0.181,1.4,0.001,0.1,1.9,-0.181,1.4,0.001,0.1,1.9,1,1.9,1,-0.181,1.4,0.001,0.1,1.9,-0.181,1.4,0.001,0.1,1.9],
            spiScore:1.358,
            entity:"Gadgets With Vitality",
            stockCode:"GWVWH",
            classification: "GRIS"
        }
    ],            
    labels: ["Foundation","General Disclosures","Management Approach","Economic Performance","Market Presence","Indirect Economic Impacts","Procurement Practices","Anti-corruption","Anti-competitive Behavior","Materials","Energy","Water","Biodiversity","Emissions","Effluents and Waste","Environmental Compliance","Supplier Environmental Assessment","Employment","Labor/Management Relations","Occupational Health and Safety","Training and Education","Diversity and Equal Opportunity","Non-discrimination","Freedom of Association and Collective Bargaining","Child Labor","Forced or Compulsory Labor","Security Practices","Rights of Indigenous Peoples","Human Rights Assessment","Local Communities","Supplier Social Assessment","Public Policy","Customer Health Safety","Marketing and Labelling","Customer Privacy","Socioeconomic Compliance"]
};


//temp bg colours were: '#E5233B','#DCA63A','#4C9E38','#C51A2D','#FF3A20','#25BDE2','#FBC30A','#A21A42','#FD6824','#DD1367','#FD9D25','#C08A30','#E5233B','#DCA63A','#4C9E38','#C51A2D','#FF3A20','#25BDE2','#FBC30A','#A21A42','#FD6824','#DD1367','#FD9D25','#C08A30','#C08A30','#E5233B','#DCA63A','#4C9E38','#C51A2D','#FF3A20','#25BDE2','#FBC30A','#A21A42','#FD6824','#DD1367','#FD9D25'


//these should be added to this plugin file: drawlegend, toggleTopic

export {sliceIsVisible, ciambellachartplugin, ciambellaChartOptions, ciambellaChartData, legendClick};
