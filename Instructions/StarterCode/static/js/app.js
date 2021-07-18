/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code */

// Define function that will run on page load
function init() {
    nameSel = d3.select("#selDataset");
    // Read json data
    d3.json("samples.json").then(function (response) {

        console.log(response);
        arr = response.names;
        arr.forEach((nam) => {

            nameSel.append("option").text(nam).property("value", nam);
        })
        buildMetadata(arr[0])
        buildCharts(arr[0])



    });

}

// Parse and filter data to get sample names

// Add dropdown option for each sample

// Call functions below using the first sample to build metadata and initial plots



// Define a function that will create metadata for given sample
function buildMetadata(sample) {
    console.log(sample)
    //panelsel = d3.select(".panel panel-primary")
    panelsel = d3.select("#sample-metadata")
    // Read the json data
    d3.json("samples.json").then(function (response) {
        metadata = response.metadata
        //list_metadata=Object.entries(metadata)
        //console.log(list_metadata)
        let sample_demo = metadata.filter(sam => sam.id == sample)
        sample_subset = sample_demo[0]
        sam_data = Object.entries(sample_subset)
        sam_data.forEach(([key, value]) => {
            //console.log([key,value])
            panelsel.append("p").text(`${key} : ${value}`)
            //console.log(panelsel)
            // append the information to the demographics panel
            // using the variables key and value
        })
    //washing frequency guage chart
        listFreq=sam_data.map(object => object.wfreq)
        console.log(listFreq)

    });



    // Parse and filter the data to get the sample's metadata

    // Specify the location of the metadata and update it

}

// Define a function that will create charts for given sample
function buildCharts(sample) {
    //console.log(sample)
    // Read the json data
    d3.json("samples.json").then(function (response) {
        samplesWhole = response.samples
        let subset = samplesWhole.filter(sam => sam.id == sample)
        console.log(subset)
        result = subset[0]
        var ids = result.otu_ids;
        var labels = result.otu_labels;
        var sample_values = result.sample_values;
        console.log(ids)
        console.log(sample_values)

        var id = ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        console.log(id)
        var samValue = sample_values.slice(0, 10).map(val => val).reverse();
        console.log(samValue)
        var labels = labels.slice(0, 10).map(lab => lab).reverse();
        console.log(labels)

        //bar chart
        // Trace1 for the Greek Data
        let trace1 = {
            x: samValue,
            y: id,
            name: "Greek",
            type: "bar",
            orientation: "h"
        };
        let traceData = [trace1];
        // Apply a title to the layout
        let layout = {
            title: "Greek gods search results",
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
            }

        }

        // Render the plot to the div tag with id "plot"
        // Note that we use `traceData` here, not `data`
        Plotly.newPlot("bar", traceData, layout);

        //BUBBLE CHARTS
        var allId = ids.map(otuID => otuID);
        console.log(allId)
        var allValue = sample_values.map(val => val);
        console.log(allValue)
        var allLabels = labels.map(lab => lab);
        console.log(allLabels)

        trace = {
            x: allId,
            y: allValue,
            marker: {
                color: allId,
                size: allValue},
                mode: 'markers'
            };
            Plotly.plot('bubble', [trace]);

        




    });



    // Parse and filter the data to get the sample's OTU data
    // Pay attention to what data is required for each chart

    // Create bar chart in correct location

    // Create bubble chart in correct location

}


function optionChanged(sample) {
    // The parameter being passed in this function is new sample id from dropdown menu
    //console.log(sample);
    // Update metadata with newly selected sample
    buildMetadata(sample)
    // Update charts with newly selected sample
    buildCharts(sample)

}

// Initialize dashboard on page load
init();
