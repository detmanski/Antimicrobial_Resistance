# Project_3

# Table of Contents
* [Overview](#overview)
* [Data Sources](#data-sources)
* [Limitations](#limitations)
* [Analysis and Conclusions](#analysis-and-conclusions)
* [Flask Endpoints and Instructions](#flask-endpoints-and-instructions)

## Overview

We decided to examine and graph data published on the global burden of antimicrobial resistance (AMR). 

The aim of our project is to visualize patterns and tends in AMR across different parts of the world as published in Charani et. al. We would like to show via interactive charts which bactria is the most prevalent in terms of drug resistance, what are the global regions most affected by AMR, whether the AMR burden correlates at all to the amount spent on health in a given region.

## Data Sources
* The AMR data was sourced from the publication "Global burden of antimicrobial resistance: essential pieces of a global puzzle" by Charani et al published in The Lancet (https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)00935-7/fulltext). 
* The health spending data was sourced from the Global Health Expenditure Database via the World Health Organization (WHO) (https://apps.who.int/nha/database). 
* The coordinates for each country were sourced from a dataset on Kaggle (https://www.kaggle.com/datasets/paultimothymooney/latitude-and-longitude-for-every-country-and-state?resource=download). 
* The list of countries belonging to each region was scraped from the Global Health Data Exchange website (which is the site where the AMR data is posted), from the Countries page (https://ghdx.healthdata.org/countries). 

## Limitations
* The AMR data is only available by region while the health spending data is only available by country, so countries belonging to each region as defined by the Global Health Data Exchange was used to compare health spending to AMR burden. This means that any country in the health spending dataset that was not listed as part of a region in the Global Health Data Exchange is omitted from the analysis. 
* The AMR data is only available for 2019. This means that while health spending data is available for many different years, in the analysis of discrete health spending compared to AMR burden only 2019 is considered. 

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