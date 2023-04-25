# Project_3

## Table of Contents
* [Overview](#overview-and-project-proposal)
* [Data Sources](#data-sources)
* [ETL](#etl)
* [Deployment](#deployment)
* [Limitations](#limitations)
* [Analysis and Conclusions](#analysis-and-conclusions)
* [Flask Instructions](#flask-instructions)
* [Credits](#credits)

http://detmanski.github.io/Project_3/

### Overview and Project Proposal
We have decided to choose the topic of the healthcare industry to explore one of the major threats to the worldwide human health focusing on the analysis of the bacterial antimicrobial resistance (AMR). We decided to examine and graph data published on the global burden of antimicrobial resistance (AMR) and determine whether the regional AMR burden correlates with regional health spending. 

The aim of our project is to visualize patterns and tends in AMR across different parts of the world as published in Charani et. al. We would like to show via interactive charts which region is the most impacted by resistance to each antibiotic class, what health spending looks like in each region, and whether the AMR burden correlates to the amount spent on healthcare in a given region. We aim to examine the following questions:
-	Which Pathogens, Antibiotic Classes and Infectious syndromes are associated with death?
-	Which regions of the world are most at risk and why? 
-	Does the amount of healthcare spending affect the risk of the population to AMR’s?


AAntimicrobial resistance occurs when bacteria evolve to resist antibiotics . These microorganisms can adapt in a way that makes them less vulnerable to the medications that once worked effectively against them. This can happen when certain pathogens are over exposed to antibiotics over time. The drugs become less effective over time, and it becomes harder to treat infections caused by the resistant microorganism. Antimicrobial resistance is a growing and major public health concern, and it can lead to more severe and longer-lasting illnesses, higher healthcare costs/burden, or death. 

Some ways that AMR’s are spread are:
-contaminated food or water (for example e.coli in lettuce cause by contaminated water sources; staph infections caused by improperly treated water in a spa)
-direct contact with infectious bodily fluid
- indirect contact (through touch or droplets)
-airborne transmission (tuberculosis)

Populations most at risk are: 
- People living in areas without reliable sources of clean water
-Pediatric and elderly populations due to underdeveloped or weak immune systems which cannot recover from severe illness 
-Patients within a healthcare setting: These patients have an extremely high risk and are often immunocompromised. Many people admitted to a healthcare setting display a variety of infectious syndromes and it is extremely important that they are controlled by proper cleaning, precautions and infection control measures. These populations are the most vulnerable

Our aim is to examine the following questions:
-	Which Pathogens, Antibiotic Classes and Infectious syndromes are associated with death?
-	Which regions of the world are most at risk and why? 
-	Does the amount of healthcare spending affect the risk of the population to AMR’s?


Which Pathogens, Antibiotic Classes and Infectious syndromes are associated with death?

-	This dataset looked at the datapoints that were associated with death. This parameter was used to filter the data because the data set was too large to have a broader scope. We chose to focus on the death parameter as opposed to chronic illness which is also explored in further detail in our data source. These plots are based on global data not filtered by region
	
-	The first plot refers to pathogens and the datapoints that were associated with death. 
-	This looks at data from 22 different AMR pathogens
-	From this plot we can conclude that the top five most dangerous antibiotic resistant pathogens are: 
-	1. E.Coli (caused by contaminated water)
-	2. K.Pneumonia- type of AMR pneumonia that affects more often older men with debilitating diseases such as respiratory diseases, diabetes, and liver disease
3&4.    P.aeruginosa and MRSA- high risk of transmission in health care environments

The second chart (this is a chart that can be changed with a dropdown menu) shows the number of datapoints associated with death by infectious syndrome. 
-	This data important because the syndromes can aid transmission of AMR pathogens
-	Illness and death are attributed to the multiple syndromes that AMR pathogens can produce. 
-	This chart looks at 11 different infectious syndromes and of those the top three most associated with death were:
-	1. Blood infections (sepsis)
-	2. Endocarditis (inflammation of the heart)
-	3. Urinary tract infections

The third chart shows the data associated with AMR deaths by Antibiotic class. This reflects the class of antibiotic to which its resistance can be associated with death. The two that stand out are:
1.	Resistance to one or more antibiotics- AMR pathogens associated with this category are most dangerous because they are resistant to several different antibiotics
2.	Floroquinolones- this antibiotic has the highest rate of AMR and therefore is no longer prescribed as a first line agent and instead is given to those who are not at risk for multidrug resistance and have had resistance to other antibiotics. It is often used to treat pneumonia.

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

## Flask Instructions
The Flask API is set up to return JSONs of filtered sections of the datasets. It is set up with CORS, such that it can be programmatically accessed via JavaScript code. In order to run the HTMLs, the Flask API must be running. To run the flask, run the "app.py" file.

## Credits 
This project was made by the jointed efforts of a team of collaborators listed below:
* Sarah Kronheim  - https://www.linkedin.com/in/sarah-kronheim-019404137/
* Brenda Wardhaugh - https://www.linkedin.com/in/brendawardhaugh/
* Dianne Etmanski  - https://www.linkedin.com/in/dianne-etmanski-b37541b2/
* Anabel Scaranelo - https://linkedin.com/in/anabel-scaranelo-md-phd-fsbi-6b3598144
