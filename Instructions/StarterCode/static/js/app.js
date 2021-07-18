/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code */

// Define function that will run on page load
function init() {
    nameSel=d3.select("#selDataset");
    // Read json data
    d3.json("samples.json").then(function (response) {

        console.log(response);
        arr=response.names;
        arr.forEach((nam) =>{
        
          nameSel.append("option").text(nam).property("value",nam);
        })
        buildMetadata(arr[0])
        // Update charts with newly selected sample
        buildCharts(arr[0])    
    

    });

}

    // Parse and filter data to get sample names

    // Add dropdown option for each sample

    // Call functions below using the first sample to build metadata and initial plots



    // Define a function that will create metadata for given sample
    function buildMetadata(sample) {
        console.log(sample)

        // Read the json data
        d3.json("samples.json").then(function (response){
            metadata=response.metadata
            list_metadata=Object.entries(metadata)
            //console.log(c)
            let sample_demo = list_metadata.filter(sample => sample.id ===sample)
            console.log(sample_demo)
        });


        // Parse and filter the data to get the sample's metadata

        // Specify the location of the metadata and update it

    }

    // Define a function that will create charts for given sample
    function buildCharts(sample) {
        //console.log(sample)
        // Read the json data
        d3.json("samples.json").then(function (response){
            console.log(response.samples.id)
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
