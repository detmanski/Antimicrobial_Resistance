# Project_3

### Project Proposal
We have decided to choose the topic of the healthcare industry to explore one of the major threats to the worldwide human health focusing on the analysis of the bacterial antimicrobial resistance (AMR). The aim of our project is to uncover patterns and tends in AMR across different parts of the world. The goals of undertaken this project are to answer some important questions related to AMR. We would like to demonstrate which bacteria is the most prevalent in terms of drug resistance, what are the global regions most affected by AMR, and which germs are the most frequently found as well as have the worst symptoms.

Data set:
https://www.thelancet.com/action/showPdf?pii=S0140-6736%2821%2902724-0
We will be using the data set and ideas from this study to complete our project.


## Analysis and Conclusions
**@Group - This section can be populated once the visualizations are finished, with answers to the questions posed above**

## Flask Endpoints and Instructions
The Flask API is set up to return JSONs of filtered sections of the datasets. It is set up with CORS, such that it can be programmatically accessed via JavaScript code. In order to run the Flask API, the database must be available at the filepath specified in the "app.py" file. Endpoints are as follows:
* "/api/v1.0/alldata" 
    * Returns all data in the database
    * NOTE: This is a lot of data and may take time, time out, or otherwise result in errors
* "/api/v1.0/countries"
    * Returns all countries with ids, latitude, and longitude in JSON format without filters
* "/api/v1.0/regions"
    * Returns all regions with ids in JSON format without filters
* "/api/v1.0/spending"
    * Returns all spending population data in JSON format without filters
* "/api/v1.0/amr"
    * Returns all AMR data in JSON format without filters
    * NOTE: This is a very large dataset and using this endpoint may result in errors
* "/api/v1.0/countries/all_regions"
    * Returns a list of dictionaries with each country and its region
* "/api/v1.0/countries/(region)"
    * Returns a list of countries that are part of the input region
* "/api/v1.0/amr/pathogens"
    * Returns a list of all available pathogens, including total
* "/api/v1.0/amr/locations"
    * Returns a list of all AMR regions by name
* "/api/v1.0/amr/infectious_syndromes"
    * Returns a list of all AMR infectious syndromes
* "/api/v1.0/amr/antibiotic_classes"
    * Returns a list of all AMR antibiotic classes
* "/api/v1.0/amr/pathogen/(pathogen)"
    * Returns filtered data by pathogen, for measure=Deaths, age_group=All Ages, and counterfactual=Drug Suceptible Infection
* "/api/v1.0/amr/location/(location)"
    * Returns filtered data by location, for measure=Deaths, age_group=All Ages, and counterfactual=Drug Suceptible Infection
* "/api/v1.0/amr/infectious_syndrome/(infectious syndrome)"
    * Returns filtered data by infectious syndrome, for measure=Deaths, age_group=All Ages, and counterfactual=Drug Suceptible Infection
* "/api/v1.0/amr/antibiotic_class/(antibiotic class)"
    * Returns filtered data by antibiotic class, for measure=Deaths, age_group=All Ages, and counterfactual=Drug Suceptible Infection
* "/api/v1.0/spending/year_list"
    * Returns a list of years for which there's data on health spending and population
* "/api/v1.0/spending/(year)"
    * Returns spending and population data for one year - takes an input of a year, should be 4 digits, and returns data for that year - grouped by region
    * Note: any datapoints without a defined region are omitted
    * Note: the default year is be 2019, since this is the year all of the AMR data is from
* "/api/v1.0/spending/start_year/end_year"
    * Returns spending and population data for a range of years - takes an input of start and end years, should be 4 digits, and returns data for the years in between, inclusive of the ends and grouped by region
    * Note: any datapoints without a defined region are omitted
* "/api/v1.0/spending/spending_change/(start_year)/(end_year)"
    * Returns percent spending change per capita over a range of years - takes an input of start and end years, should be 4 digits, and returns percent change per capita normalized by number of years and grouped by region
    *## Project_3 team members:

<h2>Credits:</h2>
This project was made by the jointed efforts of a team of collaborators listed below:
<ol>Sarah Kronheim  - https://www.linkedin.com/in/sarah-kronheim-019404137/
<ol>Brenda Wardhaugh - https://www.linkedin.com/in/brendawardhaugh/
<ol>Dianne Etmanski  - https://www.linkedin.com/in/dianne-etmanski-b37541b2/
<ol>Anabel Scaranelo - https://linkedin.com/in/anabel-scaranelo-md-phd-fsbi-6b3598144
