# Project_3

## Table of Contents
* [Overview](#overview-and-project-proposal)
* [Data Sources](#data-sources)
* [ETL](#etl)
* [Deployment](#deployment)
* [Limitations](#limitations)
* [Analysis and Conclusions](#analysis-and-conclusions)
* [Flask Endpoints and Instructions](#flask-endpoints-and-instructions)
* [Credits](#credits)

### Overview and Project Proposal
We have decided to choose the topic of the healthcare industry to explore one of the major threats to the worldwide human health focusing on the analysis of the bacterial antimicrobial resistance (AMR). We decided to examine and graph data published on the global burden of antimicrobial resistance (AMR) and determine whether the regional AMR burden correlates with regional health spending. 

The aim of our project is to visualize patterns and tends in AMR across different parts of the world as published in Charani et. al. We would like to show via interactive charts which region is the most impacted by resistance to each antibiotic class, what health spending looks like in each region, and whether the AMR burden correlates to the amount spent on healthcare in a given region.

The AMR data is published, and the publication can be examined at the link below. 

## Data Sources
* The AMR data was sourced from the publication "Global burden of antimicrobial resistance: essential pieces of a global puzzle" by Charani et al published in The Lancet (https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)00935-7/fulltext). 
* The health spending data was sourced from the Global Health Expenditure Database via the World Health Organization (WHO) (https://apps.who.int/nha/database). 
* The coordinates for each country were sourced from a dataset on Kaggle (https://www.kaggle.com/datasets/paultimothymooney/latitude-and-longitude-for-every-country-and-state?resource=download). 
* The list of countries belonging to each region was scraped from the Global Health Data Exchange website (which is the site where the AMR data is posted), from the Countries page (https://ghdx.healthdata.org/countries). 

## ETL
* To extract and clean the data:
    * Download the AMR, health spending, and country coordinate datasets and update the country_scraping.ipynb and population_healthSpending.ipynb files with the filepath to a folder containing the resulting CSV files
    * Run the country_scraping.ipynb file
        * This will scrape the list of countries in each region from the Global Health Data Exchange website and output a csv file with country, region, associated IDs, and country coordinates to the CSV folder, called countries.csv, for loading into a sqlite database.
    * Run the population_healthSpending.ipynb file 
        * This will clean the health spending dataset and output a CSV file called spending_pop.csv for loading into a sqlite database.
* To create the database and load the data: 
    * Change the filepath in the database_creation.py file to match the parent folder that contains the folder of CSVs produced above and the AMR data (that does not require cleaning) and an empty folder called 'database' where the sqlite database will be created.
    * Ensure the filepaths in the database_creation.py file match the locations of each CSV file for input and the database itself.
    * Run database_creation.py to create the sqlite database and load in the CSV files.
* NOTE: The database is available on github, so these steps should be unnecessary to run the web pages. 

## Deployment
* The webpages pull from a Flask server, so the server must be running for the data to populate on the webpages.
* Run the app.py file from the terminal to start the Flask server.
* The website can now be accessed using any of the html files in the HTML folder. 
    * Each html page links to every other page, so once one page has been opened navigation between pages can be performed using the links in the header or footer. 

## Limitations
* The datasets utilized are large, and as such local download of CSV files is required to run data cleaning and database population files. In order to clean the data and create the database the AMR, health spending, and country coordinates datasets must be downloaded and the filepaths in the country_scraping.ipynb and population_healthSpending.ipynb files must be updated to reflect the locations of the local downloaded CSV files. 
* The AMR data is only available by region while the health spending data is only available by country, so countries belonging to each region as defined by the Global Health Data Exchange was used to compare health spending to AMR burden. This means that any country in the health spending dataset that was not listed as part of a region in the Global Health Data Exchange is omitted from the analysis. 
* The AMR data is only available for 2019. This means that while health spending data is available for many different years, in the analysis of discrete health spending compared to AMR burden only 2019 is considered. 
* For the following conclusions and analysis, resistance of all pathogens to penicillin and health spending change from 2010 - 2019 were used to represent the data.
    * Analysis of other antibiotic resistance patterns compared to health spending patterns may result in different conclusions
* No regression was performed; to make analysis and conclusions more clear, a regression line would be ideal

## Analysis and Conclusions
* This project provides an interactive way to view the data published by Charani et al regarding AMR-associated deaths related to different antibiotics over each global region
* Minor additional analysis is provided by the addition of health spending data and its correlation with the AMR dataset. 
    * Per capita health spending appears to correlate to deaths associated with penicillin resistance, in what appears at a glance to be a logarithmic pattern.
        * Overall, the highest number of deaths per 100,000 population associated with penicillin resistant pathogens occured in countries with among the lowest per capita health spending (in particular, Western Sub-Saharan Africa).
    * Change in health spending from 2010 - 2019 appears to loosely correlate with deaths associated with penicillin resistance, in what appears at a glance to be a linear pattern.
        * Overall, the countries that decreased or didn't change their health spending from 2010 to 2019 have the highest rate of deaths associated with penicillin-resistant pathogens in deaths per 100,000 population (with the highest rate by far in Western Sub-Saharan Africa). 
    * The AMR publication does include analyses of the income level of the regions, and noted that AMR burden is highest in some lower and middle income countries, though this is not included in our visualizations. Health spending can likely be used as a proxy for income level of the regions, so our conclusions in this mirror those published by Charani et al. 

## Flask Endpoints and Instructions
The Flask API is set up to return JSONs of filtered sections of the datasets. It is set up with CORS, such that it can be programmatically accessed via JavaScript code. In order to run the Flask API, the database must be available at the filepath specified in the "app.py" file. Endpoints are as follows:
* "/api/v1.0/alldata"
    * Returns all data in JSON format without any filters; this takes a very long time to load and may require reloading
* "/api/v1.0/countries"
    * Returns all countries with ids, latitude, and longitude in JSON format without filters
* "/api/v1.0/regions"
    * Returns all regions with ids in JSON format without filters; aggregate regions have been removed
* "/api/v1.0/spending"
    * Returns all spending population data in JSON format without filters
* "/api/v1.0/amr"
    * Returns all AMR data in JSON format without filters
* "/api/v1.0/countries/all_regions"
    * Returns a list of dictionaries with each country and its region
* "/api/v1.0/countries/(region)"
    * Returns a list of countries that are part of the input region; can use with /api/v1.0/amr/locations endpoint to specify a region
* "/api/v1.0/amr/pathogens"
    * Returns a list of all available pathogens, including total; for potential use in dropdown creation
* "/api/v1.0/amr/infectious_syndromes"
    * Returns a list of all AMR infectious syndromes; for potential use in dropdown creation
* "/api/v1.0/amr/antibiotic_classes"
    * Returns a list of all AMR antibiotic classes; for potential use in dropdown creation
* "/api/v1.0/amr/pathogen/(pathogen)"
    * Returns filtered data by pathogen, for measure=Deaths, age_group=All Ages, and counterfactual=Drug Suceptible Infection
* "/api/v1.0/amr/region/(region)"
    * Returns filtered data by location, for measure=Deaths, age_group=All Ages, and counterfactual=Drug Suceptible Infection
* "/api/v1.0/amr/infectious_syndrome/(infectious syndrome)"
    * Returns filtered data by infectious syndrome, for measure=Deaths, age_group=All Ages, and counterfactual=Drug Suceptible Infection
* "/api/v1.0/amr/antibiotic_class/(antibiotic class)"
    * Returns filtered data by antibiotic class, for measure=Deaths, age_group=All Ages, and counterfactual=Drug Suceptible Infection
* "/api/v1.0/amr/three_filters/(pathogen)/(infectious_syndrome)/(antibiotic_class)"
    * Returns AMR data for each region filtered by pathogen, infectious syndrome, and antibiotic class, for measure=Deaths, age_group=All Ages, and counterfactual=Drug Suceptible Infection
* "/api/v1.0/spending/year_list"
    * Returns a list of years for which there's data on health spending and population; for potential use in dropdown creation
* "/api/v1.0/spending/year"
    * Returns spending and population data for one year - takes an input of a year, should be 4 digits, and returns data for that year - grouped by region; for graph creation and changing
        * Note: any datapoints without a defined region are omitted
        * Note: the default year should be 2019, since this is the year all of the AMR data is from
* "/api/v1.0/spending/(start_year)/(end_year)"
    * Returns spending and population data for a range of years - takes an input of start and end years, should be 4 digits, and returns data for the years in between, inclusive of the ends
        * Note: any datapoints without a defined region are omitted
* "/api/v1.0/spending/spending_change/(start_year)/(end_year)"
    * Returns percent spending change per capita over a range of years - takes an input of start and end years, should be 4 digits, and returns percent change per capita normalized by number of years - grouped by region

## Credits 
This project was made by the jointed efforts of a team of collaborators listed below:
* Sarah Kronheim  - https://www.linkedin.com/in/sarah-kronheim-019404137/
* Brenda Wardhaugh - https://www.linkedin.com/in/brendawardhaugh/
* Dianne Etmanski  - https://www.linkedin.com/in/dianne-etmanski-b37541b2/
* Anabel Scaranelo - https://linkedin.com/in/anabel-scaranelo-md-phd-fsbi-6b3598144