#################################################
# Imports
#################################################

from sqlalchemy import create_engine, func
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base

from flask import Flask, jsonify

from flask_cors import CORS

#################################################
# Database Setup
#################################################
# Establishes the base filepath to find the database
## NOTE: This will be different for each computer
filepath = "C:/Users/kronh/OneDrive/Documents/UofTCoding_bootcamp/project_3_data"

# Create engine using the 'amr.sqlite' database file
engine = create_engine(f"sqlite:///{filepath}/database/amr.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to the tables
Regions = Base.classes.regions
Countries = Base.classes.countries
SpendingPop = Base.classes.spending_pop
AMR_data = Base.classes.amr_data

#################################################
# Flask Setup
#################################################

app = Flask(__name__)
CORS(app)

#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    print("Homepage has been accessed")
    return (
            f"Welcome to the antimicrobial resistance (AMR) impact API<br/>"
            f"Available paths:<br/>"
            f"/api/v1.0/alldata<br/>"
            f"• Returns all data in JSON format without any filters; this takes a very long time to load and may require reloading<br/>"
            f"/api/v1.0/countries<br/>"
            f"• Returns all countries with ids, latitude, and longitude in JSON format without filters<br/>"
            f"/api/v1.0/regions<br/>"
            f"• Returns all regions with ids in JSON format without filters<br/>"
            f"/api/v1.0/spending<br/>"
            f"• Returns all spending population data in JSON format without filters<br/>"
            f"/api/v1.0/amr<br/>"
            f"• Returns all AMR data in JSON format without filters<br/>"
            f"/api/v1.0/countries/region<br/>"
            f"• Returns a list of countries that are part of the input region; can use with /api/v1.0/amr/locations endpoint to specify a region<br/>"
            f"/api/v1.0/amr/pathogens<br/>"
            f"• Returns a list of all available pathogens, including total; for potential use in dropdown creation<br/>"
            f"/api/v1.0/amr/measures<br/>"
            f"• Returns a list of all tested measures; for potential use in dropdown creation<br/>"
            f"/api/v1.0/amr/locations<br/>"
            f"• Returns a list of all AMR regions by name; for potential use in dropdown creation<br/>"
            f"/api/v1.0/amr/counterfactuals<br/>"
            f"• Returns a list of all AMR counterfactuals; for potential use in dropdown creation<br/>"
            f"/api/v1.0/amr/ages<br/>"
            f"• Returns a list of all AMR ages; for potential use in dropdown creation<br/>"
            f"/api/v1.0/amr/infectious_syndromes<br/>"
            f"• Returns a list of all AMR infectious syndromes; for potential use in dropdown creation<br/>"
            f"/api/v1.0/amr/antibiotic_classes<br/>"
            f"• Returns a list of all AMR antibiotic classes; for potential use in dropdown creation<br/>"
            f"/api/v1.0/amr/(pathogen or location or infectious syndrome or antibiotic class)<br/>"
            f"• Returns filtered data by whatever is input of the items noted above, for measure=Deaths, age_group=All Ages, and counterfactual=Drug Suceptible Infection<br/>"
            f"/api/v1.0/spending/year_list<br/>"
            f"• Returns a list of years for which there's data on health spending and population; for potential use in dropdown creation<br/>"
            f"/api/v1.0/spending/year<br/>"
            f"• Returns spending and population data for one year - takes an input of a year, should be 4 digits, and returns data for that year - grouped by region; for graph creation and changing<br/>"
            f"• Note: any datapoints without a defined region are omitted<br/>"
            f"• Note: the default year should be 2019, since this is the year all of the AMR data is from<br/>"
            f"/api/v1.0/spending/start_year/end_year<br/>"
            f"• Returns spending and population data for a range of years - takes an input of start and end years, should be 4 digits, and returns data for the years in between, inclusive of the ends - grouped by region; for possible graph creation and changing<br/>"
            f"• Note: any datapoints without a defined region are omitted<br/>"
            f"<br/>"
            f"Sources are as follows:<br/>"
            f"The AMR dataset and analysis come from 'Global burden of bacterial antimicrobial resistance in 2012: a systematic analysis<br/>"
            f"by Murray et. al.(link below)<br/>"
            f"https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02724-0/fulltext<br/>"
            f"The health spending and population data come from the World Health Organization (below)<br/>"
            f"https://apps.who.int/nha/database<br/>"
            f"The latitude and longitude values for each country come from a dataset on Kaggle (below)<br/>"
            f"https://www.kaggle.com/datasets/paultimothymooney/latitude-and-longitude-for-every-country-and-state?resource=download"
    )

@app.route("/api/v1.0/alldata")
def alldata():
    print("The alldata endpoint has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database 
    country_data = session.query(Countries).all()
    region_data = session.query(Regions).all()
    spending_pop_data = session.query(SpendingPop).all()
    amr_data = session.query(AMR_data).all()

    # Close the session
    session.close()

    # Turn Countries into a list of dictionaries
    countries = []
    for item in country_data:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['region_id'] = item.region_id
        row_dict['country'] = item.country
        row_dict['country_code'] = item.country_code
        row_dict['latitude'] = item.latitude
        row_dict['longitude'] = item.longitude
        countries.append(row_dict)
    
    # Turn Regions into a list of dictionaries
    regions = []
    for item in region_data:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['region'] = item.region
        regions.append(row_dict)

    # Turn Health Spending into a list of dictionaries
    spending_pop = []
    for item in spending_pop_data:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['country_id'] = item.country_id
        row_dict['region_id'] = item.region_id
        row_dict['country'] = item.country
        row_dict['code'] = item.code
        row_dict['income'] = item.income
        row_dict['year'] = item.year
        row_dict['health_spending_mil_USD'] = item.health_spending_mil_USD
        row_dict['population_thousands'] = item.population_thousands
        row_dict['health_spending_per_capita_USD'] = item.health_spending_per_capita_USD
        spending_pop.append(row_dict)

    # Turn Health Spending into a list of dictionaries
    amr = []
    for item in amr_data:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['region_id'] = item.region_id
        row_dict['measure_id'] = item.measure_id
        row_dict['measure_name'] = item.measure_name
        row_dict['location_id'] = item.location_id
        row_dict['location_name'] = item.location_name
        row_dict['sex_id'] = item.sex_id
        row_dict['sex_name'] = item.sex_name
        row_dict['age_group_id'] = item.age_group_id
        row_dict['age_group_name'] = item.age_group_name
        row_dict['cause_id'] = item.cause_id
        row_dict['cause_name'] = item.cause_name
        row_dict['year_id'] = item.year_id
        row_dict['metric_id'] = item.metric_id
        row_dict['metric_name'] = item.metric_name
        row_dict['infectious_syndrome'] = item.infectious_syndrome
        row_dict['pathogen'] = item.pathogen
        row_dict['antibiotic_class'] = item.antibiotic_class
        row_dict['counterfactual'] = item.counterfactual
        row_dict['val'] = item.val
        row_dict['upper'] = item.upper
        row_dict['lower'] = item.lower
        amr.append(row_dict)

    # Make a dictionary to hold all tables and adds each list of dictionaries to the main dictionary
    all_data = {}
    all_data['countries'] = countries
    all_data['regions'] = regions
    all_data['spending_population'] = spending_pop
    all_data['AMR_data'] = amr

    # Jsonify data and return it
    return jsonify(all_data)

@app.route("/api/v1.0/countries")
def country_data():
    print("The countries dataset has been accesed")

    # Start a session
    session = Session(engine)

    # Query the database to get all country data
    country_dataset = session.query(Countries).all()

    # Close the session
    session.close()

    # Format the data
    countries = []
    for item in country_dataset:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['region_id'] = item.region_id
        row_dict['country'] = item.country
        row_dict['country_code'] = item.country_code
        row_dict['latitude'] = item.latitude
        row_dict['longitude'] = item.longitude
        countries.append(row_dict)

    # Jsonify data and return it
    return jsonify(countries)

@app.route("/api/v1.0/regions")
def region_data():
    print("The regions dataset has been accesed")

    # Start a session
    session = Session(engine)

    # Query the database to get all regions data
    region_dataset = session.query(Regions).all()

    # Close the session
    session.close()

    # Format the data
    regions = []
    for item in region_dataset:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['region'] = item.region
        regions.append(row_dict)

    # Jsonify data and return it
    return jsonify(regions)    

@app.route("/api/v1.0/spending")
def spending_pop_data():
    print("The spending and population dataset has been accesed")

    # Start a session
    session = Session(engine)

    # Query the database to get all spending and population data
    spending_pop_dataset = session.query(SpendingPop).all()

    # Close the session
    session.close()

    # Format the data
    spending_pop = []
    for item in spending_pop_dataset:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['country_id'] = item.country_id
        row_dict['region_id'] = item.region_id
        row_dict['country'] = item.country
        row_dict['code'] = item.code
        row_dict['income'] = item.income
        row_dict['year'] = item.year
        row_dict['health_spending_mil_USD'] = item.health_spending_mil_USD
        row_dict['population_thousands'] = item.population_thousands
        row_dict['health_spending_per_capita_USD'] = item.health_spending_per_capita_USD
        spending_pop.append(row_dict)

    # Jsonify data and return it
    return jsonify(spending_pop) 

@app.route("/api/v1.0/amr")
def amr_data():
    print("The AMR dataset has been accesed")

    # Start a session
    session = Session(engine)

    # Query the database to get all amr data
    amr_dataset = session.query(AMR_data).all()

    # Close the session
    session.close()

    # Format the data
    amr = []
    for item in amr_dataset:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['region_id'] = item.region_id
        row_dict['measure_id'] = item.measure_id
        row_dict['measure_name'] = item.measure_name
        row_dict['location_id'] = item.location_id
        row_dict['location_name'] = item.location_name
        row_dict['sex_id'] = item.sex_id
        row_dict['sex_name'] = item.sex_name
        row_dict['age_group_id'] = item.age_group_id
        row_dict['age_group_name'] = item.age_group_name
        row_dict['cause_id'] = item.cause_id
        row_dict['cause_name'] = item.cause_name
        row_dict['year_id'] = item.year_id
        row_dict['metric_id'] = item.metric_id
        row_dict['metric_name'] = item.metric_name
        row_dict['infectious_syndrome'] = item.infectious_syndrome
        row_dict['pathogen'] = item.pathogen
        row_dict['antibiotic_class'] = item.antibiotic_class
        row_dict['counterfactual'] = item.counterfactual
        row_dict['val'] = item.val
        row_dict['upper'] = item.upper
        row_dict['lower'] = item.lower
        amr.append(row_dict)

    # Jsonify data and return it
    return jsonify(amr) 

@app.route("/api/v1.0/countries/<region>")
def countries_per_region(region):
    print(f"The list of countries in region {region} has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database to get all countries in the specified region
    countries_by_region = session.query(Countries.country).filter(Regions.region == region).join(Regions).all()

    # Close the session
    session.close()

    # Format the data
    countries = []
    for item in countries_by_region:
        countries.append(item[0])

    # Jsonify data and return it
    return jsonify(countries)

@app.route("/api/v1.0/amr/pathogens")
def pathogen_list():
    print("The pathogen list endpoint has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database to get all unique pathogens including totals
    pathogens = session.query(AMR_data.pathogen).distinct().all()

    # Close the session
    session.close()

    # Formats the data 
    pathogens_list = []
    for item in pathogens:
        pathogens_list.append(item[0])

    # Jsonify data and return it
    return jsonify(pathogens_list)
    
@app.route("/api/v1.0/amr/measures")
def measure_list():
    print("The measures list endpoint has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database to get all unique measures
    measures = session.query(AMR_data.measure_name).distinct().all()

    # Close the session
    session.close()

    # Formats the data 
    measures_list = []
    for item in measures:
        measures_list.append(item[0])

    # Jsonify data and return it
    return jsonify(measures_list)

@app.route("/api/v1.0/amr/locations")
def location_list():
    print("The locations list endpoint has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database to get all unique locations
    locations = session.query(AMR_data.location_name).distinct().all()

    # Close the session
    session.close()

    # Formats the data 
    locations_list = []
    for item in locations:
        locations_list.append(item[0])

    # Jsonify data and return it
    return jsonify(locations_list)

@app.route("/api/v1.0/amr/counterfactuals")
def counterfactual_list():
    print("The counterfactuals list endpoint has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database to get all unique counterfactuals
    counterfactuals = session.query(AMR_data.counterfactual).distinct().all()

    # Close the session
    session.close()

    # Formats the data 
    counterfactuals_list = []
    for item in counterfactuals:
        counterfactuals_list.append(item[0])

    # Jsonify data and return it
    return jsonify(counterfactuals_list)

@app.route("/api/v1.0/amr/ages")
def age_list():
    print("The age list endpoint has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database to get all unique counterfactuals
    ages = session.query(AMR_data.age_group_name).distinct().all()

    # Close the session
    session.close()

    # Formats the data 
    ages_list = []
    for item in ages:
        ages_list.append(item[0])

    # Jsonify data and return it
    return jsonify(ages_list)

@app.route("/api/v1.0/amr/infectious_syndromes")
def syndrome_list():
    print("The infectious syndrome list endpoint has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database to get all unique counterfactuals
    syndromes = session.query(AMR_data.infectious_syndrome).distinct().all()

    # Close the session
    session.close()

    # Formats the data 
    syndromes_list = []
    for item in syndromes:
        syndromes_list.append(item[0])

    # Jsonify data and return it
    return jsonify(syndromes_list)

@app.route("/api/v1.0/amr/antibiotic_classes")
def antibiotic_list():
    print("The antibiotic class list endpoint has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database to get all unique counterfactuals
    antibiotics = session.query(AMR_data.antibiotic_class).distinct().all()

    # Close the session
    session.close()

    # Formats the data 
    antibiotics_list = []
    for item in antibiotics:
        antibiotics_list.append(item[0])

    # Jsonify data and return it
    return jsonify(antibiotics_list)

# ( or  or  or  or   or antibiotic class or age group)
@app.route("/api/v1.0/amr/<pathogen>")
def pathogen_filter(pathogen):
    print(f"Pathogen {pathogen} filter has been viewed")

    # Start a session
    session = Session(engine)

    # Query the database
    filtered_data = session.query(
            AMR_data.location_name,
            AMR_data.infectious_syndrome,
            AMR_data.pathogen,
            AMR_data.antibiotic_class,
            AMR_data.val,
            AMR_data.upper,
            AMR_data.lower
        ).filter(
            AMR_data.pathogen == pathogen,
            AMR_data.age_group_name == "All Ages",
            AMR_data.measure_name == "Deaths",
            AMR_data.counterfactual == "Drug-susceptible infection"
        ).all()
    
    # close the session
    session.close()

    # Format the data
    formatted = []
    for row in filtered_data:
        data_dict = {}
        data_dict['location_name'] = row[0]
        data_dict['infectious_syndrome'] = row[1]
        data_dict['pathogen'] = row[2]
        data_dict['antibiotic_class'] = row[3]
        data_dict['val'] = row[4]
        data_dict['upper'] = row[5]
        data_dict['lower'] = row[6]
        formatted.append(data_dict)

    # Jsonify and return data
    return jsonify(formatted)

@app.route("/api/v1.0/amr/<measure>")
def measure_filter(measure):
    print(f"Measure {measure} filter has been viewed")

    # Start a session
    session = Session(engine)

    # Query the database
    filtered_data = session.query(
            AMR_data.measure_name,
            AMR_data.location_name,
            AMR_data.age_group_name,
            AMR_data.infectious_syndrome,
            AMR_data.pathogen,
            AMR_data.antibiotic_class,
            AMR_data.val,
            AMR_data.upper,
            AMR_data.lower
        ).filter(
            AMR_data.measure_name == measure
        ).all()
    
    # close the session
    session.close()

    # Format the data
    formatted = []
    for row in filtered_data:
        data_dict = {}
        data_dict['measure_name'] = row[0]
        data_dict['location_name'] = row[1]
        data_dict['age_group_name'] = row[2]
        data_dict['infectious_syndrome'] = row[3]
        data_dict['pathogen'] = row[4]
        data_dict['antibiotic_class'] = row[5]
        data_dict['val'] = row[6]
        data_dict['upper'] = row[7]
        data_dict['lower'] = row[8]
        formatted.append(data_dict)

    # Jsonify and return data
    return jsonify(formatted)

@app.route("/api/v1.0/amr/<location>")
def location_filter(location):
    print(f"location {location} filter has been viewed")

    # Start a session
    session = Session(engine)

    # Query the database
    filtered_data = session.query(
            AMR_data.location_name,
            AMR_data.infectious_syndrome,
            AMR_data.pathogen,
            AMR_data.antibiotic_class,
            AMR_data.val,
            AMR_data.upper,
            AMR_data.lower
        ).filter(
            AMR_data.location_name == location,
            AMR_data.age_group_name == "All Ages",
            AMR_data.measure_name == "Deaths",
            AMR_data.counterfactual == "Drug-susceptible infection"
        ).all()
    
    # close the session
    session.close()

    # Format the data
    formatted = []
    for row in filtered_data:
        data_dict = {}
        data_dict['location_name'] = row[0]
        data_dict['infectious_syndrome'] = row[1]
        data_dict['pathogen'] = row[2]
        data_dict['antibiotic_class'] = row[3]
        data_dict['val'] = row[4]
        data_dict['upper'] = row[5]
        data_dict['lower'] = row[6]
        formatted.append(data_dict)

    # Jsonify and return data
    return jsonify(formatted)

@app.route("/api/v1.0/amr/<counterfactual>")
def counterfactual_filter(counterfactual):
    print(f"counterfactual {counterfactual} filter has been viewed")

    # Start a session
    session = Session(engine)

    # Query the database
    filtered_data = session.query(
            AMR_data.measure_name,
            AMR_data.location_name,
            AMR_data.age_group_name,
            AMR_data.infectious_syndrome,
            AMR_data.pathogen,
            AMR_data.antibiotic_class,
            AMR_data.val,
            AMR_data.upper,
            AMR_data.lower
        ).filter(
            AMR_data.counterfactual == counterfactual
        ).all()
    
    # close the session
    session.close()

    # Format the data
    formatted = []
    for row in filtered_data:
        data_dict = {}
        data_dict['measure_name'] = row[0]
        data_dict['location_name'] = row[1]
        data_dict['age_group_name'] = row[2]
        data_dict['infectious_syndrome'] = row[3]
        data_dict['pathogen'] = row[4]
        data_dict['antibiotic_class'] = row[5]
        data_dict['val'] = row[6]
        data_dict['upper'] = row[7]
        data_dict['lower'] = row[8]
        formatted.append(data_dict)

    # Jsonify and return data
    return jsonify(formatted)

@app.route("/api/v1.0/amr/<infectious_syndrome>")
def syndrome_filter(infectious_syndrome):
    print(f"infectious_syndrome {infectious_syndrome} filter has been viewed")

    # Start a session
    session = Session(engine)

    # Query the database
    filtered_data = session.query(
            AMR_data.location_name,
            AMR_data.infectious_syndrome,
            AMR_data.pathogen,
            AMR_data.antibiotic_class,
            AMR_data.val,
            AMR_data.upper,
            AMR_data.lower
        ).filter(
            AMR_data.infectious_syndrome == infectious_syndrome,
            AMR_data.age_group_name == "All Ages",
            AMR_data.measure_name == "Deaths",
            AMR_data.counterfactual == "Drug-susceptible infection"
        ).all()
    
    # close the session
    session.close()

    # Format the data
    formatted = []
    for row in filtered_data:
        data_dict = {}
        data_dict['location_name'] = row[0]
        data_dict['infectious_syndrome'] = row[1]
        data_dict['pathogen'] = row[2]
        data_dict['antibiotic_class'] = row[3]
        data_dict['val'] = row[4]
        data_dict['upper'] = row[5]
        data_dict['lower'] = row[6]
        formatted.append(data_dict)

    # Jsonify and return data
    return jsonify(formatted)

@app.route("/api/v1.0/amr/<antibiotic_class>")
def antibiotic_class_filter(antibiotic_class):
    print(f"antibiotic_class {antibiotic_class} filter has been viewed")

    # Start a session
    session = Session(engine)

    # Query the database
    filtered_data = session.query(
            AMR_data.location_name,
            AMR_data.infectious_syndrome,
            AMR_data.pathogen,
            AMR_data.antibiotic_class,
            AMR_data.val,
            AMR_data.upper,
            AMR_data.lower
        ).filter(
            AMR_data.antibiotic_class == antibiotic_class,
            AMR_data.age_group_name == "All Ages",
            AMR_data.measure_name == "Deaths",
            AMR_data.counterfactual == "Drug-susceptible infection"
        ).all()
    
    # close the session
    session.close()

    # Format the data
    formatted = []
    for row in filtered_data:
        data_dict = {}
        data_dict['location_name'] = row[0]
        data_dict['infectious_syndrome'] = row[1]
        data_dict['pathogen'] = row[2]
        data_dict['antibiotic_class'] = row[3]
        data_dict['val'] = row[4]
        data_dict['upper'] = row[5]
        data_dict['lower'] = row[6]
        formatted.append(data_dict)

    # Jsonify and return data
    return jsonify(formatted)

@app.route("/api/v1.0/amr/<age_group_name>")
def age_filter(age_group_name):
    print(f"age_group_name {age_group_name} filter has been viewed")

    # Start a session
    session = Session(engine)

    # Query the database
    filtered_data = session.query(
            AMR_data.measure_name,
            AMR_data.location_name,
            AMR_data.age_group_name,
            AMR_data.infectious_syndrome,
            AMR_data.pathogen,
            AMR_data.antibiotic_class,
            AMR_data.val,
            AMR_data.upper,
            AMR_data.lower
        ).filter(
            AMR_data.age_group_name == age_group_name
        ).all()
    
    # close the session
    session.close()

    # Format the data
    formatted = []
    for row in filtered_data:
        data_dict = {}
        data_dict['measure_name'] = row[0]
        data_dict['location_name'] = row[1]
        data_dict['age_group_name'] = row[2]
        data_dict['infectious_syndrome'] = row[3]
        data_dict['pathogen'] = row[4]
        data_dict['antibiotic_class'] = row[5]
        data_dict['val'] = row[6]
        data_dict['upper'] = row[7]
        data_dict['lower'] = row[8]
        formatted.append(data_dict)

    # Jsonify and return data
    return jsonify(formatted)

@app.route("/api/v1.0/spending/year_list")
def spending_year_list():
    print("The spending year list endpoint has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database to get all unique years
    measures = session.query(SpendingPop.year).distinct().all()

    # Close the session
    session.close()

    # Formats the data 
    years_list = []
    for item in measures:
        years_list.append(item[0])

    # Jsonify data and return it
    return jsonify(years_list)

@app.route("/api/v1.0/spending/<year>")
def one_year_data(year):
    print(f"Year {year} spending and population data has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database to get all spending and population data for a year, grouped by region
    spending_pop_data = session.query(
        SpendingPop.region_id,
        SpendingPop.country,
        Regions.region,
        func.sum(SpendingPop.health_spending_mil_USD),
        func.sum(SpendingPop.population_thousands)
    ).filter(SpendingPop.year == year).join(Regions).group_by(SpendingPop.region_id).all()

    # Close the session
    session.close()

    # Format the data
    data_formatted = []
    for row in spending_pop_data:
        data_dict = {}
        data_dict['region_id'] = row[0]
        data_dict['country'] = row[1]
        data_dict['region'] = row[2]
        data_dict['sum_health_spending_mil_USD'] = row[3]
        data_dict['sum_population_thousands'] = row[4]
        data_formatted.append(data_dict)

    # Jsonify data and return it
    return jsonify(data_formatted)

@app.route("/api/v1.0/spending/<start_year>/<end_year>")
def year_range_data(start_year, end_year):
    print(f"Spending and population data has been accessed for {start_year} through {end_year}")

    # Start a session
    session = Session(engine)

    # Query the database to get all spending and population data for a range of years, grouped by region and year
    year_range_data = session.query(
        SpendingPop.region_id,
        SpendingPop.country,
        Regions.region,
        SpendingPop.year,
        func.sum(SpendingPop.health_spending_mil_USD),
        func.sum(SpendingPop.population_thousands)
        ).filter(
        SpendingPop.year >= start_year, SpendingPop.year <= end_year
        ).join(Regions).group_by(SpendingPop.region_id, SpendingPop.year).all()
    
    # Close the session
    session.close()

    # Format the data
    data_formatted = []
    for row in year_range_data:
        data_dict = {}
        data_dict['region_id'] = row[0]
        data_dict['country'] = row[1]
        data_dict['region'] = row[2]
        data_dict['year'] = row[3]
        data_dict['sum_health_spending_mil_USD'] = row[4]
        data_dict['sum_population_thousands'] = row[5]
        data_formatted.append(data_dict)

    # Jsonify data and return it
    return jsonify(data_formatted)

#################################################
# Run the App
#################################################

if __name__ == '__main__':
    app.run(debug=True)