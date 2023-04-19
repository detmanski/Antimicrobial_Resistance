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
