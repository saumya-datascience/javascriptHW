
# javascriptHW Plot.ly Homework - Belly Button Biodiversity 
## Outcome
An interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

1. Populated a dropdown menu with all of the Sample ID's. When an option is selected, this will update all of the charts.

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

	* Used `sample_values` as the values for the bar chart.
  * Used `otu_ids` as the labels for the bar chart.
  * Used `otu_labels` as the hovertext for the chart.

  ![bar Chart](https://github.com/saumya-datascience/javascriptHW/blob/main/Instructions/Images/newplot.png)

3. Created a bubble chart that displays each sample.

* Used `otu_ids` for the x values.

* Used `sample_values` for the y values.

* Used `sample_values` for the marker size.

* Used `otu_ids` for the marker colors.

* Used `otu_labels` for the text values.

![Bubble Chart](https://github.com/saumya-datascience/javascriptHW/blob/main/Instructions/Images/newplot%20(2).png)

4. Displayed sample metadata, i.e., an individual's demographic information.

	* Displayed each key-value pair from the metadata JSON object somewhere on the page.

5. Update all of the plots any time that a new sample is selected.


![hw](Images/hw02.png)

## Advanced Challenge Assignment (Optional)

The following task is advanced and therefore optional.

* Adapted the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.



![Weekly Washing Frequency Gauge](https://github.com/saumya-datascience/javascriptHW/blob/main/Instructions/Images/newplot%20(1).png)

## Deployment

* Deployed  app to a free static page hosting service, such as GitHub Pages. Submited the links to deployment and github page.





